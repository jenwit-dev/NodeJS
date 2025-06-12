const path = require("path");

// console.log(__dirname);
// console.log(__filename);

let thePath = __dirname + "/go/to/test.txt";
// console.log(thePath);
// console.log(path.dirname(thePath));
// console.log(path.basename(thePath));
// console.log(path.extname(thePath));

// console.log(path.join("public", "data", "user"));

// console.log(path.dirname(__dirname));

// console.log(path.resolve()); // return working dir
// console.log(__dirname); // return working dir
// console.log(process.cwd()); // return working dir

// console.log(path.join(__dirname, "data", "user"));
// console.log(path.resolve());
// console.log(path.resolve("data", "user"));
// console.log(__dirname);
// console.log(path.join("x", "y", "z"));
// console.log(path.resolve());
// console.log(__dirname);
// console.log(process.cwd());
// console.log("xxx");

// project
//  - src
//  - dist // path01cd
//      -build.js

// console.log(path.resolve("src", "components", "../utils", "helper.js"));
// Output (Unix-like): /Users/MyUser/Projects/my-app/src/utils/helper.js
// (It processes from right to left: 'helper.js', then '../utils' which means go up one dir from 'components' to 'src', then 'components' (ignored as '../utils' changes context), then 'src', then prepends cwd)
// console.log(path.resolve("src", "components", "./utils", "helper.js"));

// console.log(path.resolve("data", "user")); // same
// console.log(path.join(__dirname, "data", "user")); // same

// console.log(
//   path.relative("/home/user/project/src", "/home/user/project/dist/build.js")
// );
// Output: ../dist/build.js
