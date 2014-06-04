var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    if (head === 0 && tail === 0) {
      head++;
    }
    tail++;
    storage[tail] = value;
  };

  someInstance.dequeue = function(){
    var result = storage[head];
    delete storage[head];
    head++;
    if (head > tail) {
      head = tail = 0;
    }
    return result;
  };

  someInstance.size = function(){
    if (tail === 0 && tail === 0) {
      return 0;
    } else {
      return tail === head ? 1 : tail - head + 1;
    }
  };

  return someInstance;
};
