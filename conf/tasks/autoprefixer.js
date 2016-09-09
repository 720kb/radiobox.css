/*global require*/
(function gulpTask() {
  'use strict';


  const gulp         = require('gulp')
  ,     paths        = require('../paths')
  ,     autoprefixer = require('gulp-autoprefixer');


  gulp.task('autoprefixer', function(callback) {
    return gulp.src(`${paths.dist}*.css`)
      .pipe(autoprefixer())
      .pipe(gulp.dest(`${paths.dist}`));
  });
}());
