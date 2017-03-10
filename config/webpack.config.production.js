var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var ManifestPlugin = require('webpack-manifest-plugin');
var nameOptimize = require('../lib/nameOptimize');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');

var args = require('minimist')(process.argv.slice(2));

var ENV = ['development', 'test', 'production'];

if (args.e) {
	if (ENV.indexOf(args.e) < 0) {
		console.error('请填写正确的环境变量');
		return;
	}
} else {
	args.e = ENV[0];
}

var cwd = process.cwd();

var distPath = path.join(cwd,'dist');
var pagePath = path.join(cwd, 'src', 'pages');

var entries = {};

glob.sync(path.join(pagePath, '**/*.js')).forEach(function (file) {
	var name = nameOptimize(file.slice(pagePath.length + 1, -3));
	if (name) entries[name] = file;
});

var chunks = Object.keys(entries);

var defaults = {
	devtool: false,
	entry: entries,
	output: {
		path: distPath,
		filename: 'static/web/js/[name].[chunkhash:8].js',
		publicPath: '/'
	},
	externals :  {
        //"jquery": "jQuery"
    },
	resolve: {
    	extensions: ['', '.js', '.css', '.jsx', '.ejs', '.png', '.jpg']
	},
	resolveLoader: {
		root: path.join(__dirname, '../node_modules')
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?minimize!autoprefixer') },
			{ test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?minimize!autoprefixer!less') },
			{ test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
					'url?limit=100&name=static/web/img/[name].[ext]'
			]},	
			{ test: /\.(woff|eot|ttf)$/i, loader: 'url?name=fonts/[name].[ext]' },
			{ test: /\.(html|jsp|vm)$/, loader: 'html?minimize=false' },
			{ test: /\.ejs$/, loader: 'ejs' },
			{ test: /\.json$/, loader: 'json' }
		],
		postLoaders: [
	      {
	        test: /\.js$/,
	        loaders: ['es3ify-loader']
	      },
	    ]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			},
	        $: 'jquery'

		}),
		new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            chunks: chunks,
            minChunks: (chunks.length < 4) ? chunks.length : 4
        }),
        new ExtractTextPlugin(
			'static/web/css/[name].[contenthash:8].css',
			{ allChunks: false }
		),
        new ManifestPlugin(),
        new WebpackErrorNotificationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: { screw_ie8: false },
			output: {
				screw_ie8: false,
			    comments: false
			},
			compressor: {
				screw_ie8: false,
			    warnings: false
			}
        })
	]
};

glob.sync(path.join(pagePath, '**/*.{html,jsp,vm}')).forEach(function (file) {
	var ext = file.slice(file.lastIndexOf('.'));
	var name = file.slice(pagePath.length + 1, -1 * ext.length);
	name = nameOptimize(name);

		var conf = {
			template: file,
			filename: name + ext,
			inject: 'body',
			chunks: ['vendors', name]
		};

		defaults.plugins.push(new HtmlWebpackPlugin(conf));
});

module.exports = defaults;
