const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('someTask', () => {
	console.log("task is running")
});

//convert less to css
gulp.task('less-css', () => {
	gulp.src('./public/css/style.less')
		.pipe(less())
		.pipe(gulp.dest('./public/css/'))
});

//watch css
gulp.task('watch', () => {

gulp.watch(["./public/css/*.less"], ["less-css"])

});

/*best practices

default

run default, you just type gulp

*/

gulp.task('default', ["less-css", "watch"]);