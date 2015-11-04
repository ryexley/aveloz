var path = require("path");
var gulp = require("gulp");
var del = require("del");
var buildConfig = require("../config");

gulp.task("clean:js", function () {
  del.sync([path.join(buildConfig.buildRoot, "js")]);
});

gulp.task("clean:css", function () {
  del.sync([path.join(buildConfig.buildRoot, "css")]);
});

gulp.task("clean:static", function () {
  del.sync([
    path.join(buildConfig.buildRoot, "index.html"),
    path.join(buildConfig.buildRoot, "index.js"),
    path.join(buildConfig.buildRoot, "fonts/")
  ]);
});
