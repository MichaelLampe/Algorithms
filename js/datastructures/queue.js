let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

let count = 1;
function Queue(options) {
  let defaults = {
    "name": "Queue " + String(count),
  }
  DataStructure.call(this, options, defaults);

  this.data = [];
}

Queue.prototype = Object.create(DataStructure.prototype);
Queue.prototype.constructor = Queue;

module.exports = Queue;

ApiConstructor(Queue, "push", function(element) {
  this.data.push(element);
});

ApiConstructor(Queue, "pop", function() {
  return this.data.shift();
});

ApiConstructor(Queue, "peek", function() {
  if (this.data.length == 0) {
    return null;
  }
  return this.data[0];
});

ApiConstructor(Queue, "visualize", function(container) {
  container = this.getDataContainer("queue", container);

  for (let i = 0; i < this.data.length; i++) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(this.data[i]);
    currentElement.appendChild(innerText);

    container.appendChild(currentElement);
  }
})
