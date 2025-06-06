const fs = require("fs");
const fsa = require("fs/promises");

// console.time("time");
// for (let i = 1; i <= 1_000_000; i++) {
//   (20 ^ 2.3) / 11;
// }
// console.timeEnd("time");

// readFileSync
console.time("readFileSync");
console.log(fs.readFileSync("./resource/dat01.txt", "utf8"));
console.log(fs.readFileSync("./resource/dat02.txt", "utf8"));
console.log(fs.readFileSync("./resource/dat03.txt", "utf8"));
console.log(fs.readFileSync("./resource/dat04.txt", "utf8"));
console.timeEnd("readFileSync");

// readFile (callback)
console.time("readFileCB");
fs.readFile("./resource/dat01.txt", "utf8", (err, data) => console.log(data));
fs.readFile("./resource/dat02.txt", "utf8", (err, data) => console.log(data));
fs.readFile("./resource/dat03.txt", "utf8", (err, data) => console.log(data));
fs.readFile("./resource/dat04.txt", "utf8", (err, data) => console.log(data));
console.timeEnd("readFileCB");
