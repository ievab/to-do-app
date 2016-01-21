/**
 * Created by Ieva.Bumbiere on 19.01.2016..
 */
var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("Content/*.scss", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("Content/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(gulp.dest("Content"))
        .pipe(browserSync.stream());
});
