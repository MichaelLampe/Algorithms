let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

function BasicArray(options) {
  let defaults = {
    "width": 0,
    "init": 0,
  }
  DataStructure.call(this, options, defaults);
  this.data = [];
  for (let i = 0; i < this.options.width; i++) {
    this.add(this.options.init);
  }
}
BasicArray.prototype = Object.create(DataStructure.prototype);
BasicArray.prototype.constructor = BasicArray;

module.exports = BasicArray;

ApiConstructor(BasicArray, "remove", function(that, index) {
  var removedElement = that.data.splice(index, 1);
  return removedElement;
});

ApiConstructor(BasicArray, "add", function(that, element) {
  that.data.push(element);
});

ApiConstructor(BasicArray, "length", function(that) {
  return that.data.length;
});

ApiConstructor(BasicArray, "visualize", function(that, container) {
  let row = that.getDataContainer("array1d", container);

  // Add all elements
  for (let i = 0; i < that.data.length; i++) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(that.data[i]);
    currentElement.appendChild(innerText);

    row.appendChild(currentElement);
  }
}, false);
