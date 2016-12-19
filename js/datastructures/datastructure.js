let Stats = require("../utility/statistics.js");
let common = require("../utility/common");
let uuidV4 = require('uuid/v4');

function DataStructure(options, defaults) {
  this.options = common.mergeOptions(options, defaults);
  this.options.name = this.options.name || uuidV4();

  this.stats = new Stats();
}

module.exports = DataStructure;

DataStructure.prototype = {
  getDataContainer: function(className, container) {
    container = container

    // Setup new element
    row = document.createElement('div');
    row.className = className;
    if (document.getElementById(this.options.name) != null) {
      container.removeChild(document.getElementById(this.options.name));
    }
    container.appendChild(row);
    return row;
  }

  createDatabox: function() {
    let dataBox = document.createElement('div');
    dataBox.id = this.options.name;
    dataBox.className = "vis-box"
    document.getElementById("vis-area").appendChild(dataBox);
    return dataBox;
  }

  addToScene: function() {
    let dataBox = document.getElementById(this.options.name) || createDatabox();
    while (dataBox.firstChild) {
      dataBox.removeChild(dataBox.firstChild);
    }

    let label = document.createElement('p');
    label.className = "label";
    let structure = document.createElement('div');
    structure.className = "data";
    label.innerText = collection.options.name;
    dataBox.appendChild(label);
    dataBox.appendChild(structure);
    this.visualize(structure);
  }
}
