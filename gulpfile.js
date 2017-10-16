const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('someTask'), () => {
	//write some code here to perform an operation
	console.log('this is a gulp task running ')
}

gulp.task('less-css', ()=>{

	gulp.src('./public/styles/style.less')
		.pipe(less()) //converts less to css
		.pipe(gulp.dest('./public/styles'))//sends converted files to styles folder

})

//write a task to watch our less file, evrytime we save it will run our gulp less-css method
gulp.task('watch', ()=>{
	gulp.watch(['./public/styles/*.less'], ['less-css'])
})

//Gulp best practice
//this name actually matters-'default'
//to run the defaul task in terminal
//just type gulp
//second argument is an array of tasks to be run

gulp.task('default',['less-css', 'watch'])