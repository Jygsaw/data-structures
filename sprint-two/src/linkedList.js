var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.tail === null){
      list.head = newNode;
    } else {
      list.tail.setNext(newNode);
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.head){
      var result = list.head.getValue();
      if(list.head === list.tail){
        list.tail = null;
      }
      list.head = list.head.getNext();
      return result;
    }
  };

  list.contains = function(target){
    if(list.head){
      var tempNode = list.head;
      while(tempNode){
        if(target === tempNode.getValue()){
          return true;
        }
        tempNode = tempNode.getNext();
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

  node.getValue = function() {
    return node.value;
  };

  node.getNext = function() {
    return node.next;
  };

  node.setNext = function(nextNode) {
    node.next = nextNode;
  };

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
