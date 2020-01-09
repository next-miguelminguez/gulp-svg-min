"use strict";

// more info:
// https://github.com/svg/svgo/tree/master/plugins

var config   = require('./config.json');
var gulp     = require('gulp');

var svgmin   = require('gulp-svgmin');
var rename   = require("gulp-rename");


gulp.task('default', function () {
  return gulp
    .src( config.src + '/*.svg' )
    .pipe( svgmin({
      plugins: [
        { removeDimensions:      true  },
        { removeViewBox:         false },
        { convertStyleToAttrs:   false }
      ]
    }) )
    .pipe( rename({
      suffix: config.suffix,
      extname: ".svg"
    }) )
    .pipe( gulp.dest(config.dest) );
});
