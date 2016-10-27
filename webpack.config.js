module.exports = {
  entry: './src/main.js',
  output: {
    path: './src',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3333,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
