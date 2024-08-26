const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: '@sucrase/webpack-loader',
          options: {
            transforms: ['jsx'] 
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] 
  },
  devtool: 'source-map', 
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html' 
    })
  ]
};
