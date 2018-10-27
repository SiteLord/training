var gulp = require('gulp');
var browserSync = require('browser-sync');
// var sass        = require('gulp-sass');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concatCSS = require('gulp-concat-css');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('serve', function() {

  browserSync.init({
    server: "src/"
  });

  gulp.watch('src/less/*.less', ['less']);
  // gulp.watch("src/scss/*.scss", ['sass']);
  gulp.watch("src/js/*.js").on('change', browserSync.reload);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('less', function() {
  // gulp.src("src/scss/*.scss")
  gulp.src("src/less/*.less")
  	.pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(less())
    // .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(concatCSS('style.css'))
    .pipe(plumber.stop())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);