var Stack = function() {
  this.storage = {};
  this.amount = 0;
};

Stack.prototype.push = function(value){
  this.amount++;
  this.storage[this.amount] = value;
};

Stack.prototype.pop = function(){
  if(this.amount > 0){
    return this.storage[this.amount--];
  }
};

Stack.prototype.size = function(){
  return this.amount;
};
