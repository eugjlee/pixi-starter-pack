const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'bin'),
    filename: 'bundle.js',
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.jpe?g$|\.svg$|\.png$|\.wav$|\.mp3$/,
        exclude: /node_modules/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /index.html$/,
        exclude: /node_modules/,
        use: 'file-loader?name=index.html',
      },
      {
        test: /\.json$/,
        include: /assets/,
        use: 'texture-pack-loader',
        type: 'javascript/auto',
      },
    ],
  },
};
