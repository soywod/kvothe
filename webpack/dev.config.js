const webpack = require('webpack');

const HtmlPlugin            = require('html-webpack-plugin');
const ExtractTextPlugin     = require('extract-text-webpack-plugin');
const HotModuleReloadPlugin = webpack.HotModuleReplacementPlugin;
const NamedModulePlugin     = webpack.NamedModulesPlugin;

const config = {
  entry    : './src/app',
  output   : {
    path      : require('path').join(__dirname, '..', 'dist'),
    filename  : '[hash:8].js',
    publicPath: '/'
  },
  devServer: {
    hot               : true,
    inline            : true,
    historyApiFallback: true
  },
  resolve  : {
    alias     : {
      bootstrap  : 'bootstrap/dist/css/bootstrap.min.css',
      fontAwesome: 'font-awesome/css/font-awesome.min.css'
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
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[hash:8].[ext]'
      },
      {
        test  : /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[hash:8].[ext]'
      },
      {
        test  : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[hash:8].[ext]'
      },
      {
        test  : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=[hash:8].[ext]'
      },
      {
        test  : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[hash:8].[ext]'
      }
    ]
  },
  plugins  : [
    new HotModuleReloadPlugin(),
    new NamedModulePlugin(),
    new HtmlPlugin({template: './src/app.ejs'}),
    new ExtractTextPlugin("[hash:8].css")
  ]
};

module.exports = config;
