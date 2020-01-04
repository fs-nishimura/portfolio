'use strict'

const constant = require('./main/src/config/constant')
const data = require('./main/src/config/data')

module.exports = {
  develop: {
    data: data,
    constant: constant,
    debug: true,

    path: {
      root: './main/src',
      sass: './main/src/sass',
      js: './main/src/js',
      jsx: './main/src/jsx',
    },
  },

  dist: {
    path: {
      root: './main/dist',
      css: './main/assets/css',
      js: './main/assets/js',
      img: './main/assets/img',
    },
  },

  production: {
    data: data,
    constant: constant,
    debug: false,

    path: {
      root: './main/production',
      css: './main/production/assets/css',
      js: './main/production/assets/js',
      img: './main/production/assets/img',
    },
  },
}
