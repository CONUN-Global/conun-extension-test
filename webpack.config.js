const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { resolve } = require("path");
const tsRules = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: "ts-loader",
};
const plugins = [
  new HtmlWebpackPlugin({
    template: "src/popup-page/popup.html",
    filename: "popup.html",
    chunks: ["popup"],
  }),
  new CopyWebpackPlugin({
    patterns: [{ from: "public", to: "." }],
  }),
  new CleanWebpackPlugin(),
];
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: "./src/popup-page/popup.tsx",
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [tsRules],
  },
  plugins,
};
