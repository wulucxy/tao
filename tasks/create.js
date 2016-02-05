var plugins = require('gulp-load-plugins')();
var args = require('minimist')(process.argv.slice(2));
var Promise = require('bluebird');
var path = require("path");
var fs = Promise.promisifyAll(require('fs-extra'));

var dest = process.cwd();
var examplePath;

module.exports = function () {
	
	function generateStructure(project){
	  return fs.copyAsync(examplePath, project,{clobber: true})
	    .then(function(err){
	      if (err) return console.error(err);
	    });
	}

	return function () {
		// -n 后面携带的项目工程名字
		if (!args.n) {
			console.log('请使用 -n 参数设置项目名称， 比如 -n test');
			process.exit(0);
		}
		var projectName = args.n.toString();

		examplePath = path.resolve(dest, 'src', 'example');

		if (projectName) {
			dest = path.resolve(dest, 'src', 'pages',projectName);
		}

		if (fs.existsSync(dest)){
			var files = fs.readdirSync(dest);
			if (files.length > 0) {
				console.error(dest + ' 目录不为空, 项目创建失败');
				return;
			}
		}

		generateStructure(dest);

	};
};
