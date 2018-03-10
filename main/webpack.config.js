const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const config = require('./config')

module.exports = {
  production: {
    entry: {
      main: config.develop.path.jsx + '/main.jsx',
    },

    output: {
      filename: config.production.path.js + '/bundle.js',
    },

    module: {
      loaders: [
        { test: /\.html/, loader: 'underscore-template-loader' },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'es6-loader',
        },
      ],
    },

    resolve: {
      root: [path.resolve('./src')],
      extensions: ['.js', '.jsx'],
      mainFields: ['main'],
    },

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warning: 'verbose',
            ecma: 6,
            beautify: false,
            compress: false,
            comments: false,
            mangle: false,
            toplevel: false,
            keep_classnames: true,
            keep_fnames: true,
          },
        }),
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        DEBUG: config.production.debug,
        'process.env': {
          NODE_ENV: '"production"',
        },
      }),
    ],
  },

  develop: {
    entry: {
      main: config.develop.path.jsx + '/main.jsx',
    },

    output: {
      filename: config.dest.path.js + '/bundle.js',
    },

    module: {
      loaders: [
        { test: /\.html/, loader: 'underscore-template-loader' },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },

    resolve: {
      alias: {
        root: path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.jsx'],
      // root: [path.resolve('./src')],
      // mainFields: ['main'],
      // root: [path.join(__dirname, 'bower_components')],
      // moduleDirectories: ['bower_components'],
      // extensions: ['.js', '.jsx'],
    },
  },
}
