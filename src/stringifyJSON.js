// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // create return string
  var result = '';
  // check what type of obj it is
  // if complex data (array // obj)
  if (Array.isArray(obj)) {
    //iterate through structure,
  //convert element into strings, concat to result
  } else if (typeof obj === 'object') {
    //skip key if it is a function
    //iterate through structure,
  //convert element into strings, concat to result
  }
  //if not complex, use toString method
};
