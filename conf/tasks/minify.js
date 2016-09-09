/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
  , paths    = require('../paths')
  , minify   = require('gulp-clean-css')
  , rename   = require('gulp-rename');

    gulp.task('minify', function onMinifyCss() {

        return gulp.src(`${paths.dist}**/*.css`)
          .pipe(minify())
          .pipe(rename(function renameThem(path) {

            if (path.basename !== 'radiobox') {
              path.dirname = path.basename;
            }

            path.basename += ".min";
          }))
          .pipe(gulp.dest(`${paths.dist}css`));
      });
}());
