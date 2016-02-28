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
		examplePath = path.resolve(dest, 'src', 'WEB-INF');

		dest = path.resolve(dest, 'dist','WEB-INF');

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
