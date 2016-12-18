let Stats = require("../utility/statistics.js");

function HashSet(){
  this.data = new Set();
  this.stats = new Stats();
  this.stats.registerEvent("remove");
  this.stats.registerEvent("add");
  this.stats.registerEvent("contains");
  this.stats.registerEvent("size");
}

module.exports = HashSet;

HashSet.prototype.remove = function(element) {
  this.stats.reportEvent("remove");
  return this.data.delete(element);
};

HashSet.prototype.add = function(element) {
  this.stats.reportEvent("add");
  this.data.add(element);
};

HashSet.prototype.contains = function(element) {
  this.stats.reportEvent("contains");
  return this.data.has(element);
};

HashSet.prototype.size = function() {
  this.stats.reportEvent("size");
  return this.data.size();
};

HashSet.prototype.visualize = function(container) {
  row = document.createElement('div');
  row.className = "hashset";
  container.appendChild(row);

  let temp = document.createElement('div');

  this.data.forEach(function(element) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(element);
    currentElement.appendChild(innerText);

    row.appendChild(currentElement);
  })
};
