module.exports = function (grunt) {
  grunt.initConfig({
    cwebp: {
      options: {
        q: 75
      },
      files: {
        expand: true,
        cwd: './images/',
        src: ['*.{png,jpg}'],
        dest: './dist/',
        ext: '.webp'
      }
    }
  });

  grunt.loadNpmTasks('grunt-cwebp');

  grunt.registerTask('default', ['cwebp']);
};
