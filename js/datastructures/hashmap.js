function HashMap() {
  this.data = {};
}

module.exports = HashMap;

HashMap.prototype.remove = function(key) {
  this.data.remove(key);
};

HashMap.prototype.put = function(key, value) {
  this.data[key] = value;
};

HashMap.prototype.contains = function(key) {
  return this.data.contains(key);
}

HashMap.prototype.get = function(key) {
  return this.data[index];
};

HashMap.prototype.size = function() {
  return this.data.size();
};

HashMap.prototype.visualize = function(container) {
  let thisContainer = document.createElement("div");
  thisContainer.className = "hashmap";

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

  thisContainer.appendChild(createEntry("Key", "Value"));
  for(let key in this.data) {
    let value = this.data[key];
    thisContainer.appendChild(createEntry(key, value));
  }

  container.appendChild(thisContainer);
}
