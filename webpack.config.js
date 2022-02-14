const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
      index: './src/index.js',
      dom: './src/dom.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo Titan',
    }),
  ],
  module: {
    rules: [
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
      static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};