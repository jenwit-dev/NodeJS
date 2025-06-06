// const fs = require("node:fs");

// fs.readFile("/Users/joe/test.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const fs = require("fs");

const data = fs.readFileSync("./data.txt", "utf8");

console.log(data);

fs.readFile("./data.txt", "utf8", (err, data) => {
  console.log("async read");
  console.log(data);
});
