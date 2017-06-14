const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = {
  entry  : './src/client',
  output : {
    path      : path.join(__dirname, '..', 'dist'),
    filename  : 'js/[hash:8].js',
    publicPath: '/'
  },
  resolve: {
    alias     : {
      bootstrap     : 'bootstrap/dist/css/bootstrap.min.css',
      'font-awesome': 'font-awesome/css/font-awesome.min.css'
    },
    extensions: ['.js', '.jsx']
  },
  module : {
    rules: [
      {
        test   : /\.jsx?$/,
        loader : 'babel-loader',
        exclude: /node_modules/,
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
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash:8].[ext]'
      },
      {
        test  : /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash:8].[ext]'
      },
      {
        test  : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash:8].[ext]'
      },
      {
        test  : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=fonts/[hash:8].[ext]'
      },
      {
        test  : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash:8].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[hash:8].css')
  ]
};

module.exports = common;
