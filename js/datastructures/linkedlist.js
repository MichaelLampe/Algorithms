function LinkedList(){
  this.head = new Node("Head");
  this.tail = this.head;
  this.length = 0;
}

function Node(data) {
  this.data = data;
  this.nextElement = null;
  this.previousElement = null;
}

Node.prototype.hasNext = function(){
  return this.nextElement != null;
}

Node.prototype.next = function() {
  return this.nextElement;
}

Node.prototype.previous = function() {
  return this.previousElement;
}

Node.prototype.setNext = function(next) {
  this.nextElement = next;
}

Node.prototype.setPrevious = function(previous) {
  this.previousElement = previous;
}

module.exports = LinkedList;

LinkedList.prototype.add = function(element) {
  let newNode = new Node(element);

  let tail = this.tail;

  // Create the two connections
  newNode.setPrevious(tail);
  tail.setNext(newNode);

  // Replace previous tail
  this.tail = newNode;
  this.length += 1;
}

LinkedList.prototype.remove = function(value) {
  let currentElement = this.head;

  while(currentElement.hasNext && currentElement.data != value) {
    currentElement = currentElement.next();
  }

  if (currentElement != null) {
    let prior = currentElement.previous();
    let after = currentElement.next();

    prior.setNext(after);
    after.setPrevious(prior);

    currentElement = currentElement.next();
  }

  // Only if we actually remove an element do we decrement the length tracker.
  if (currentElement != null) {
    this.length -= 1;
  }
  return currentElement;
}

LinkedList.prototype.size = function() {
  return this.length;
}

LinkedList.prototype.visualize = function(container) {
  row = document.createElement('div');
  row.className = "linked-list";
  container.appendChild(row);

  let temp = document.createElement('div');

  let currentNode = this.head;
  while(currentNode != null) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(currentNode.data);
    currentElement.appendChild(innerText);

    row.appendChild(currentElement);

    currentNode = currentNode.next();
  }
};
