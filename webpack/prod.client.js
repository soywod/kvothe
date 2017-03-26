const webpack = require('webpack');
const merge   = require('webpack-merge');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const HtmlPlugin     = require('html-webpack-plugin');

const prod = {
  devtool: false,
  plugins: [
    new UglifyJsPlugin({sourceMap: false}),
    new HtmlPlugin({
      template: 'src/static/index.ejs',
      filename: 'index.ejs'
    })
  ]
};

module.exports = merge(require('./common'), prod);
