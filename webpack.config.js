const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { resolve } = require("path");
const path = require("path");

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
    content: "./src/content.ts",
    background: "./src/background.ts",
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, use: "ts-loader" },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
    ],
  },
  plugins,
};
