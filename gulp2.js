const gulp = require('gulp');
const less = require('gulp-less')
const minify = require('gulp-minify');

gulp.task('someTask', () => {
	console.log('this is a gulp task running');
})

gulp.task('compress', () => {
	gulp.src('./public/js/app.js')
		.pipe(minify({
			ext:{
				src:'-debug.js',
				min:'.js'
			}
		}))
		.pipe(gulp.dest('./public/dist'));
})

//write a task to convert less to css

gulp.task('convert-css', () => {
	gulp.src('./public/style/style.less')
		.pipe(less())
		.pipe(gulp.dest('./public/style/'))
})

//write a task to watch our less file and when we save it will run our gulp less-css method

gulp.task('watch', () =>{
	gulp.watch(['*.less'], ['less'])
})

//Gulp Best Practice
//This name actually matters - 'default'
//To run the default task in terminal
//just type gulp




