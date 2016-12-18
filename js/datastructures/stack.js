let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

function Stack(options) {
  let defaults = {};
  DataStructure.call(this, options, defaults);

  this.data = [];
}

Stack.prototype = Object.create(DataStructure.prototype);
Stack.prototype.constructor = Stack;

module.exports = Stack;

ApiConstructor(Stack, "push", function(that, element) {
  that.data.push(element);
});

ApiConstructor(Stack, "pop", function(that, element) {
  return that.data.pop();
});

ApiConstructor(Stack, "peek", function(that) {
  return that.data.peek();
});

ApiConstructor(Stack, "visualize", function(that, container) {
  container = that.getDataContainer("stack", container);

  for (let i = 0; i < that.data.length; i++) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(that.data[i]);
    currentElement.appendChild(innerText);

    container.appendChild(currentElement);
  }
}, {report: false});
