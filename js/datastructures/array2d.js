let DataStructure = require("./datastructure.js");
let ApiConstructor = require("../utility/apiconstructor.js");

function TwoDimensionalArray(options) {
  let defaults = {
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
}
TwoDimensionalArray.prototype = Object.create(DataStructure.prototype);
TwoDimensionalArray.prototype.constructor = TwoDimensionalArray;

module.exports = TwoDimensionalArray;

ApiConstructor(TwoDimensionalArray, "remove", function(that, index) {
  var removedElement = that.data.splice(index, 1);
  return removedElement;
});

ApiConstructor(TwoDimensionalArray, "add", function(that, element) {
  that.data.push(element);
});

ApiConstructor(TwoDimensionalArray, "get", function(that, x, y) {
  return that.data[y].get(x)
});

ApiConstructor(TwoDimensionalArray, "size", function(that) {
  return that.data.map(function(array) {
    return array.length;
  }).reduce(function(a, b) {
    return a + b;
  });
});

ApiConstructor(TwoDimensionalArray, "visualize", function(that, container) {
  let array = that.getDataContainer("array2d", container);
  for (let i = 0; i < that.data.length; i++) {
    that.data[i].visualize(array);
  }
}, {report: false});
