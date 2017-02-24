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
        filename: '[hash:8].js',
        path    : require('path').join(__dirname, '..', 'dist')
    },
    devServer: {
        inline            : true,
        historyApiFallback: true,
        hot               : true
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
                test   : /\.css$/,
                loader : 'style-loader!css-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins  : [
        new HotModuleReloadPlugin(),
        new NamedModulePlugin(),
        new HtmlPlugin({template: './src/template.ejs'}),
    ]
};

module.exports = config;
