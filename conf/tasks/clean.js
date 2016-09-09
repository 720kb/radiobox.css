/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
  , paths    = require('../paths')
  , clean    = require('gulp-clean');

  gulp.task('clean', function cleanDist() {
  	return gulp.src(`${paths.dist}`, {'read': false})
  		.pipe(clean());
  });
}());
