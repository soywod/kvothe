const fs      = require('fs');
const webpack = require('webpack');
const merge   = require('webpack-merge');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === - 1)
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod);

const prod = {
  devtool  : false,
  target   : 'node',
  externals: nodeModules,
  entry    : './src/server',
  output   : {
    filename: 'server.js'
  },
  plugins  : [
    new UglifyJsPlugin
  ]
};

module.exports = merge(require('./common'), prod);
