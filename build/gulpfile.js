var gulp = require('gulp');
const sass = require('gulp-ruby-sass');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', () =>
    sass('styles/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('../styles/css'))
);