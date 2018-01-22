'use strict';

module.exports = function (grunt) {
  grunt.registerTask('build', 'browserify bundle', function() {
    var cp = require('child_process');

    console.log('build: browserify bundle');
    cp.exec('browserify ./public/main.js -o ./public/bundle.js');
  });
};
