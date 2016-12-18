function Stack(){
  this.data = [];
}

module.exports = Stack;

Stack.prototype.push = function(element) {
  this.data.push(element);
};

Stack.prototype.pop = function() {
  return this.data.pop();
};

Stack.prototype.peek = function() {
  return this.data.peek();
};

Stack.prototype.visualize = function(container) {
  row = document.createElement('div');
  row.className = "stack";
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
