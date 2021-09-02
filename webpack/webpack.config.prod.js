const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.config');

module.exports = merge({
  mode: "production",
  entry: {
    'shared': './src/index.ts',
    'shared.min': './src/index.ts'
  },
}, sharedWebpackConfig)