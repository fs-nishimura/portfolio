/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoPrefixer = require('autoprefixer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')

const pkg = require('./package')
const ENV = process.env.NODE_ENV || 'development'
const DEV_PORT = 4444

const hmrEntries = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
  'webpack/hot/only-dev-server'
]

const deps = Object.keys(pkg.dependencies)

module.exports = [
  {
    mode: ENV,
    entry: {
      vendor: (ENV !== 'production' ? hmrEntries : []).concat(deps),
      app: ['./src/jsx/main.jsx']
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: __dirname + '/public',
      publicPath: '/'
    },
    devServer: {
      contentBase: 'public/',
      historyApiFallback: true,
      port: DEV_PORT
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },

    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development'
        )
      }),
      new htmlPlugin({
        template: './src/index.html'
      }),
      new CopyWebpackPlugin([
            {
                from: './src/assets',
                to: './assets'
            }
        ])
    ].concat(
      ENV === 'production'
        ? [
            new TerserPlugin({
              test: /\.js($|\?)/i
            })
          ]
        : []
    ),
    node: {
        fs: "empty",
        net: "empty" // This is to account for what appears to be a bug: https://github.com/josephsavona/valuable/issues/9
    },
  },
  {
    mode: ENV,
    entry: {
      style: ['./src/sass/style.scss']
    },
    output: {
      filename: '[name].css',
      path: __dirname + '/public/assets/css',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                AutoPrefixer(),
              ],
            },
          }, {
            loader: 'sass-loader',
          }],
        }
      ]
    },
    devtool: 'source-map',
    plugins: [new MiniCssExtractPlugin({ filename: '[name].min.css' })]
  }
]
