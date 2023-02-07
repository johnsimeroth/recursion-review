// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // Declare result
  // Get node body
  // Get class list of body
  // if class list includes "classname"
    // concat body to result
  // Get all sub-elements in body
  // if there are no sub-elements (BASE CASE)
    // return result
  // (if there are) Iterate through each sub-element (RECURSIVE CASE)
    // return getElementsByClassName(className,current element)
};
