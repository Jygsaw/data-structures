var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToHead = function(value) {
    if (list.head === null) {
      list.addToTail(value);
    } else {
      var newNode = makeNode(value);
      newNode.next = list.head;
      list.head.previous = newNode;
      list.head = newNode;
    }
  };

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.tail === null){
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.head){
      var result = list.head.value;
      if(list.head === list.tail){
        list.head = null;
        list.tail = null;
      }else{
        list.head = list.head.next;
      }
      return result;
    }
  };

  list.removeTail = function() {
    if (list.tail) {
      var result = list.tail.value;
      if (list.tail === list.head) {
        list.head = null;
        list.tail = null;
      }else{
        list.tail = list.tail.previous;
      }
      return result;
    }
  };

  list.contains = function(target){
    if(list.head){
      var tempNode = list.head;
      while(tempNode){
        if(target === tempNode.value) {
          return true;
        }
        tempNode = tempNode.next;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
