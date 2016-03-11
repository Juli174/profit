var gulp = require('gulp');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('css', function() {
    gulp.src('css/*.less')
        .pipe(less())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist/'));

    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/bootstrap/dist/css/bootstrap-theme.css'
    ])
        .pipe(concat('libs.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/'));

    gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('templates', function() {
    gulp.src('site/*.html')
        .pipe(gulp.dest('dist/site'));

    gulp.src('templates/*.html')
        .pipe(gulp.dest('dist/templates'));
});

gulp.task('images', function() {
    gulp.src(['img/*.jpg', 'img/*.png', 'img/*.gif'])
        .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('css/*.less', ['css']);
});

gulp.task('webserver', function() {
    gulp.src('./')
    //gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 8000,
            directoryListing: true
        }));
});

gulp.task('default', [
    'css',
    'scripts',
    'templates',
    'images',
    'watch',
    'webserver'
]);
