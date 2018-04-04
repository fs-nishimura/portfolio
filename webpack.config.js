/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')

const package = require('./package')
const ENV = process.env.NODE_ENV || 'development'
const DEV_PORT = 4444

const hmrEntries = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
  'webpack/hot/only-dev-server',
]

const deps = Object.keys(package.dependencies)

module.exports = [
  {
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
  },
  {
    entry: {
      style: ['./main/src/sass/style.scss'],
    },
    output: {
      filename: '[name].css',
      path: __dirname + '/main/public/assets/css',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader?-url&minimize&sourceMap!',
                options: {
                  sourceMap: true,
                  minimize: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    devtool: 'source-map',
    plugins: [new ExtractTextPlugin('[name].css')],
  },
]
