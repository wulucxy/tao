var plugins = require('gulp-load-plugins')();

module.exports = function () {
	return function () {
		plugins.nodemon({
			script: './mock_server/index.js',
			watch: [
				'./mock_server/index.js'
			]
		});
	};
};
