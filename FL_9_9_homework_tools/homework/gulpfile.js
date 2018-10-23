var gulp = require('gulp');
var gulpBabel = require('gulp-babel');
var gulpCleanCss = require('gulp-clean-css');
var gulpConcat = require('gulp-concat');
var gulpSass = require('gulp-sass');
var gulpUglifyJs = require('gulp-uglifyjs');
var gulpConnect = require('gulp-connect');
var gulpRename = require('gulp-rename');
var gulpSourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var del = require('del');


gulp.task('js', function() {
    return gulp.src(['./src/js/clock.js', './src/js/canvasState.js', './src/js/app.js'])
               .pipe(gulpSourcemaps.init())
               .pipe(gulpBabel({
                   presets: ['@babel/env']
               }))
               .pipe(gulpConcat('app.min.js'))
               .pipe(gulpUglifyJs())
               .pipe(gulpSourcemaps.write())
               .pipe(gulp.dest('./src/bin/'));
});

gulp.task('styles', function () {
    return gulp.src('./src/sass/*.{scss, sass}')
               .pipe(gulpSourcemaps.init())
               .pipe(gulpSass())
               .pipe(gulpCleanCss())
               .pipe(gulpConcat('style.min.css'))
               .pipe(gulpSourcemaps.write())    
               .pipe(gulp.dest('./src/bin/'))
               .pipe(gulpConnect.reload());
});

gulp.task('js-prod', function() {
    return gulp.src(['./src/js/clock.js', './src/js/canvasState.js', './src/js/app.js'])
               .pipe(gulpBabel({
                   presets: ['@babel/env']
               }))
               .pipe(gulpConcat('app.min.js'))
               .pipe(gulpUglifyJs())
               .pipe(gulp.dest('./dist/bin'));
});

gulp.task('styles-prod', function () {
    return gulp.src('./src/sass/**/*.{scss, sass}')
               .pipe(gulpSass())
               .pipe(gulpCleanCss())
               .pipe(gulpConcat('style.min.css'))
               .pipe(gulp.dest('./dist/bin'))
});

gulp.task('html', function () {
    return gulp.src('./src/app.html')
               .pipe(gulpRename('index.html'))
               .pipe(gulp.dest('./dist'));
});

gulp.task('server', function() {
    return gulpConnect.server({
               livereload: true,
               port: 8080
           });
});

gulp.task('clean', function() {
    return del.sync(['dist', 'src/bin']);
});

gulp.task('lint', function () {
    return gulp.src(['src/js/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

function watch() {
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('src/sass/**/*.scss', styles);
}

gulp.task('watch', watch);
gulp.task('default', ['clean','js', 'styles','server']);
gulp.task('build', ['clean', 'js', 'styles']);
gulp.task('build-prod', ['clean', 'js-prod', 'styles-prod', 'html']);

