var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('build', function() {
	gulp.src("*.scss")
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest("build"));
});

gulp.task('build-dev', function() {
	gulp.src("*.scss")
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(gulp.dest("build"));
});

gulp.task('watch', function() {
	gulp.watch("*.scss", ['build-dev'])
});

gulp.task('default', ['build', 'build-dev']);
