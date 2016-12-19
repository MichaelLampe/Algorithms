let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

let count = 1;
function BasicArray(options) {
  let defaults = {
    "name": "Basic Array " + String(count),
    "width": 0,
    "init": 0,
  }
  DataStructure.call(this, options, defaults);
  this.data = [];
  for (let i = 0; i < this.options.width; i++) {
    this.add(this.options.init);
  }
  count += 1;
}
BasicArray.prototype = Object.create(DataStructure.prototype);
BasicArray.prototype.constructor = BasicArray;

module.exports = BasicArray;

ApiConstructor(BasicArray, "remove", function(index) {
  var removedElement = this.data.splice(index, 1);
  return removedElement;
});

ApiConstructor(BasicArray, "add", function(element) {
  this.data.push(element);
});

ApiConstructor(BasicArray, "length", function() {
  return this.data.length;
});

ApiConstructor(BasicArray, "visualize", function(container) {
  let row = this.getDataContainer("array1d", container);

  // Add all elements
  for (let i = 0; i < this.data.length; i++) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(this.data[i]);
    currentElement.appendChild(innerText);

    row.appendChild(currentElement);
  }
}, {report: false});
