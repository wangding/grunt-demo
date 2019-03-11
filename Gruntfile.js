module.exports = function (grunt) {
  grunt.initConfig({
    exec: {
      start: {
        command: './app.js',
        stdout: false
      },
      stop: 'echo "hello"'
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['exec:start', 'exec:stop']);
};
