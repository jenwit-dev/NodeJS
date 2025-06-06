const fs = require("fs");
const datFile = "./01.txt";

// function readFilePromise() {
//   const p = new Promise((resolve, reject) => {
//     fs.readFile(datFile, "utf8", (err, data) => {
//       if (err) return reject(err);
//       return resolve(data);
//     });
//   });
//   return p;
// }

// readFilePromise().then((data) => {
//   console.log(data);
// });

// new Promise แบบ assign ค่าใน p2 run เลย ไม่ต้องรอ call แบบ readFilePromise() แบบด้านบน
const p2 = new Promise((resolve, reject) => {
  fs.readFile(datFile, "utf8", (err, data) => {
    if (err) return reject(err);
    return resolve(data);
  });
});

// p2.then((x) => console.log(x));
// p2.then(console.log);
p2.then((x) => console.log(x)).catch((err) => console.log(err.code));

// return new Promise ไปเลย ไม่จำเป็นต้องเก็บใส่ตัวแปร p
// function readFilePromise() {
//   return new Promise((resolve, reject) => {
//     fs.readFile(datFile, "utf8", (err, data) => {
//       if (err) return reject(err);
//       return resolve(data);
//     });
//   });
// }
