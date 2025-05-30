const cowsay = require("cowsay");
const chalk = require("chalk");

// console.log(chalk.blue("Hello world!"));
// console.log(
//   chalk.blue(
//     cowsay.say({
//       text: "CC15",
//       e: "00 00",
//       T: "X",
//     })
//   )
// );
console.log(
  chalk.magenta(
    cowsay.say({
      text: "CC15",
      e: "00 00",
      T: "X",
      r: true,
    })
  )
);
