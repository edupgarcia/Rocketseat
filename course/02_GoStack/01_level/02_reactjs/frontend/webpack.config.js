const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  module: {
    rules: [{
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }],
      },
      {
        test: /.*\.(gif|jpe?g|png)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public', 'main.js'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
};