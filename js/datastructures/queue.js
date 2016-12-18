let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

function Queue(options) {
  let defaults = {};
  DataStructure.call(this, options, defaults);

  this.data = [];
}

Queue.prototype = Object.create(DataStructure.prototype);
Queue.prototype.constructor = Queue;

module.exports = Queue;

ApiConstructor(Queue, "push", function(that, element) {
  that.data.push(element);
});

ApiConstructor(Queue, "pop", function(that) {
  return that.data.shift();
});

ApiConstructor(Queue, "peek", function(that) {
  if (that.data.length == 0) {
    return null;
  }
  return that.data[0];
});

ApiConstructor(Queue, "visualize", function(that, container) {
  container = that.getDataContainer("queue", container);

  for (let i = 0; i < this.data.length; i++) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(this.data[i]);
    currentElement.appendChild(innerText);

    container.appendChild(currentElement);
  }
})
