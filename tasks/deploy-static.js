var gulp = require('gulp');
var path = require("path");
var ftp = require( 'vinyl-ftp' );
var glob = require('glob');
var gutil = require( 'gulp-util' );

var pass = require("../config/.ftppass");

var cwd = process.cwd();
var distPath = path.join(cwd,'dist');

module.exports = function (opts) {
	return function () {
		var conn = ftp.create( {
			host:     '120.25.240.153',
			user:     pass.user,
			password: pass.password,
			parallel: 100,
			log:      gutil.log
		} );

		var globs = [distPath + '/**/{css,js,img}/**'];

		return gulp.src( globs, { base: distPath, buffer: false } )
		.pipe(conn.newer( '/home/heshaoqiong/tomcat/webapps/ROOT/static' ) )
		.pipe( conn.dest( '/home/heshaoqiong/tomcat/webapps/ROOT/static' ) );
	};
};
