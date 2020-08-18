// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // create return string
  var result = '';
  // if (obj === undefined) {

  // }
  if (obj === null) {
    return 'null';
  }
  // check what type of obj it is
  // if complex data (array // obj)
  if (Array.isArray(obj)) {
    if (obj[0] === undefined) {
      return '[]';
    }
    var arrayResult = '[';
    //iterate through structure,
    for (var i = 0; i < obj.length; i++) {
    //stringify each element
      var element = stringifyJSON(obj[i]);
      arrayResult += element + ',';
    // add to arrayStart
    //add ',' to arrayStart
    }
    //end of loop, remove last , (aka last index)
    arrayResult = arrayResult.slice(0, -1);
    arrayResult += ']';
    //add closing brack to arrayStart
    //return arrayStart
    return arrayResult;
  } else if (typeof obj === 'object') {
    var objKeys = Object.keys(obj);
    if (objKeys[0] === undefined) {
      return '{}';
    }
    var objResult = '{';
    //make for in loop with condition (notfunction or undefined)
    for (var keys in obj) {
    //declare varialble for the key and value
      if (typeof obj[keys] !== 'function' && typeof obj[keys] !== 'undefined') {
        var key = '"' + keys + '"';
        //convert key to string
        //run stringify on value
        var value = stringifyJSON(obj[keys]);
        //concat them to a result variable between ':' and ','
        objResult += key + ':' + value + ',';
      }
    }
    if (objResult.length > 1) {
      objResult = objResult.slice(0, -1);
    }
    objResult += '}';
    return objResult;
  //convert element into strings, concat to result
  } else if (typeof obj === 'string') {
  //for primitive data type
  //if primite, turn object into a string and add to result string
    result += '"' + obj.toString() + '"';
  } else {
    console.log(obj);
    return obj.toString();
  }
  //if not complex, use toString method
  return result;
};
