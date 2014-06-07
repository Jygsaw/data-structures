var HashTable = function(){
  this._usage = 0;
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
  this._usage++;

  // increase hash table limit if necessary
  if(this._usage > this._limit * 0.75) {
    this.migrate(this._limit * 2);
  }
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
      targetBucket.splice(targetIndex, 1);
    }
    // decrement usage counter
    this._usage--;

    // decrease hash table limit when possible
    if(this._usage < this._limit * 0.25) {
      this.migrate(this._limit / 2);
    }
  }
};

HashTable.prototype.migrate = function(newLimit) {
  // building new data store
  var oldStorage = this._storage;
  this._usage = 0;
  this._limit = newLimit;
  this._storage = makeLimitedArray(this._limit);

  // inserting old key/val pairs into new data store
  var that = this;
  oldStorage.each(function(item){
    _.each(item, function(element){
      that.insert(element[0],element[1]);
    });
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
