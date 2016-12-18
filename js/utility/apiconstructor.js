function addApi(object, name, func, report) {
  report = report || true;

  var registered = false;
  object.prototype[name] = function(args) {

    // On first function call, register the stats
    if (report && !registered) {
      this.stats.registerEvent(name);
      registered = true;
    }

    if (report) { this.stats.reportEvent(name);}

    func(this, args);
  }
}

module.exports = addApi;
