/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')

const pkg = require('./package')
const ENV = process.env.NODE_ENV || 'development'
const DEV_PORT = 4444

const hmrEntries = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
  'webpack/hot/only-dev-server',
]

const deps = Object.keys(pkg.dependencies)

module.exports = {
  entry: {
    vendor: (ENV !== 'production' ? hmrEntries : []).concat(deps),
    app: ['./main/src/jsx/main.jsx'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: __dirname + '/main/public',
    publicPath: '/',
  },
  devServer: {
    contentBase: 'main/public/',
    historyApiFallback: true,
    port: DEV_PORT,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    }),
    new htmlPlugin({
      template: 'main/src/index.html',
    }),
    // new workboxPlugin({
    //   globDirectory: 'main/public',
    //   globPatterns: ['**/*.{html,js}'],
    //   swDest: path.join('main/public', 'sw.js'),
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
  ].concat(
    ENV === 'production'
      ? [
          new UglifyJSPlugin({
            parallel: {
              cache: true,
              workers: 2, // for e.g
            },
          }),
          new CompressionPlugin(),
        ]
      : []
  ),
}
