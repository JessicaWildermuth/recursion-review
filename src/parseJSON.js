// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // create a series of functions called to identify values and parse respectively

  // parseValue function
  // identifies the value type (array, object, string, null, num, true, false)
  // calls correct parse function based on id

  // parseObject function
  // before '}'
  // parses key string
  // skips colon ==> helper function
  // calls parseValue on value
  // skips any comma and repeat ==> skip comma
  // returns object with parsed key value pairs

  // parseArray
  // parse any values until ']'
  // and skip over comma
  // return array with each parsed value in order

  // parseString
  // none of the characters except \ are counted as data storage chars until string closes at next '"'

  // parseNumber

  // parseOther
  // if true, false, or null return that value

  // skipComma
  // skipColon
  // skipWhitespace


};
