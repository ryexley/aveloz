var path = require("path");
var gulp = require("gulp");
var del = require("del");
var buildConfig = require("../config");

gulp.task("clean:js", function (next) {
  del([path.join(buildConfig.buildRoot, "js")], next);
});

gulp.task("clean:static", function (next) {
  del([
    path.join(buildConfig.buildRoot, "index.html"),
    path.join(buildConfig.buildRoot, "index.js")
  ], next);
});
