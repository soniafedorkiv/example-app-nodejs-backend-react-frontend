module.exports = {
  mode: 'development', // або 'production' залежно від ваших потреб
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: '@sucrase/webpack-loader',
          options: {
            transforms: ['jsx'],
          },
        },
      },
    ],
  },
};