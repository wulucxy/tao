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

		var globs = [distPath + '/**/*.jsp'];

		console.log(globs);

		return gulp.src( globs, { base: distPath, buffer: false } )
		.pipe(conn.newer( '/home/heshaoqiong/tomcat/webapps/ROOT/WEB-INF/views/web' ) )
		.pipe(conn.filter(distPath, function(localFile, remoteFile, callback) {
	        callback(null, localFile.stat.size > 0);
	    }))
		.pipe( conn.dest( '/home/heshaoqiong/tomcat/webapps/ROOT/WEB-INF/views/web' ) );
	};
};
