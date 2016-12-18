let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

function LinkedList(options) {
  // TODO Add options for tail pointers, if multidirectional.
  let defaults = {};
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

ApiConstructor(LinkedList, "add", function(that, element) {
  let newNode = new Node(element);

  let tail = that.tail;

  // Create the two connections
  newNode.setPrevious(tail);
  tail.setNext(newNode);

  // Replace previous tail
  that.tail = newNode;
  that.size += 1;
});

ApiConstructor(LinkedList, "remove", function(that, value) {
  let currentElement = that.head;

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
    that.size -= 1;
  }
  return currentElement;
});

ApiConstructor(LinkedList, "size", function(that) {
  return that.size;
})

ApiConstructor(LinkedList, "visualize", function(that, container) {
  container = that.getDataContainer("linked-list", container);

  let temp = document.createElement('div');

  let currentNode = that.head;
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
