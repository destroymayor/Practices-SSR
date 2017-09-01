const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./Views/HTML.js"
  },
  output: {
    path: "./public/component",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
