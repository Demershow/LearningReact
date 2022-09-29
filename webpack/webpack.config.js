const webpack = require("webpack");
const modoDev = process.env.NODE_ENV !== "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  devServer: {
    contentBase: "./public",
    port: 9000,
  },
  optimization: {
    minimizer: [
      new uglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "extilo.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "saas-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      }
    ],
  },
};
