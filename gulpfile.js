//1.引入模块
var gulp = require('gulp');				//gulp模块
var less = require('gulp-less');		//less模块
var cssnano = require('gulp-cssnano');	//css压缩模块
var concat = require('gulp-concat');	//合并模块
var uglify = require('gulp-uglify');	//js压缩模块
var rename = require('gulp-rename');	//重命名模块



//编译less文件 合并,压缩,重命名css文件
gulp.task('lessCompress',function(){
	gulp.src('./src/style/*.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/style'))
});


//合并js文件
gulp.task('jsCompress',function(){
	gulp.src('./src/js/*.js')
	.pipe(gulp.dest('./dist/js'))
/*	.pipe(uglify())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('./dist/js'))*/
});

// 定义一个监控less变化的任务
gulp.task('lessChang',function(){
	gulp.watch('./src/style/*.less',['lessCompress']);
});

//监听js变化
gulp.task('jsChange',function(){
	gulp.watch('./src/js/*.js',['jsCompress']);
});





//定义默认任务
gulp.task('default',['lessChang','jsChange']);