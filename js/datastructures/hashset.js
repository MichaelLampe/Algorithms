function HashSet(){
  this.data = new Set();
}

module.exports = HashSet;

HashSet.prototype.remove = function(element) {
  return this.data.delete(element);
};

HashSet.prototype.add = function(element) {
  this.data.add(element);
};

HashSet.prototype.contains = function(element) {
  return this.data.has(element);
};

HashSet.prototype.size = function() {
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
