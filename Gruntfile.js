module.exports = function (grunt) {
  grunt.initConfig({
    uncss: {
      dist: {
        files: {
          'dist/css/picture.css': ['index.html']
        }
      }
    },
    copy: {
      main: {
        expand: true,
        src: ['fonts/*', 'index.html'],
        dest: 'dist/',
      }
    }
  });

  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['uncss', 'copy:main']);
};
