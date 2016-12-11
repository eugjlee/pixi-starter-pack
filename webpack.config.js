const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: path.join(__dirname, 'src', 'index.js'),
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'bin'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      pixi: 'pixi.js'
    }
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jpe?g$|\.svg$|\.png$|\.wav$|\.mp3$/,
        exclude: /node_modules/,
        use: "file-loader?name=[path][name].[ext]"
      }, {
        test: /index.html$/,
        exclude: /node_modules/,
        use: "file-loader?name=index.html"
      }, {
        test: /\.json$/,
        exclude: /node_modules/,
        use: "json-loader"
      }, {
        test: /\.json$/,
        include: path.join(__dirname, 'node_modules', 'pixi.js'),
        use: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'node_modules/pixi.js'),
        use: 'transform-loader?brfs',
        enforce: 'post'
      }
    ],
  }
};
