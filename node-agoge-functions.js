exports.stringifyError =  function(err) {
	return JSON.stringify(objectifyError(err), null, 4);
}

exports.objectifyError = function(err) {
	var plainObject = {};

	Object.getOwnPropertyNames(err).forEach(function(key) {
		plainObject[key] = err[key];
	});

	return plainObject;
}

exports.sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
