// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  /*
  String return itself -- also base case
  numbers, booleans, null, undefined base cases
  arrays/objects need to recurse for base cases
  */
  if (typeof obj === "number") {
    return "" + obj;
  }
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "boolean") {
    return "" + obj;
  }
  if (typeof obj === "string") {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var result = [];
    obj.forEach(function(element){
      result.push(stringifyJSON(element));
    });
    return '[' + result.join(",") + ']';
  }
  if (typeof obj === "object") {
    var result = [];
    for (var key in obj) {
      if (typeof obj[key] === "function" || obj[key] === undefined) {
        continue;
      } 
      result.push(stringifyJSON(key) + ":" +stringifyJSON(obj[key]));
      
    }
    return '{' + result.join(",") + '}'; 
  }


};










