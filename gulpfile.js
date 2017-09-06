var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function (){
	gulp.src('./app/scss/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function (){
	gulp.watch('./app/scss/style.scss', ['sass']);
});

gulp.task('autoprefixer', function(){
  gulp.src('./public/css/style.css')
  .pipe(autoprefixer({
    browsers: ['last 3 versions']
  }))
  .pipe(gulp.dest('./public/css/'));
});
