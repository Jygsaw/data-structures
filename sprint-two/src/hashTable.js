var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // init vars
  var i = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(i);

  // checking if bucket exists
  if(!targetBucket){
    // creating new bucket
    targetBucket = {};
    this._storage.set(i,targetBucket);
  }

  // setting key/val in bucket
  targetBucket[k] = v;

};

HashTable.prototype.retrieve = function(k){
  // init vars
  var i = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(i);

  // checking if key/val exists
  if(targetBucket[k]){
    // return key/val
    return targetBucket[k];
  }

  // return null if nothing found
  return null;
};

HashTable.prototype.remove = function(k){
  // init vars
  var i = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(i);

  // checking if target bucket exists
  if(targetBucket){
    // delete key/val from bucket
    delete targetBucket[k];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
