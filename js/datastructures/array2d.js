function TwoDimensionalArray(){
  this.data = [];
}

module.exports = TwoDimensionalArray;

TwoDimensionalArray.prototype.remove = function(index) {
  var removedElement = this.data.splice(index, 1);
  return removedElement;
};

TwoDimensionalArray.prototype.add = function(element) {
  this.data.push(element);
};

TwoDimensionalArray.prototype.get = function(x, y) {
  return this.data[y].get(x)
};

TwoDimensionalArray.prototype.size = function() {
  return this.data.map(function(array) {
    return array.length;
  }).reduce(function(a, b) {
    return a + b;
  });
};

TwoDimensionalArray.prototype.visualize = function(container) {
  let thisContainer = document.createElement("div");
  container.appendChild(thisContainer);
  thisContainer.className = "array2d";
  for (let i = 0; i < this.data.length; i++) {
    this.data[i].visualize(thisContainer);
  }
}
