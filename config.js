'use strict'

const constant = require('./app/src/_config/constant')
const data = require('./app/src/_config/data')

module.exports = {
  develop: {
    data: data,
    constant: constant,
    debug: true,

    path: {
      root: './app/src',
      sass: './app/src/sass',
      js: './app/src/js',
      jsx: './app/src/jsx',
    },
  },

  dist: {
    path: {
      root: './app/dist',
      css: './app/assets/css',
      js: './app/assets/js',
      img: './app/assets/img',
    },
  },

  production: {
    data: data,
    constant: constant,
    debug: false,

    path: {
      root: './app/production',
      css: './app/production/assets/css',
      js: './app/production/assets/js',
      img: './app/production/assets/img',
    },
  },
}
