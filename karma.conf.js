'use strict';

module.exports = karmaConfig;

function karmaConfig(configuration) {
  configuration.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
      colors: true,
      frameworks: [ 'mocha', 'browserify'],
    preprocessors: {
	'test/*.test.js': ['browserify', 'babel'],
    },
    browserify: {
      debug: true,
      transform: [ ['babelify', {presets: ['es2015']} ] ]
    },
      files: [
	  'bundle.js',
	  'test/*.test.js',
	   {pattern: 'sounds/*.wav', included: true, watched: false, served: true},
      ],
      proxies: {
	  '/sounds/': 'http://localhost:8123/base/sounds/'
      },
    reporters: ['progress'],
    port: 8123,
    singleRun: true,
  });
}
