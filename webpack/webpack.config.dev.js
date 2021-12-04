const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(
  {
    mode: 'development',
    entry: {
      shared: './src/index.ts'
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  },
  sharedWebpackConfig
);
