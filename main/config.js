'use strict'

const constant = require('./src/_config/constant')
const data = require('./src/_config/data')

module.exports = {
  develop: {
    data: data,
    constant: constant,
    debug: true,

    path: {
      root: './src',
      jade: './src/jade',
      sass: './src/sass',
      js: './src/js',
      jsx: './src/jsx',
    },
  },

  dest: {
    path: {
      root: '.',
      css: './assets/css',
      js: './assets/js',
      img: './assets/img',
    },
  },

  production: {
    data: data,
    constant: constant,
    debug: false,

    path: {
      root: './production',
      css: './production/assets/css',
      js: './production/assets/js',
      img: './production/assets/img',
    },
  },
}
