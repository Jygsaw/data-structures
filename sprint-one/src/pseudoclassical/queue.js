var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value){
  if (this.head === 0 && this.tail === 0) {
    this.head++;
  }
  this.tail++;
  this.storage[this.tail] = value;
};

Queue.prototype.dequeue = function(){
  var result = this.storage[this.head];
  delete this.storage[this.head];
  this.head++;
  if (this.head > this.tail) {
    this.head = this.tail = 0;
  }
  return result;
};

Queue.prototype.size = function(){
  if (this.tail === 0 && this.tail === 0) {
    return 0;
  } else {
    return this.tail === this.head ? 1 : this.tail - this.head + 1;
  }
};
