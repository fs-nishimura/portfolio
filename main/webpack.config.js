const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
const config = require('./config');

module.exports = {

    production: {

        entry: {
            main: config.develop.path.jsx + "/main.jsx"
        },

        output: {
            filename: config.production.path.js + "/bundle.js"
        },

        module: {
            loaders: [
                { test: /\.coffee$/, loader: 'coffee-loader'},
                { test: /\.html/, loader: "underscore-template-loader" },
                { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' },
                { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'es6-loader' },
                { test: /\.jsx/, loader: 'jsx-loader?harmony' }
            ]
        },

        resolve: {
            root: [path.join(__dirname, 'bower_components')],
            moduleDirectories: ['bower_components'],
            extensions: ['', '.js', '.jsx', '.coffee'],
            descriptionFiles: ['bower.json'],
            mainFields: ['main']
        },

        optimization: {
          minimizer: [
            new UglifyJsPlugin({
              uglifyOptions: {
                warning: "verbose",
                ecma: 6,
                beautify: false,
                compress: false,
                comments: false,
                mangle: false,
                toplevel: false,
                keep_classnames: true,
                keep_fnames: true
              }
            })
          ]
        },

        plugins: [
            new webpack.DefinePlugin({
                DEBUG: config.production.debug,
                'process.env': {
                    'NODE_ENV': '"production"'
                }
            })
        ]
    },


    develop: {

        entry: {
            main: config.develop.path.jsx + "/main.jsx"
        },

        output: {
            filename: config.dest.path.js + "/bundle.js"
        },

        module: {
            loaders: [
                { test: /\.coffee$/, loader: 'coffee-loader'},
                { test: /\.html/, loader: "underscore-template-loader" },
                { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' },
                { test: /\.jsx/, loader: 'jsx-loader?harmony' }
            ]
        },

        resolve: {
            root: [path.join(__dirname, 'bower_components')],
            moduleDirectories: ['bower_components'],
            extensions: ['', '.js', '.jsx', '.coffee']
        }
    }

};
