function Queue(){
  this.data = [];
}

module.exports = Queue;

Queue.prototype.push = function(element) {
  this.data.push(element);
};

Queue.prototype.pop = function() {
  return this.data.shift();
};

Queue.prototype.peek = function() {
  if (this.data.length == 0) {
    return null;
  }
  return this.data[0];
};

Queue.prototype.visualize = function(container) {
  row = document.createElement('div');
  row.className = "Queue";
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
