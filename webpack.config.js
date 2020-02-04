const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
      filename: "index.html",
      template: "index.html"
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
        test: /\.(png|jpg|svg)$/,
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
