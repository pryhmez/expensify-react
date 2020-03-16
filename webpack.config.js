//entry -> output

const path = require('path');
// console.log(path.join(__dirname, 'public')) 

module.exports = {
  entry: './src/app.js',
  // entry: './src/playground/hoc.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        "sass-loader"
      ]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 8080,
    // historyApiFallback: true,
  }
};