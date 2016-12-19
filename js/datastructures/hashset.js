let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

let count = 1;
function HashSet(options) {
  let defaults = {
    "name": "HashSet " + String(count),
  }
  DataStructure.call(options, defaults)
  this.data = new Set();
}
HashSet.prototype = Object.create(DataStructure.prototype);
HashSet.prototype.constructor = HashSet;

module.exports = HashSet;

ApiConstructor(HashSet, "remove", function(element) {
    return this.data.delete(element);
})

ApiConstructor(HashSet, "add", function(element) {
    this.data.add(element);
})

ApiConstructor(HashSet, "contains", function(element) {
  return this.data.has(element);
})

ApiConstructor(HashSet, "size", function(this) {
  return this.data.size();
})

ApiConstructor(HashSet, "visualize", function(container) {
  // Hashset looks just like an array
  container = this.getDataContainer("array1d", container);

  this.data.forEach(function(element) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(element);
    currentElement.appendChild(innerText);

    container.appendChild(currentElement);
  })
})
