var fds = require('fe-dev-server');

fds({
	basePath: __dirname,
	mockFolder: 'data',
	viewFolder : '../dist',
	publicFolder: '../dist',
	enableJava: true,
	livereload: true,
	proxy: {
		
	},
	port: 9999
});
