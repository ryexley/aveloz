var path = require("path");
var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("webpack");
var buildConfig = require("../config");

var config = {
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

gulp.task("webpack", ["clean:js"], function (next) {
  webpack(config, function (err, stats) {
    if (err) {
      throw new gulpUtil.PluginError("webpack", err);
    }

    gulpUtil.log("[webpack]\n\n", stats.toString({
      colors: true,
      hash: false,
      version: true,
      timings: true,
      chunks: true,
      chunkModules: false,
      cached: true,
      cachedAssets: true
    }), "\n");

    next();
  });
});
