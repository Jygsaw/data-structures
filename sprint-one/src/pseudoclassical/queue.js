var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function(){
  if (this.size() > 0) {
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.tail - this.head;
};
