var getElementsByClassName = function(className, element, results) {

  element = element || document.body;
  results = results || []; 

  var classList = element.classList;

  if (_.contains(classList, className)) {
    results.push(element);
  }

  var children = element.childNodes;

  _.each(children, function(child) {
    getElementsByClassName(className, child, results);
  });

  return results;
};
