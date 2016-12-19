let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

let count = 1;
function TwoDimensionalArray(options) {
  let defaults = {
    name: "TwoD Array " + String(count),
    "width": 0,
    "height": 0,
    "init": 0,
  }
  DataStructure.call(this, options, defaults);

  this.data = [];
  for (let i = 0; i < this.options.height; i++) {
    let temp = new BasicArray(options);
    this.add(temp);
  }
  this.addToScene();
  count += 1;
}
TwoDimensionalArray.prototype = Object.create(DataStructure.prototype);
TwoDimensionalArray.prototype.constructor = TwoDimensionalArray;

module.exports = TwoDimensionalArray;

ApiConstructor(TwoDimensionalArray, "remove", function(index) {
  var removedElement = this.data.splice(index, 1);
  return removedElement;
});

ApiConstructor(TwoDimensionalArray, "add", function(element) {
  this.data.push(element);
});

ApiConstructor(TwoDimensionalArray, "get", function(x, y) {
  return this.data[y].get(x)
});

ApiConstructor(TwoDimensionalArray, "size", function() {
  return this.data.map(function(array) {
    return array.length;
  }).reduce(function(a, b) {
    return a + b;
  });
});

ApiConstructor(TwoDimensionalArray, "visualize", function(container) {
  let array = this.getDataContainer("array2d", container);
  for (let i = 0; i < this.data.length; i++) {
    this.data[i].visualize(array);
  }
}, {report: false});
