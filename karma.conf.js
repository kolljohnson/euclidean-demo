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
	  //'sounds/*.wav'
	    {pattern: 'sounds/*.wav', included: true, watched: false, served: true},
      ],
    reporters: ['progress'],
    port: 8123,
    singleRun: true,
  });
}
