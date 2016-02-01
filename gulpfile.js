var gulp = require('gulp');
var args = require('minimist')(process.argv.slice(2));
var path = require('path');
var glob = require('glob');
var runSequence = require('run-sequence');

var opts = {
	args: args,
	paths: {
		base: path.resolve(__dirname, 'src','pages'),
		dist: path.resolve(__dirname, 'dist')
	}
};

glob.sync('./tasks/*.js').forEach(function (file) {
	var name = file.replace(/\.\/tasks\/(.*).js$/, '$1');
	gulp.task(name, require(file)(opts));
});


gulp.task('build', function (cb) {
	runSequence('webpack',cb);
});

gulp.task('server', function (cb) {
	runSequence('webpack','mock-server', cb);
});