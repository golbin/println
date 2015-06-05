module.exports = function (grunt) {
  grunt.initConfig({
    nodeunit: {
      index: ['test/index.js']
    },
    jshint  : {
      index     : ['index.js'],
      extensions: ['extensions/*.js'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'nodeunit']);
};
