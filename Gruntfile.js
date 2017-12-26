module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      js: 'dist/js',
      css: 'dist/css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean']); 
};
