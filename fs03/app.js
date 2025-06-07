const fs = require("fs");
const fsa = require("fs/promises");

// console.time("time");
// for (let i = 1; i <= 1_000_000; i++) {
//   (20 ^ 2.3) / 11;
// }
// console.timeEnd("time");

// readFileSync
// console.time("readFileSync");
// console.log(fs.readFileSync("./resource/dat01.txt", "utf8"));
// console.log(fs.readFileSync("./resource/dat02.txt", "utf8"));
// console.log(fs.readFileSync("./resource/dat03.txt", "utf8"));
// console.log(fs.readFileSync("./resource/dat04.txt", "utf8"));
// console.timeEnd("readFileSync");

// readFile (callback)
// console.time("readFileCB");
// fs.readFile("./resource/dat01.txt", "utf8", (err, data) => console.log(data));
// fs.readFile("./resource/dat02.txt", "utf8", (err, data) => console.log(data));
// fs.readFile("./resource/dat03.txt", "utf8", (err, data) => console.log(data));
// fs.readFile("./resource/dat04.txt", "utf8", (err, data) => console.log(data));
// console.timeEnd("readFileCB");

// console.time("readFilePromise");
// fsa.readFile("./resource/dat01.txt", "utf8").then(console.log);
// fsa.readFile("./resource/dat02.txt", "utf8").then(console.log);
// fsa.readFile("./resource/dat03.txt", "utf8").then(console.log);
// fsa.readFile("./resource/dat04.txt", "utf8").then(console.log);
// console.timeEnd("readFilePromise");

console.time("readFilePromise");
let pm1 = fsa.readFile("./resource/dat01.txt", "utf8");
let pm2 = fsa.readFile("./resource/dat02.txt", "utf8");
let pm3 = fsa.readFile("./resource/dat03.txt", "utf8");
let pm4 = fsa.readFile("./resource/dat04.txt", "utf8");
console.timeEnd("readFilePromise");

Promise.all([pm1, pm2, pm3, pm4])
  .then((result) => {
    //   console.log(result[0]);
    //   console.log(result[1]);
    //   console.log(result[2]);
    //   console.log(result[3]);
    result.forEach((x) => console.log(x));
  })
  .catch((err) => console.log(err));
