var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  // setting toNode when only one edge possible
  if (Object.keys(this.nodes).length === 1) {
    toNode = Object.keys(this.nodes)[0];
  }

  // create new node
  this.nodes[newNode] = {};

  // create edge to optional toNode
  if (toNode) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  // check if node exists in registry
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  // break connecting edges
  for (var key in this.nodes[node]) {
    this.removeEdge(key, node);
  }
  // delete target node
  delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) {
    return !!(this.nodes[fromNode][toNode] && this.nodes[toNode][fromNode]);
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) {
    this.nodes[fromNode][toNode] = true;
    this.nodes[toNode][fromNode] = true;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) {
    // remove relationship
    delete this.nodes[fromNode][toNode];
    delete this.nodes[toNode][fromNode];

    // remove orphaned nodes
    var nodeList = this.nodes;
    _.each([fromNode, toNode], function(node) {
      if (Object.keys(nodeList[node]).length === 0) {
        delete nodeList[node];
      }
    });
  }
};

Graph.prototype.forEachNode = function(callback) {
}

var Node = function(value) {
  this.value = value;
  this.edges = {};
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
