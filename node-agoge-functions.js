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

exports.mergeRecursive = function(obj1, obj2) {

  for (var p in obj2) {
    try {
      // Property in destination object set; update its value.
      if ( obj2[p].constructor==Object ) {
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);

      } else {
        obj1[p] = obj2[p];

      }

    } catch(e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];

    }
  }

  return obj1;
}



function classe(o) {
	return Object.prototype.toString.call(o);
}

