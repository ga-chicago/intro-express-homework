const gulp = require('gulp');
const less = require('gulp-less');


gulp.task('less-convert', () => {
	gulp.src('./public/style/style.less')
		.pipe(less())
		.pipe(gulp.dest('./public/style/'))
})