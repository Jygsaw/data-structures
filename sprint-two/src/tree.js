var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // check for children array
  if (!this.children) {
    // initialize children array
    this.children = [];
  }

  // add new child to children array
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  // check own value
  if (this.value === target) {
    return true;
  }

  // recursively check children
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  // return false if target not found
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
