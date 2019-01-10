const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ['babel-polyfill', './notes-app.js'],
    output: {
        path: path.resolve(__dirname, './bundle.js'),
        filename: 'js/bandle.js'
    },
    devServer: {
        contentBase: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};