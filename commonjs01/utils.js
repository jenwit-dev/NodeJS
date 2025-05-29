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

// module.exports = { random: random, sysInfo: sysInfo };
// module.exports = { random, sysInfo };
module.exports = { random, info: sysInfo, cc: 15 };
