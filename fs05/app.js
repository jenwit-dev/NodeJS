// {
//   x: 10,
//   y: 20,
//   sum: 30,
// };

const fs = require("fs/promises");

// Promise Hell
// fs.readFile("./input.json", "utf8").then((result) => {
//   console.log(result);
//   console.log(typeof result);
//   const obj = JSON.parse(result);
//   const { x, y } = obj;
//   const sum = x + y;
//   fs.writeFile("./output.json", JSON.stringify({ ...obj, sum: sum })).then(
//     () => {
//       console.log("written successfully");
//     }
//   );
// });

fs.readFile("./input.json", "utf8")
  .then((res) => {
    const obj = JSON.parse(res);
    const { x, y } = obj;
    obj.sum = x + y;
    return JSON.stringify(obj);
  })
  .then((obj) => {
    fs.writeFile("output02.json", obj);
  });
