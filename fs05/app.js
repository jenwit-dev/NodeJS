// {
//   x: 10,
//   y: 20,
//   sum: 30,
// };

const fs = require("fs/promises");

fs.readFile("./input.json", "utf8").then((result) => {
  console.log(result);
  console.log(typeof result);
  const obj = JSON.parse(result);
  const { x, y } = obj;
  const sum = x + y;
  fs.writeFile("./output.json", JSON.stringify({ ...obj, sum: sum })).then(
    () => {
      console.log("written successfully");
    }
  );
});
