var autoprefixer = require('gulp-autoprefixer'),
    gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uncss = require('gulp-uncss');


// adding properties prefixes, minimazing and renaming css file
gulp.task('css', function() {
    gulp.src('styles/*.css')
        .pipe(autoprefixer({ browsers: ['last 2 versions', '> 1%', 'ie 9'], cascade: false}))
        .pipe(minifyCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('styles/'))
});


// delete all useless css properties
gulp.task('default', function () {
    return gulp.src('styles/styles.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('styles/uncss/'));
});

// watch
gulp.task('watch', function() {
    gulp.watch('styles/*.css', ['css'])
});