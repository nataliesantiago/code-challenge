var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const validator = require('gulp-html');

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('html', function () {
    return gulp.src('app/html/*.html')
        .pipe(validator())
        .pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
    return gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
    gulp.watch('app/html/**/*html', gulp.series(['html']));
    gulp.watch('app/js/**/*js', gulp.series(['js']));
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
})