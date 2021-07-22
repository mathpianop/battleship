const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
}