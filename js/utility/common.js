let _ = require("underscore");

function mergeOptions(options, defaults) {
  options = options || {};
  return _.extend(defaults, options);
}

module.exports.mergeOptions = mergeOptions;
