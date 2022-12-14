const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: ['babel-polyfill', './src/notes-app.js'],
  output: {
    path: path.resolve(__dirname, './../bundle.js'),
    filename: 'js/bandle.js',
  },
  devServer: {
    contentBase: './src',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './src/index.html',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
