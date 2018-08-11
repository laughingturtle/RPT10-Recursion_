// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
const getElementsByClassName = function(className, node = document.body) {
  let container = [];

  if ([].indexOf.call(node.classList, className) !== -1){
      container.push(node);
  }

  for (let child of node.children){
    container = container.concat(getElementsByClassName(className, child));
    }

  return container;
};
