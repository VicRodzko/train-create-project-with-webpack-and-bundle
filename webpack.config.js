module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    // dist/ - by default
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /.\js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  },
  "watch": true
}