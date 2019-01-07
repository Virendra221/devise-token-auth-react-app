var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
   module: {
    rules: [{
      loader: 'babel-loader', // it did work for coverting
      test: /\.js$/,    // it show to include which file
      exclude: /node_modules/
    },
     {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
    watchContentBase: true,
    inline: true,
    historyApiFallback: true
  }
};