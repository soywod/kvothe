// Core
var webpack = require('webpack');

// Plugins
var HtmlPlugin = require('html-webpack-plugin');
var HotModuleReloadPlugin = webpack.HotModuleReplacementPlugin;
var NamedModulePlugin = webpack.NamedModulesPlugin;

// Config
var config = {
    devtool: 'inline-source-map',
    entry: './src/main.jsx',
    output: {
        filename: '[hash:8].js',
        path: require('path').join(__dirname, '..', 'dist')
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        hot: true
    },
    resolve: {
        alias: {
            bootstrap: 'bootstrap/dist/css/bootstrap.min.css'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new HotModuleReloadPlugin(),
        new NamedModulePlugin(),
        new HtmlPlugin({template: './src/index.ejs'}),
    ]
};

module.exports = config;
