var extend =  require('object-assign');

require('./lib/index.less');

module.exports = extend(
	require('./lib/index'),
	require('./lib/more'),
	require('./lib/warn')
);