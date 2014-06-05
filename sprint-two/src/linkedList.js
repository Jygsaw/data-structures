var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.tail === null){
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    if(list.head){
      var result = list.head.value;
      if(list.head === list.tail){
        list.tail = null;
      }
      list.head = list.head.next;
      return result;
    }
  };

  list.contains = function(target){
    if(this.head){
      var tempNode = list.head;
      while(tempNode){
        if(target === tempNode.value){
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
