/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')

const pkg = require('./package')
const ENV = process.env.NODE_ENV || 'development'
const DEV_PORT = process.env.PORT || 4444

const hmrEntries = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
  'webpack/hot/only-dev-server',
]

const deps = Object.keys(pkg.dependencies)

module.exports = [
  {
    entry: {
      vendor: (ENV !== 'production' ? hmrEntries : []).concat(deps),
      app: ['./app/src/jsx/main.jsx'],
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: __dirname + '/app/public',
      publicPath: '/',
    },
    devServer: {
      contentBase: 'app/public/',
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
        template: 'app/src/index.html',
      }),
    ].concat(
      ENV === 'production'
        ? [
            new UglifyJsPlugin({
              test: /\.js($|\?)/i,
            }),
          ]
        : []
    ),
  },
  {
    entry: {
      style: ['./app/src/sass/style.scss'],
    },
    output: {
      filename: '[name].css',
      path: __dirname + '/app/public/assets/css',
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
