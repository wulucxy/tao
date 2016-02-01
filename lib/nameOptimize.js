// if the name is 'abc/abc' or 'abc/index', then the return name is 'abc' for short
module.exports = function (name) {
	var tmp = name.split('/');

	var len = tmp.length;

	if (tmp[len-1] === 'index' || tmp[len-1] === tmp[len-2]) {
		name = name.slice(0, name.length - tmp[len-1].length - 1);
	} else if (tmp[len-1].slice(0, 1) === '_') {
		// do nothing with the name
	} else {
		name = null;
	}
	return name;
}
