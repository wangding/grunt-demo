let cfg ={};

cfg.qiniu_qupload = {
  default_options: {
    options: {
      ak: 'QINIU_AK',
      sk: 'QINIU_SK',
      bucket: 'wd-qiniu',
      assets: [{src: 'dist', prefix: ''}]
    }
  }
};

module.exports = function (grunt) {
  grunt.initConfig(cfg);

  grunt.loadNpmTasks('@wangding/grunt-qiniu-qupload');

  grunt.registerTask('default', ['qiniu_qupload']);
};
