module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        port: 8000
      }
    }
  });

  grunt.loadNpmTasks('grunt-connect');
  grunt.registerTask('default', function() {
    console.log('started');
  });
}
