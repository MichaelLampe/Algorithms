let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

let count = 1;
function Stack(options) {
  let defaults = {
    "name": "stack " + String(count),
  }
  DataStructure.call(this, options, defaults);

  this.data = [];
}

Stack.prototype = Object.create(DataStructure.prototype);
Stack.prototype.constructor = Stack;

module.exports = Stack;

ApiConstructor(Stack, "push", function(element) {
  this.data.push(element);
});

ApiConstructor(Stack, "pop", function(element) {
  return this.data.pop();
});

ApiConstructor(Stack, "peek", function() {
  return this.data.peek();
});

ApiConstructor(Stack, "visualize", function(container) {
  container = this.getDataContainer("stack", container);

  for (let i = 0; i < this.data.length; i++) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(this.data[i]);
    currentElement.appendChild(innerText);

    container.appendChild(currentElement);
  }
}, {report: false});
