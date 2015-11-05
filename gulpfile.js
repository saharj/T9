var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var less = require('gulp-less')

gulp.task('connect', ['watch'], function() {
  connect.server();
});
 
gulp.task('default', ['connect']);

// gulp.task('html', function() {
// 	gulp.src('index.html')
// 		.pipe(livereload());
// });

// gulp.task('js', function() {
// 	gulp.src('./js/*.js')
// 		.pipe(livereload());
// });

gulp.task('watch', function() {
  livereload.listen();
  
  //gulp.watch('index.html', ['html']);
  //gulp.watch('js/*.js', ['js']);
});
gulp.task('less', function() {
  gulp.src('*.less')
    .pipe(less())
    .pipe(gulp.dest('style'))
    .pipe(livereload());
});