var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gls = require('gulp-live-server');

gulp.task('sass', function() {
  gulp.src('src/styles/application.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('assets/css'))
})

gulp.task('server', function() {
  var server = gls.new('server.js');
  server.start();
  gulp.watch(['views/**/*.html','assets/css/**/*.css','assets/js/**/*.js'], server.notify);
})

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', ['sass']);
})

gulp.task('serve', ['server', 'watch']);
