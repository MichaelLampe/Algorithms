let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

function HashSet(options){
  let defaults = {};
  DataStructure.call(this, options, defaults)
  this.data = new Set();
}
HashSet.prototype = Object.create(DataStructure.prototype);
HashSet.prototype.constructor = HashSet;

module.exports = HashSet;

ApiConstructor(HashSet, "remove", function(that, element) {
    return that.data.delete(element);
})

ApiConstructor(HashSet, "add", function(that, element) {
    that.data.add(element);
})

ApiConstructor(HashSet, "contains", function(that, element) {
  return that.data.has(element);
})

ApiConstructor(HashSet, "size", function(that) {
  return that.data.size();
})

ApiConstructor(HashSet, "visualize", function(that, container) {

})

HashSet.prototype.visualize = function(container) {
  container = that.getDataContainer("hashset", container);

  this.data.forEach(function(element) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(element);
    currentElement.appendChild(innerText);

    container.appendChild(currentElement);
  })
};
