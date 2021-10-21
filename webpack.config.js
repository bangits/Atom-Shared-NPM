const path = require('path');
const fs = require('fs');

const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const { configureSharedWebpack } = require('./webpack.shared');
const { DefinePlugin } = require('webpack');

const createDiConfig = (directoryPath) => {
  const folderPath = path.resolve(`./src/${directoryPath}`);

  return fs
    .readdirSync(folderPath)
    .filter((fileName) => fileName !== 'index.ts')
    .map((fileName) => ({
      moduleName: fileName.split('.ts')[0],
      modulePath: `${directoryPath}/${fileName.split('.ts')[0]}`
    }));
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'atom',
    projectName: 'common',
    webpackConfigEnv,
    argv
  });

  const isDevelopment = !webpackConfigEnv.WEBPACK_BUILD;

  const useCaseFiles = createDiConfig('domain/use-case');
  const repositoryFiles = createDiConfig('domain/data');
  const serviceFiles = createDiConfig('services');

  return merge(defaultConfig, configureSharedWebpack(isDevelopment), {
    output: {
      publicPath: '/'
    },
    devServer: {
      port: webpackConfigEnv.port || 6001,
      host: '0.0.0.0', // To accept connections from outside container
      hot: false
    },
    externals: [/^@atom/],
    plugins: [
      new DefinePlugin({
        diFiles: JSON.stringify([...useCaseFiles, ...repositoryFiles, ...serviceFiles])
      })
    ]
  });
};
