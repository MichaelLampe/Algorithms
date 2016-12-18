let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

function HashMap(options) {
  let defaults = {};
  DataStructure.call(this, options, defaults);

  this.data = {};
}

HashMap.prototype = Object.create(DataStructure.prototype);
HashMap.prototype.constructor = HashMap;

module.exports = HashMap;

ApiConstructor(HashMap, "remove", function(that, key) {
  return that.data.remove(key);
})

ApiConstructor(HashMap, "put", function(that, key, value) {
  that.data[key] = value;
})

ApiConstructor(HashMap, "contains", function(that, key) {
  return that.data.contains(key);
})

ApiConstructor(HashMap, "get", function(that, key) {
  return that.data[key];
})

ApiConstructor(HashMap, "size", function(that, size) {
  return that.data.size();
})

ApiConstructor(HashMap, "visualize", function(that, container) {
  container = that.getDataContainer("hashmap", container);

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
  for(let key in that.data) {
    let value = that.data[key];
    container.appendChild(createEntry(key, value));
  }
}, {report: false});
