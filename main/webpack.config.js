const path = require('path')
const config = require('./config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: config.develop.path.jsx + '/main',
  },

  output: {
    filename: config.dest.path.js + '/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  resolve: {
    alias: {
      root: path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx'],
  },
}

if (process.env.NODE_ENV !== 'production') {
  module.exports.devtool = 'inline-source-map'
}
