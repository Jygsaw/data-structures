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
    targetBucket = [];
    this._storage.set(i,targetBucket);
  }

  // setting key/val in bucket
  targetBucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  // init vars
  var i = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(i);
  var result = null;

  // checking if key/val exists
  if(targetBucket) {
    // return key/val
    _.each(targetBucket, function(array){
      if(array[0] === k){
        console.log("this the value " + array[1]);
        result = array[1];
      }
    });
  }

  // return null if nothing found
  return result;
};

HashTable.prototype.remove = function(k){
  // init vars
  var i = getIndexBelowMaxForKey(k, this._limit);
  var targetBucket = this._storage.get(i);

  // checking if target bucket exists
  if(targetBucket){
    if (targetBucket.length === 1) {
      targetBucket.pop();
    } else {
      // find index for target key/
      var targetIndex;
      _.each(targetBucket, function(array, index) {
        if (array[0] === k) {
          targetIndex = index;
        }
      });

      // delete key/val from bucket
      targetBucket = targetBucket.splice(targetIndex, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
