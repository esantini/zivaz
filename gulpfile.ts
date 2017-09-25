/*
	Generated from typescript file
*/

import * as gulp from "gulp";
import * as gUtil from "gulp-util";
import * as tsc from "gulp-typescript";
import * as sourcemaps from "gulp-sourcemaps";
import * as less from 'gulp-less';
import * as concat from "gulp-concat";
import * as rename from 'gulp-rename';
import * as path from 'path';
import * as uglify from "gulp-uglify";

//
interface TaskToWatch {
	taskName: string,
	src: string | string[],
	dest: string
}
var watchTask: TaskToWatch;
var wachAll: Array<TaskToWatch> = [];

//
//

watchTask = {
	taskName: "serverTypeScripts",
	src: ['src/server/**/*.ts'],
	dest: 'build/'
};
wachAll.push(watchTask);
(function(name: string, src: string | string[], dest: string): void {

	var tsProject = tsc.createProject('tsconfig.json');

	// Transpiles typescript files from the source to the build.
	gulp.task(name, function() {
		
		gulp.src( src )
			
			.pipe(sourcemaps.init())
				.pipe(tsProject())
			.pipe(sourcemaps.write('.', { sourceRoot: '../src/', includeContent: false }))
			.pipe(gulp.dest( dest ));

	});
	
})(watchTask.taskName, watchTask.src, watchTask.dest);

//
//

watchTask = {
	taskName: "clientTypeScripts",
	src: 'src/client/**/*.ts',
	dest: 'build/'
};
wachAll.push(watchTask);
(function(name: string, src: string | string[], dest: string): void {

	var tsProject2 = tsc.createProject('tsconfig.json');

	// Transpiles & concatenates client's typescript files into a single file in /public
	gulp.task(name, function() {

		// make sure main.ts goes first to register angular modules and other stuff that needs executing first.
		gulp.src( [ src as string ] )
			
			.pipe(sourcemaps.init())
				.pipe(tsProject2())
				.pipe(concat('main.min.js'))
				.pipe(uglify())
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest( dest + 'public/resources/js' ));
	});
	
})(watchTask.taskName, watchTask.src, watchTask.dest);

//
//

watchTask = {
	taskName: "myLess",
	src: 'src/**/*.less',
	dest: 'build/'
};
wachAll.push(watchTask);
(function(name: string, src: string | string[], dest: string): void {

	gulp.task( name , function() {
		gulp.src(src)
			.pipe(sourcemaps.init())
			.pipe(less({
				paths: [ path.join(__dirname, 'less', 'includes')]
			}).on('error', gUtil.log))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest( dest ));
	});

})(watchTask.taskName, watchTask.src, watchTask.dest);

//
//

watchTask = {
	taskName: "move_plain_files",
	src: ['src/public/**/*', '!src/**/*.ts', '!src/**/*.less'],
	dest: 'build/public/'
};
wachAll.push(watchTask);
(function(name: string, src: string | string[], dest: string) {
	
	gulp.task(name, function() {
		gulp.src(src)
			.pipe(gulp.dest(dest));
	});

})(watchTask.taskName, watchTask.src, watchTask.dest);

//
//

watchTask = {
	taskName: "move_views",
	src: ['src/views/**/*'],
	dest: 'build/views/'
};
wachAll.push(watchTask);
(function(name: string, src: string | string[], dest: string) {
	
	gulp.task(name, function() {
		gulp.src(src)
			.pipe(gulp.dest(dest));
	});

})(watchTask.taskName, watchTask.src, watchTask.dest);

//
//

watchTask = {
	taskName: "gulpfile",
	src: './gulpfile.ts',
	dest: ''
};
wachAll.push(watchTask);
(function(name: string, src: string | string[], dest: string) {
	
	gulp.task(name, function() {
		var tsProject = tsc.createProject('tsconfig.json');
		gulp.src(src)
			.pipe(sourcemaps.init())
			.pipe(tsProject())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(dest));
	});

})(watchTask.taskName, watchTask.src, watchTask.dest);

// 
// 

gulp.task('wacha', function() {
	wachAll.forEach(wacha => {
		console.log('Watching', wacha.taskName);
		gulp.watch(wacha.src, [wacha.taskName] as gulp.WatchOptions); // casting as WatchOptions because of error TS2345:
		// error TS2345: Argument of type 'string[]' is not assignable to parameter of type 'WatchOptions | undefined'
	});
});

// set allTasks as an array of names, example: ['typescripts', 'jades', 'htmls']
var allTasks = (function(){
	var arr: string[] = [];
	wachAll.forEach(task => {
		arr.push(task.taskName);
	});
	return arr;
})();
// allTasks.push('watch_all');

gulp.task('build', function() {

});
allTasks.push('build', 'wacha'); //, 'Run_Karma_Tests'

// @types are inconsistent:
gulp.task('default', allTasks as any ); // should be: gulp.parallel( allTasks );
