var makeStack = function() {
  var newStack = Object.create(stackMethods);
  newStack.amount = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.amount++;
  this.storage[this.amount] = value;
};

stackMethods.pop = function(){
  if(this.amount > 0){
    return this.storage[this.amount--];
  }
};

stackMethods.size = function(){
  return this.amount;
};

