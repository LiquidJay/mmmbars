var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', () =>
    sass('styles/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('../styles/css'))
);


gulp.task('default', [ 'sass']);