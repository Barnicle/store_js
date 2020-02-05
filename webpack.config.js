const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "/build",
    port: 3000,
    hot: true,
    open: true,
    clientLogLevel: "silent",
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: false,
      appMountId: "root",
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name][img].[ext]",
              context: path.resolve(__dirname, "src/images/"),
              outputPath: "/",
              useRelativePaths: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
