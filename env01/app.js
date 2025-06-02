require("dotenv").config();

// console.log(process.env);
console.log(process.env.API_KEY);
console.log(process.env.TITLE);
console.log(process.env.LUCKY_NUM);
console.log(process.env.LUCKY_NUM + 1);
console.log(process.env.ADMIN);
console.log(typeof process.env.ADMIN);
console.log(JSON.parse(process.env.ADMIN));
console.log(JSON.parse(process.env.ADMIN).name);
console.log(+process.env.LUCKY_NUM + 1);
