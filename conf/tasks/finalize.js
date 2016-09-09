/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , paths = require('../paths')
    , clean = require('gulp-clean');

  gulp.task('finalize', function cleanDist() {
  	return gulp.src([`${paths.dist}*.css`, `!${paths.dist}/*.min.css`], {'read': false})
  		.pipe(clean());
  });
}());
