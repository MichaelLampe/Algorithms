let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");
let _HashMap = require("hashmap");

let count = 1;
function HashMap(options) {
  let defaults = {
    "name": "HashMap " + String(count),
  }
  DataStructure.call(this, options, defaults);

  this.data = new _HashMap();
}

HashMap.prototype = Object.create(DataStructure.prototype);
HashMap.prototype.constructor = HashMap;

module.exports = HashMap;

ApiConstructor(HashMap, "remove", function(key) {
  return this.data.remove(key);
})

ApiConstructor(HashMap, "put", function(key, value) {
  this.data.set(key, value);
})

ApiConstructor(HashMap, "contains", function(key) {
  return this.data.has(key);
})

ApiConstructor(HashMap, "get", function(key) {
  return this.data.get(key);
})

ApiConstructor(HashMap, "size", function() {
  return this.data.count();
})

ApiConstructor(HashMap, "visualize", function(container) {
  container = this.getDataContainer("hashmap", container);

  function createDiv(text){
    let div = document.createElement("div");
    let innerText = document.createElement("p");
    innerText.innerText = String(text);
    div.appendChild(innerText);
    return div;
  }

  function createEntry(key, value) {
    let thisEntry = document.createElement("div");
    thisEntry.className = "hash-map-entry";
    thisEntry.appendChild(createDiv(key));
    thisEntry.appendChild(createDiv(value));
    return thisEntry;
  }

  container.appendChild(createEntry("Key", "Value"));

  this.data.forEach(function(value, key) {
    container.appendChild(createEntry(key, value));
  })
}, {report: false});
