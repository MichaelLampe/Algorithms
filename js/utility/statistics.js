function Statistics(){
  this.fields = {};
}

module.exports = Statistics;

Statistics.prototype.reportEvent = function(name) {
  this.fields[name] += 1;
}

Statistics.prototype.hasEventRegistered = function(name) {
  return name in this.fields;
}

Statistics.prototype.registerEvents = function(names) {
  let that = this;
  names.forEach(function(element) {
    that.registerEvent(element);
  });
}

Statistics.prototype.registerEvent = function(name) {
  this.fields[name] = 0;
}

Statistics.prototype.printSummary = function() {
  console.log(this.fields);
}
