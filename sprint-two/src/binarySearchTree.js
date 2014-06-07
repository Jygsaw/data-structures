var makeBinarySearchTree = function(value){
  var newTree = Object.create(bstMethods);
  newTree.parent = null;
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
      this.left.parent = this;
    }else{
      this.left.insert(value);
    }
  } else if(value > this.value){
    if(!this.right){
      this.right = makeBinarySearchTree(value);
      this.right.parent = this;
    }else{
      this.right.insert(value);
    }
  }

  // only execute rebalance check from root node
  if (!this.parent) {
    // check if tree is unbalanced
    var maxD = this.nodeDepth('max') - 1;
    var minD = this.nodeDepth('min') - 1;

    // tree is unbalanced when max depth is greater than
    // 2 * min depth
    // do not balance for small depth trees
    if ((maxD > 3) &&
        (maxD > minD * 2)) {
      // build sorted array of tree values
      var elems = [];
      this.inOrderTraverse(function(node){
        if (node) {
          elems.push(node.value);
        }
      });

      // build and reset node to balanced tree of elems
      var newTree = this.buildTree(elems);
      this.left = newTree.left;
      this.right = newTree.right;
      this.value = newTree.value;
      this.parent = null;
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

bstMethods.breadthFirstLog = function(callback) {
  var queue = [this];

  while(queue.length > 0) {
    // init vars
    var targetNode = queue.shift();

    // invoke callback on current node
    callback(targetNode.value);

    // push children onto queue if available
    if (targetNode.left) {
      queue.push(targetNode.left);
    }
    if (targetNode.right) {
      queue.push(targetNode.right);
    }
  }
};

bstMethods.nodeDepth = function(type){
  // init vars
  var leftD = this.left ? this.left.nodeDepth(type) : 0;
  var rightD = this.right ? this.right.nodeDepth(type) : 0;

  // return based on min/max depth
  if(type === 'min'){
    return 1 + ((leftD < rightD)? leftD : rightD);
  }
  else{
    return 1 + ((leftD > rightD)? leftD : rightD);
  }
};

bstMethods.inOrderTraverse = function(callback){
  // traverse left branch
  if(this.left){
    this.left.inOrderTraverse(callback);
  }

  // operate on node
  callback(this);

  // traverse right branch
  if(this.right){
    this.right.inOrderTraverse(callback);
  }
};

bstMethods.buildTree = function(values){
  // build root node
  var i = Math.floor(values.length/2);
  var newTree = makeBinarySearchTree(values[i]);

  // build left branch
  var leftValues = values.slice(0,i);
  if (leftValues.length > 0) {
    newTree.left = newTree.buildTree(leftValues);
    newTree.left.parent = newTree;
  }

  // build right branch
  var rightValues = values.slice(i+1);
  if (rightValues.length > 0) {
    newTree.right = newTree.buildTree(rightValues);
    newTree.right.parent = newTree;
  }

  return newTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
