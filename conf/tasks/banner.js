/*global require*/
(function gulpTask() {
  'use strict';


  const gulp   = require('gulp')
  ,     paths  = require('../paths')
  ,     header = require('gulp-header');

  gulp.task('banner', function bannerify() {
    return gulp.src(`${paths.dist}**/*.min.css`)
      .pipe(header(`${paths.banner}`))
      .pipe(gulp.dest(`${paths.dist}`))
  });
}());
