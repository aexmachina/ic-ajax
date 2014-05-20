var broccoli = require('broccoli');

module.exports = require('broccoli-dist-es6-module')('lib', {
  global: 'ic.ajax',
  packageName: 'ic-ajax',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});
