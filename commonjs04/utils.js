const os = require("os");

function random() {
  return Math.floor(Math.random() * 10);
}

function sysInfo() {
  return {
    cpu: os.cpus()[0],
    mem: os.totalmem(),
  };
}

module.exports = { random }; // same (Name Export 1)
module.exports = random; // same (Default Export 1) (export only one fn)
