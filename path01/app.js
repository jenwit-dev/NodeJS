const path = require("path");

console.log(__dirname);
console.log(__filename);

let thePath = __dirname + "/go/to/test.txt";
console.log(thePath);
console.log(path.dirname(thePath));
console.log(path.basename(thePath));
