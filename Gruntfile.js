module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      css: {
        files: ["src/scss/*.scss"],
        tasks: ["sass"],
      },
      html: {
        files: ["index.html"],
        tasks: ["default"],
      },
    },
    sass: {
      dev: {
        files: {
          "dist/css/main.css": "src/scss/main.scss",
        },
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["dist/css/*.css", "dist/*.html"],
        },
        options: {
          watchTask: true,
          server: "./",
        },
      },
    },
  });

  // load npm tasks
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");

  // define default task
  grunt.registerTask("default", ["browserSync", "watch"]);
};
