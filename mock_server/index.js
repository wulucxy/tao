var fds = require('fe-dev-server');

fds({
	basePath: __dirname,
	mockFolder: 'data',
	viewFolder : '../dist',
	publicFolder: '../dist',
	enableJava: true,
	livereload: true,
	proxy: {
		//'/finance/act': 'http://192.168.2.23:6085/finance/act',
		//'/validate': 'http://192.168.2.29:8084'
		//'/finance/act': 'http://8.wacaiyun.com/finance/act',
		//'/finance/h5':'http://8.wacaiyun.com/finance/h5',
		//'/validate': 'http://www.wacaiyun.com/validate'
	},
	port: 9999
});
