const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist", "index.html"),
    },
    port: 3000,
    open: true,
  },
  plugins: [new HTMLWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules",
      },
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
        exclude: "/node_modules",
      },
    ],
  },
};
