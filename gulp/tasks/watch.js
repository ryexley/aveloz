var path = require("path");
var gulp = require("gulp");
var buildConfig = require("../config");

gulp.task("watch", ["default"], function () {

  gulp.watch(path.resolve(buildConfig.sourceRoot, "css/**/*.css"), ["css"]);
  gulp.watch(path.resolve(buildConfig.sourceRoot, "js/**/*.js"), ["webpack"]);
  gulp.watch([
    path.resolve(buildConfig.sourceRoot, "index.html"),
    path.resolve(buildConfig.sourceRoot, "index.js")
  ], ["copy:static"]);

});
