var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', function() {
  // place code for your default task here
  sass('sass/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('sass'))
});