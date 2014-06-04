var makeQueue = function(){
  // init new object
  var newQueue = {};

  // init new object properties
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;

  // integrate queue methods into new object
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  if (this.head === 0 && this.tail === 0) {
    this.head++;
  }
  this.tail++;
  this.storage[this.tail] = value;
};

queueMethods.dequeue = function(){
  var result = this.storage[this.head];
  delete this.storage[this.head];
  this.head++;
  if (this.head > this.tail) {
    this.head = this.tail = 0;
  }
  return result;
};

queueMethods.size = function(){
  if (this.tail === 0 && this.tail === 0) {
    return 0;
  } else {
    return this.tail === this.head ? 1 : this.tail - this.head + 1;
  }
};


