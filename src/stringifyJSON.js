// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Create result string
  var result = '';
  // Framework defining target of both base case and recursive case

  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return undefined;
  }
  if (typeof obj !== 'object' || obj === null) {
    if (typeof obj === 'string') {
      result += '"' + obj + '"';
      return result;
    }
    result += obj;
    return result;
  }

  // is this an array?
  if (Array.isArray(obj)) {
    // is it empty?
    if (obj.length === 0) {
      // return '[]';
      return '[]';
    }
    result += '[';
    // do other array stuff (for loop here)
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
    }
    return result.slice(0, -1) + ']';
  }

  // must be object
  // empty object?
  if (Object.keys(obj).length === 0) {
    return '{}';
  }
  // do other object stuff
  result += '{';
  for (var key in obj) {
    if (obj[key] !== undefined && typeof obj[key] !== 'function') {
      result += '"' + key + '"' + ':';
      result += stringifyJSON(obj[key]) + ',';
    }
  }
  if (result === '{') {
    return '{}';
  }
  return result.slice(0, -1) + '}';
};
