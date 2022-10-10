var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    //* 새로운 HTML 파일 새로 생성
    // new HtmlWebpackPlugin(),
    //* index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};
