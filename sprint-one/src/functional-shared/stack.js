var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Implement the methods below
  someInstance.storage = {};
  someInstance.amount = 0;
  _.extend(someInstance,stackMethods);

  return someInstance;
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
