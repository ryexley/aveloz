var path = require("path");
var gulp = require("gulp");
var buildConfig = require("../config");

gulp.task("copy:static", ["clean:static"], function () {

  gulp.src(path.join(buildConfig.sourceRoot, "index.html"))
      .pipe(gulp.dest(buildConfig.buildRoot));

  gulp.src(path.join(buildConfig.sourceRoot, "index.js"))
      .pipe(gulp.dest(buildConfig.buildRoot));

});
