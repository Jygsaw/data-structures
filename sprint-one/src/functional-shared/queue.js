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
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function(){
  if (this.size() > 0) {
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  }
};

queueMethods.size = function(){
  return this.tail - this.head;
};
