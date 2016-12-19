let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

let count = 1;
function LinkedList(options) {
  let defaults = {
    "name": "Linked List " + String(count),
  }
  // TODO Add options for tail pointers, if multidirectional.
  DataStructure.call(this, options, defaults);

  this.head = new Node("Head", true);
  this.tail = this.head;
  this.size = 0;
}

LinkedList.prototype = Object.create(DataStructure.prototype);
LinkedList.prototype.constructor = LinkedList;

// Doubly linked nodes
function Node(data, isHead) {
  this.data = data;
  this.isHead = isHead || false;
  this.nextElement = null;
  this.previousElement = null;
}

Node.prototype = {
  hasNext: function() {
    return this.nextElement != null;
  },
  next: function() {
    return this.nextElement;
  },
  setNext: function(element) {
    this.nextElement = element;
  },

  hasPrevious: function() {
    return !this.previousElement.isHead;
  },
  previous: function() {
    return this.previousElement;
  },
  setPrevious: function(element) {
    this.previousElement = element;
  }
}

module.exports = LinkedList;

ApiConstructor(LinkedList, "add", function(element) {
  let newNode = new Node(element);

  let tail = this.tail;

  // Create the two connections
  newNode.setPrevious(tail);
  tail.setNext(newNode);

  // Replace previous tail
  this.tail = newNode;
  this.size += 1;
});

ApiConstructor(LinkedList, "remove", function(value) {
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
    this.size -= 1;
  }
  return currentElement;
});

ApiConstructor(LinkedList, "size", function(this) {
  return this.size;
})

ApiConstructor(LinkedList, "visualize", function(container) {
  container = this.getDataContainer("linked-list", container);

  let temp = document.createElement('div');

  let currentNode = this.head;
  while(currentNode != null) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(currentNode.data);
    currentElement.appendChild(innerText);

    container.appendChild(currentElement);

    currentNode = currentNode.next();
  }
}, {report: false});
