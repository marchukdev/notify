var autoprefixer = require('gulp-autoprefixer'),
    gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');


// adding properties prefixes, minimazing and renaming css file
gulp.task('css', function() {
    gulp.src('css/*.css')
        .pipe(autoprefixer({ browsers: ['last 2 versions', '> 1%', 'ie 9'], cascade: false}))
        .pipe(minifyCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css/'))
});

// watch
gulp.task('watch', function() {
    gulp.watch('css/*.css', ['css'])
});