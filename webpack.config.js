const path = require('path');

module.exports = {
  mode: 'development', // Змініть на 'production' для продакшн-збірки
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
            transforms: ['jsx'] // Трансформує JSX
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Додає розширення файлів для імпорту
  },
  devtool: 'source-map' // Додає мапи для налагодження
};