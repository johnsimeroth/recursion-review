// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Declare result
// Get class list of node
// if class list includes "classname"
//    concat body to result
// Get all sub-elements in body
// if there are no sub-elements (BASE CASE)
//    return result
// (if there are) Iterate through each sub-element (RECURSIVE CASE)
//    return getElementsByClassName(className,current element)
var getElementsByClassName = function(className, node) {
  var result = [];
  if (!node) {
    node = document.body;
  }
  if (node.classList.contains(className)) {
    result = result.concat(node);
  }
  var children = node.children;
  if (children.length === 0) {
    return result;
  }
  children.forEach(function(child) {
    result = result.concat(getElementsByClassName(className, child));
  });
  return result;
};
