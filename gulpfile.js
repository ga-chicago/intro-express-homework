const gulp = require('gulp');
const less = require('gulp-less');



// This is the task to convert the less file into a css file
gulp.task('less-css', () => {

	gulp.src('./public/styles/style.less') // targets the less
		.pipe(less()) // converts the less into css
		.pipe(gulp.dest('./public/styles')) // sents the css to destination

});



// Run the default task in the terminal by just typing gulp
gulp.task('default', ['less-css']);


