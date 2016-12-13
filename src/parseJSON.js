// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
//some function to determine the next character

var currentChar = 0;

// TYPE DETERMINER FUNCTION
var determineType = function(json, startingIndex) {
  if (json[startingIndex] === '"') {
    return parseJSONString(json, startingIndex);
  }

  if (json.charCodeAt(startingIndex) < 65) {
    return parseJSONNumber(json, startingIndex);
  }
  if (json[startingIndex] === '[') {
    return parseJSONArray(json, currentChar);
  }

};

// ARRAY FUNCTION
var parseJSONArray = function(json, startingIndex, result) {
  var result = [];
  for (var i = 0; i < json.length; i++) {
    if (json[i] === ']') {
      var endingIndex = i;
    }
  }
  var stringArray = json.slice(startingIndex + 1, endingIndex);
  var unparsedArray = stringArray.split(', ');
  _.each(unparsedArray, function(element) {
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
  currentChar = endingIndex;
  return json.slice(startingIndex + 1, endingIndex);
};

var parseJSON = function(json, startingIndex, result) {
  if (!result) {
    if (json[0] === '[') {
      result = [];
    
    } else if (json[0] === '{') {
      result = {};
      //var key = parseJSONString();
      //var value = json.slice(curentChar, );
      result[key] = value;
    
    }
  }



  for (var currentChar = startingIndex; currentChar < json.length; currentChar++) {
    if (json.slice(startingIndex, 4) === 'true') {
      currentChar += 4;
      return true;
    }
    if (json.slice(startingIndex, 5) === 'false') {
      currentChar += 5;
      return false;
    }
    if (json.slice(startingIndex, 4) === 'null') { 
      currentChar += 4;
      return null;
    }
  // set up functionality for different data types
  // string

  // number
  // boolean
  // object
  // array

  }
  // null
};
