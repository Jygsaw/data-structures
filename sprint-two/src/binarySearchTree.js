var makeBinarySearchTree = function(value){
  var newTree = Object.create(bstMethods);

  newTree.left;
  newTree.right;
  newTree.value = value;

  return newTree;
};

var bstMethods = {};

bstMethods.insert = function(value){
  if(value < this.value){
    if(!this.left){
      this.left = makeBinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  } else if(value > this.value){
    if(!this.right){
      this.right = makeBinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(value){
  if(this.value === value){
    return true;
  }

  if(value < this.value){
    if(this.left){
      return this.left.contains(value);
    }
  } else if(value > this.value){
    if(this.right){
      return this.right.contains(value);
    }
  }

  return false;
};

bstMethods.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
