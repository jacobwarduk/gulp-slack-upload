'use strict';

module.exports = function(config) {
  config.set({
    basePath: '.',
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    browsers: ['Chrome'],
    
    browserify: {
      debug: true,
      transform: []
    },
  
    preprocessors: {
      'index.js': ['browserify'],
      'spec/index.spec.js': ['browserify']
    },

    frameworks: [
      'jasmine',
      'browserify'
    ],
    
    files: [
      'index.js',
      'spec/index.spec.js'
    ],
    
    exclude: [],
    
    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-browserify'
    ]
  });
};
