const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const { configureSharedWebpack } = require('./webpack.shared');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'atom',
    projectName: 'common',
    webpackConfigEnv,
    argv
  });

  const isDevelopment = !webpackConfigEnv.WEBPACK_BUILD;

  return merge(defaultConfig, configureSharedWebpack(isDevelopment), {
    output: {
      publicPath: '/'
    },
    devServer: {
      port: webpackConfigEnv.port || 6001,
      liveReload: false,
      hot: false,
      webSocketServer: false
    },
    externals: [/^@atom/]
  });
};
