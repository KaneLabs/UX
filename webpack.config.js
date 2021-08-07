const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.ts",
    components: "./src/components"
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "[name].js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.(j|t)sx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      }
    ]
  }
};