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

// Promise style
fs.readFile("./input.json", "utf8")
  .then((result) => {
    const obj = JSON.parse(result);
    const { x, y } = obj;
    obj.sum = x + y;
    return JSON.stringify(obj);
  })
  .then((str) => {
    return fs.writeFile("output01.json", str);
    // return promise ตัวมันเองไปเลย
  })
  .then(() => console.log("written successfully"))
  .catch((err) => console.log(err));

// Async Await style
async function run() {
  try {
    const rs_obj = JSON.parse(await fs.readFile("./input.json", "utf8"));
    rs_obj.sum = rs_obj.x + rs_obj.y;
    await fs.writeFile("./output02.json", JSON.stringify(rs_obj));
  } catch (err) {
    console.log(err);
  }
}

run();
