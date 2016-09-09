/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
    , runSequence = require('run-sequence').use(gulp);


  gulp.task('build', function buildEverything() {
    runSequence('clean', 'sass', 'autoprefixer', 'minify', 'banner', 'copy', 'finalize');
  });
}());
