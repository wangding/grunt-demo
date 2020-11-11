module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      release: {
        files: {
          'src/dlg.min.js': 'src/dlg.js'
        }
      }
    },
    terser: {
      'src/dlg.min.js': 'src/dlg.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-terser');

  grunt.registerTask('ug', ['uglify:release']);
  grunt.registerTask('default', ['terser']);
};
