const webpack = require('webpack');
const merge = require('webpack-merge');

const DefinePlugin = webpack.DefinePlugin;
const HtmlPlugin = require('html-webpack-plugin');
const NoEmitOnErrorsPlugin = webpack.NoEmitOnErrorsPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const prod = {
  devtool: false,
  plugins: [
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new HtmlPlugin({
      template: 'src/index.ejs',
      filename: 'index.ejs'
    }),
    new NoEmitOnErrorsPlugin,
    new UglifyJsPlugin({
      sourceMap: false
    }),
  ]
};

module.exports = merge(require('./common'), prod);
