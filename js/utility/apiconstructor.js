let common = require("./common")

function addApi(object, name, func, options) {
  let defaults = {
    report: true,
  }
  options = common.mergeOptions(options, defaults);

  object.prototype[name] = function() {

    // On first function call, register the stats
    if (options.report && !this.stats.hasEventRegistered(name)) {
      this.stats.registerEvent(name);
    }

    if (options.report) { this.stats.reportEvent(name);}

    let argsArray = Array.prototype.slice.call(arguments);
    func.apply(this, argsArray);
  }
}

module.exports = addApi;
