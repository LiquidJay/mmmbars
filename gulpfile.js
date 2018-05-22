var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', () =>
    sass('/source/main.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('/'))
);


gulp.task('default', ['sass']);