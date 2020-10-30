module.exports = function (grunt) {
  grunt.initConfig({
    'json-minify': {
      build: {
        files: 'book.json'
      }
    }
  });

  grunt.loadNpmTasks('grunt-json-minify');

  grunt.registerTask('default', ['json-minify']);
};
