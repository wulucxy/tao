var extend =  require('object-assign');

module.exports = extend(
	require('./lib/batch'),
	require('./lib/cityList'),
	require('./lib/collegeType'),
	require('./lib/level'),
	require('./lib/ownerType'),
	require('./lib/feature')
);