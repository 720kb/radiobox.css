/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
    , paths = require('../paths')
    , watch = require('gulp-watch');

  gulp.task('start', function onWatch() {

    gulp.watch(`${paths.lib}scss/*`, ['build']).on('change', function changed(e) {
      console.log(`Building new dist/ .... file was modified: ${e.path}`);
    });
    gulp.watch(`${paths.demo}/*`, ['build']).on('change', function changed(e) {
      console.log(`Building new dist/ .... file was modified: ${e.path}`);
    });
  });
}());
