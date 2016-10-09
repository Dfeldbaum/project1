var gulp = require('gulp');
var less = require('gulp-less')
var watch = require('gulp-watch')

gulp.task('compile-less', function(){
	gulp.src('./public/stylesheets/main.less')
	.pipe(less())
	.pipe(gulp.dest('./public/stylesheets'))
})


gulp.task('watch', function(){
	gulp.watch(['./public/stylesheets/*.less'], ['compile-less'])
})

gulp.task('default', ['compile-less', 'watch'])