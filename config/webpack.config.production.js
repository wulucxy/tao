var config = require('./webpack.config.base');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.publicPath = "/";
config.output.filename = 'static/web/js/[name].[chunkhash:8].js';

config.module.loaders = [
		{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?minimize!autoprefixer') },
		{ test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?minimize!autoprefixer!less') },
		{ test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
				'url?limit=100&name=static/web/img/[name].[ext]'
		]},	
		{ test: /\.(woff|eot|ttf)$/i, loader: 'url?name=fonts/[name].[ext]' },
		{ test: /\.(html|jsp|vm)$/, loader: 'html?minimize=false' },
		{ test: /\.ejs$/, loader: 'ejs' },
		{ test: /\.json$/, loader: 'json' }
	];

config.module.postLoaders = [
      {
        test: /\.js$/,
        loaders: ['es3ify-loader']
      },
    ];

module.exports = config;