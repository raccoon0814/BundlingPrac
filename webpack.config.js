const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static:{
        directory: path.resolve(__dirname, 'docs')
    },
    port:3001,
  },
plugins: 
    [new CleanWebpackPlugin()] 
    [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src", "index.html")
  })]
};