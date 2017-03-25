const path    = require('path');
const webpack = require('webpack');

const HotModuleReloadPlugin = webpack.HotModuleReplacementPlugin;
const ExtractTextPlugin     = require('extract-text-webpack-plugin');

const config = {
  entry    : './src/client.jsx',
  output   : {
    path      : path.join(__dirname, 'src', 'static'),
    filename  : 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot               : true,
    inline            : true,
    historyApiFallback: true
  },
  resolve  : {
    alias     : {
      bootstrap     : 'bootstrap/dist/css/bootstrap.min.css',
      'font-awesome': 'font-awesome/css/font-awesome.min.css'
    },
    extensions: ['.js', '.jsx']
  },
  module   : {
    rules: [
      {
        test   : /\.jsx?$/,
        loader : 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-runtime',
            'transform-object-rest-spread',
          ]
        }
      },
      {
        test  : /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use     : 'css-loader'
        })
      },
      {
        test  : /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/fa.[ext]'
      },
      {
        test  : /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/fa.[ext]'
      },
      {
        test  : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/fa.[ext]'
      },
      {
        test  : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=fonts/fa.[ext]'
      },
      {
        test  : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/fa.[ext]'
      }
    ]
  },
  plugins  : [
    new HotModuleReloadPlugin(),
    new ExtractTextPlugin('bundle.css'),
  ]
};

module.exports = config;
