/* jshint node: true */

'use strict';

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({ lazy: true });
var runSequence = require('run-sequence');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var resources = {
  copy: [
    './source/**/*',
    '!./source/js/**/*.jsx',
    '!./source/css/**/*.scss'
  ],
  jsx: './source/js/index.jsx',
  sass: './source/css/**/*.scss'
};

gulp.task('js', function() {
  return browserify({
      entries: resources.jsx,
      extensions: [ '.jsx' ],
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
});

gulp.task('copy', function() {
  return gulp.src(resources.copy)
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream({ once: true }));
});

gulp.task('styles', function() {
  return gulp.src(resources.sass)
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.pleeease())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });

  gulp.watch('./source/js/**/*.jsx', ['js']);
  gulp.watch(resources.sass, ['styles']);
  gulp.watch(resources.copy, ['copy']);
});

gulp.task('default', function(cb) {
  runSequence([ 'copy', 'styles', 'js' ], 'serve', cb);
});
