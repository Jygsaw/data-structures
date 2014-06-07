var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent =  null;
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
  var newChild = makeTree(value);
  newChild.parent = this;
  this.children.push(newChild);
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

treeMethods.removeFromParent = function(){
  var childToDelete = this;
  this.parent.removeChild(this);
  childToDelete.parent = null;
};

treeMethods.removeChild = function(child){
  var targetIndex;
  _.each(this.children, function(item, index){
    if(item === child){
      targetIndex = index;
    }
  });

  if(targetIndex >= 0){
    this.children.splice(targetIndex,1);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
