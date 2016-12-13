// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
//some function to determine the next character



// ARRAY FUNCTION
var parseJSONArray = function(json, startingIndex, result) {
  var result = [];
  for (var i = 0; i < json.length; i++) {
    if (json[i] === "]") {
      var endingIndex = i;
    }
  }
  var stringArray = json.slice(startingIndex+1, endingIndex);
  var unparsedArray = stringArray.split(", ");
  _.each(unparsedArray, function(element){
    result.push(parseJSON(element));
  });
  return result;
};


// OBJECT FUNCTION
var parseJSONObject = function(json, startingIndex, result) {

};

// STRING FUNCTION
var parseJSONString = function(json, startingIndex) {
  for (var i = 1; i < json.length; i++) {
    if (json[i] === '"') {
      var endingIndex = i;
    }
  }
  return json.slice(startingIndex + 1, endingIndex);
};

var parseJSON = function(json, startingIndex, result) {
  if (!result){
    if (json[0] === "[") {
      var result = [];
    
    } else if (json[0] === "{") {
      var result = {};
    
    }
  }



  for (var currentChar = 0; currentChar < json.length; currentChar++) {
  // set up functionality for different data types
  // string
    if (currentChar === '"') {
      return parseJSONString(json, currentChar);
    }
  // number
  // boolean
  // object
  // array
    if (currentChar === "["){
      return parseJSONArray(json, currentChar);
    }
  }
  // null
};
