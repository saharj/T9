var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

gulp.task('connect', function() {
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

// gulp.task('watch', function() {
//   livereload.listen();
//   gulp.watch('index.html', ['html']);
//   //gulp.watch('js/*.js', ['js']);
// });