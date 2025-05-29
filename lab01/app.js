const os = require("os");

// console.log(os.cpus());
// console.log(os.cpus().length);

// const fake_speed = os.cpus().map((el) => el.speed * 2);
// console.log(fake_speed);
// console.log(
//   os.cpus().reduce((acc, obj) => {
//     let newObj = { ...obj };
//     newObj.speed = newObj.speed * 2;
//     acc.push(newObj);
//     return acc;
//   }, [])
// );

// Review Object
// const user = {
//   name: "John",
//   age: 30,
//   isMarried: false,
//   birthDate: "1-Jan-2011",
// };

// for (let key in user) {
//   console.log(user[key]);
// }

// for (let key in user) {
//   console.log(user.key);
// }

// const newUser = { ...user };
// newUser.name = "Jim";
// newUser.age = 99;
// delete newUser.birthDate;
// newUser.job = "dev";
// console.log(newUser);
