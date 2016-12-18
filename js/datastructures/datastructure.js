let Stats = require("../utility/statistics.js");
let _ = require("underscore");
let uuidV4 = require('uuid/v4');

function DataStructure(options, defaults) {
  this.options = this.mergeOptions(options, defaults);
  this.options.name = this.options.name || uuidV4();

  this.stats = new Stats();
}

module.exports = DataStructure;

DataStructure.prototype = {
  getDataContainer: function(className, container) {
    container = container || document.getElementById("visualization-box");

    // Setup new element
    row = document.createElement('div');
    row.className = className;
    row.id = this.options.name;
    if (document.getElementById(this.options.name) != null) {
      container.removeChild(document.getElementById(this.options.name));
    }
    container.appendChild(row);
    return row;
  },

  mergeOptions: function(options, defaults) {
    options = options || {};
    return _.extend(defaults, options);
  }
}
