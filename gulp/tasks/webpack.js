var path = require("path");
var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("webpack");
var buildConfig = require("../config");

console.log(path.resolve(buildConfig.sourceRoot, "js/main.js"));

var config = {
  devtool: "eval",
  entry: {
    "main": path.resolve(buildConfig.sourceRoot, "js/main.js")
  },
  output: {
    path: path.resolve(buildConfig.buildRoot, "js"),
    filename: "[name].js"
  },
  plugins: [],
  resolve: ["", ".js", ".jsx"],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: "babel", include: buildConfig.sourceRoot }
    ]
  }
};

gulp.task("webpack", function (next) {
  webpack(config, function (err, stats) {
    if (err) {
      throw new gulpUtil.PluginError("webpack", err);
      gulpUtil.log("[webpack]", stats.toString({
        // output options
      }));

      next();
    }
  });
});
