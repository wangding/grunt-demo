module.exports = function (grunt) {
  grunt.initConfig({
    replace: {
      html: {
        src: ['src/*.html', 'src/**/*.html'],
        dest: 'dist/',
        replacements: [{
          from: 'href="gitbook',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/nodejs@gh-pages/gitbook'
        }, {
          from: 'href="styles',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/nodejs@gh-pages/styles'
        }, {
          from: 'href="images',
          to: 'href="https://cdn.jsdelivr.net/gh/wangding/nodejs@gh-pages/images'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('default', ['replace']);
};
