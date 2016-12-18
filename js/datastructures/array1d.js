function BasicArray(){
  this.data = [];
}

module.exports = BasicArray;

BasicArray.prototype.remove = function(index) {
  var removedElement = this.data.splice(index, 1);
  return removedElement;
};

BasicArray.prototype.add = function(element) {
  this.data.push(element);
};

BasicArray.prototype.get = function(index) {
  return this.data[index];
};

BasicArray.prototype.length = function() {
  return this.data.length;
};

BasicArray.prototype.visualize = function(container) {
  row = document.createElement('div');
  row.className = "array1d";
  container.appendChild(row);

  let temp = document.createElement('div');

  for (let i = 0; i < this.data.length; i++) {
    let currentElement = document.createElement('div');

    let innerText = document.createElement('p');
    // TODO allow JSON handling
    innerText.innerText = String(this.data[i]);
    currentElement.appendChild(innerText);

    row.appendChild(currentElement);
  }
};
