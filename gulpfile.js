//1.引入模块
var gulp = require('gulp');				//gulp模块
var less = require('gulp-less');		//less模块
var cssnano = require('gulp-cssnano');	//css压缩模块
var concat = require('gulp-concat');	//合并模块
var uglify = require('gulp-uglify');	//js压缩模块
var rename = require('gulp-rename');	//重命名模块


//复制拷贝HTML文件
gulp.task('htmlDest',function(){
	gulp.src('./src/*.html')
		.pipe(gulp.dest('./dist/'))
});


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

//复制图片
gulp.task('imgCopy',function(){
	gulp.src('./src/images/*.*')
		.pipe(gulp.dest('./dist/images/'))
});

//拷贝插件
gulp.task('plugCopy',function(){
	gulp.src('./src/lib/*.*')
		.pipe(gulp.dest('./dist/lib/'))
		.pipe(gulp.dest('./lib/'))
})

//监听HTML文件变化
gulp.task('htmlChange',function(){
	gulp.watch('./src/*.html',['htmlDest']);
});

// 定义一个监控less变化的任务
gulp.task('lessChang',function(){
	gulp.watch('./src/style/*.less',['lessCompress']);
});

//监听js变化
gulp.task('jsChange',function(){
	gulp.watch('./src/js/*.js',['jsCompress']);
});

//监听图像变化
gulp.task('imgChange',function(){
	gulp.watch('./src/images/*.*',['imgCopy']);
});
//监听插件变化
gulp.task('plugChange',function(){
	gulp.watch('./src/lib/*.*',['plugCopy']);
});





//定义默认任务
gulp.task('default',['htmlChange','lessChang','jsChange','imgChange','plugChange']);