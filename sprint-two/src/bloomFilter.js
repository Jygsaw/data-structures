var BloomFilter = function(filterSize) {
  this._size = filterSize || 8;
  this._hashFuncCnt = 2;
  this._storage = [];
};

BloomFilter.prototype.store = function(key) {
  // iterate over hashing types
  for (var type = 0; type < this._hashFuncCnt; type++) {
    // find index location using given hash function
    var i = this.getIndex(type, key);

    // mark bloom filter
    this._storage[i] = true;
  }
};

BloomFilter.prototype.contains = function(kedy) {
  var result = true;

  // iterate over hashing types
  for (var type = 0; type < this._hashFuncCnt; type++) {
    // find index location using given hash function
    var i = this.getIndex(type, key);

    // set result to false if entry not found
    result = result && !!this._storage[i];
  }

  return result;
};

BloomFilter.prototype.getIndex = function(type, key) {
  // initialize different types of hashing functions
  var hashFuncs = {
    // Hack Reactor hash func
    0: function(str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = (hash<<5) + hash + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
        hash = Math.abs(hash);
      }
      return hash;
    },
    // Fowler-Noll-Vo hash func
    1: function(str) {
      var FNV1_32A_INIT = 0x811c9dc5;
      var hval = FNV1_32A_INIT;
      for ( var i = 0; i < str.length; ++i )
      {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
      }
      return hval >>> 0;
    }
  };

  // run specified hashing function on given key
  return hashFuncs[type](key) % this._size;
};
