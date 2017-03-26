const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');

const HtmlPlugin            = require('html-webpack-plugin');
const HotModuleReloadPlugin = webpack.HotModuleReplacementPlugin;
const LoaderOptionsPlugin   = webpack.LoaderOptionsPlugin;

const dev = {
  devtool  : 'eval-source-map',
  devServer: {
    hot               : true,
    inline            : true,
    historyApiFallback: true
  },
  plugins  : [
    new HotModuleReloadPlugin,
    new LoaderOptionsPlugin({debug: true}),
    new HtmlPlugin({template: 'src/static/index.ejs'})
  ]
};

module.exports = merge(require('./common'), dev);
