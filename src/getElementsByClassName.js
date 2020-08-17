// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // create empty array
  var result = [];
  // check if document body classlist has target classname
  if (document.body.classlist.contains(className)) {
  // if so, add document body to result array
    result.push(document.body);
  }
  // helper function - will be called recursively
  var checkChildClasses = function (element) {
    // check if element array has a length
    if (element[0] !== undefined) {
    // if so, we loop over the element array
      for (var i = 0; i < element.length; i++) {
      // check if element in the element array has className in classlist
        if (element[i].classlist.contains(className)) {
          result.push(element[i]);
        }
        // check if element has children
        if (element[i].children[0] !== undefined) {
          checkChildClasses(element[i].children);
        }
      }
    }
  };
  checkChildClasses(document.body.children);
  return result;
};
