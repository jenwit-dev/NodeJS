const os = require("os");

module.exports.random = () => Math.random();

exports.sysInfo = () => ({
  cpu: os.cpus()[0],
  mem: os.totalmem(),
});

module.exports.cc = 15;

// exports is a key of module
// cc is also a key of exports
