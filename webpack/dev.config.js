// Core
const webpack = require('webpack');

// Plugins
const HtmlPlugin            = require('html-webpack-plugin');
const HotModuleReloadPlugin = webpack.HotModuleReplacementPlugin;
const NamedModulePlugin     = webpack.NamedModulesPlugin;

// Config
const config = {
    devtool  : 'inline-source-map',
    entry    : './src/index',
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
            bootstrap: 'bootstrap/dist/css/bootstrap.min.css'
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
                    plugins: ['transform-runtime']
                }
            },
            {
                test  : /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins  : [
        new HotModuleReloadPlugin(),
        new NamedModulePlugin(),
        new HtmlPlugin({template: './src/template.ejs'})
    ]
};

module.exports = config;
