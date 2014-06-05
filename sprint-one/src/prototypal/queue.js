var makeQueue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;
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
