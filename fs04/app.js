const fs = require("fs/promises");

const msg = "Codecamp15";

fs.writeFile("./test.txt", msg).then(() => {
  console.log("ok");
});
