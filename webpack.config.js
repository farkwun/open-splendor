module.exports = {
  entry: ["./source/index.js"],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api/**": {
        target: "http://localhost:5000",
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
