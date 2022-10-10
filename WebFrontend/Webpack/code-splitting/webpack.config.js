var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   //// use: ['css-loader'], // UI 상에 반영 X
      //   // use: ['css-loader', 'style-loader'], // ERROR
      //   use: ['style-loader', 'css-loader'], // SUCCESS
      // },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
