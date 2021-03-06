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
	},
	env: args.e || 'dev'
};

process.env.NODE_ENV = opts.env;

glob.sync('./tasks/*.js').forEach(function (file) {
	var name = file.replace(/\.\/tasks\/(.*).js$/, '$1');
	gulp.task(name, require(file)(opts));
});


gulp.task('build', function (cb) {
	runSequence('webpack','copyTag',cb);
});

gulp.task('server', function (cb) {
	runSequence('build','mock-server', cb);
});

gulp.task('deploy', function (cb) {
	if (opts.env !== 'production') process.env.NODE_ENV = 'test';
	runSequence(
		'build', 
		'deploy-jsp', 
		'deploy-static', 
		cb
	);
});