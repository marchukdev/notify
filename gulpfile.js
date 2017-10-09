var autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');


// adding properties prefixes, minimazing and renaming CSS file
gulp.task('css', function() {
    gulp.src('css/styles.css')
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(rename('styles.cross.css'))
        .pipe(gulp.dest('css/'))
});

// Minify CSS file
gulp.task('min', function() {
    gulp.src('css/styles.cross.css')
        .pipe(minifyCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css/'))
});

// watch
gulp.task('default', function() {
    gulp.watch('css/*.css', ['css'])
});