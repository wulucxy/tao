var glob = require('glob');
var path = require("path");
var webpack = require('webpack');
var _ = require('lodash');
var plugins = require('gulp-load-plugins')();
var fs = require('fs-extra');

module.exports = function (opts) {
	return function (cb) {
		var files = glob.sync(opts.paths.base + '/**/*.js');

		if (files.length) {
			//var config = require('../webpack.config');
			var config = require('../config/webpack.config.' + process.env.NODE_ENV + '.js');

			var dest = process.cwd();
			fs.removeSync(path.join(dest, 'dist'));

			console.log('       正在打包 ....');
			console.time("webpackTiming");
			var bundler = webpack(config);
			var count;


			var callback = function (err, stats) {
			   if (err) throw new plugins.util.PluginError("webpack", err);
				
				if(stats.hasErrors()){
					console.log(stats.toString({chunk:false,children:false,colors:true}));
					return;
				}
				
				console.timeEnd("webpackTiming")
				plugins.util.log('webpack bundle file changed');
				cb();
			};

			if (process.argv[2] === 'server') {
				bundler.watch({
					aggregateTimeout: 300,
					pool: true
				}, callback);
			} else {
				bundler.run(callback);
			}
		} else {
			cb();
		}
	};
};
