// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // create return string
  var result = '';
  if (obj === null) {
    return 'null';
  }
  // check what type of obj it is
  // if complex data (array // obj)
  if (Array.isArray(obj)) {
    if (obj[0] === undefined) {
      return '[]';
    }
    var arrayStart = '[';
    //iterate through structure,
    for (var i = 0; i < obj.length; i++) {
    //stringify each element
      var element = stringifyJSON(obj[i]);
      arrayStart += element + ',';
    // add to arrayStart
    //add ',' to arrayStart
    }
    //end of loop, remove last , (aka last index)
    arrayStart = arrayStart.slice(0, -1);
    arrayStart += ']';
    //add closing brack to arrayStart
    //return arrayStart
    return arrayStart;
  } else if (typeof obj === 'object') {
    //skip key if it is a function
    //iterate through structure,
  //convert element into strings, concat to result
  } else if (typeof obj === 'string') {
  //for primitive data type
  //if primite, turn object into a string and add to result string
    result += '"' + obj.toString() + '"';
  } else {
    result += obj.toString();
  }
  //if not complex, use toString method
  return result;
};
