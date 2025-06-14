const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url);
  console.log(req.method);
  if (req.url === "/todo") {
    // res.statusCode = 222;
    // res.setHeader("Content-Type", "text/plain");
    // res.setHeader("Content-Type", "text/html");
    // res.setHeader("Content-Type", "application/json");
    // res.setHeader("We-Are", "the champion yeah");

    // res.writeHead = res.statusCode + res.setHeader หลายตัว
    // same as above code
    res.writeHead(222, {
      "Content-Type": "text/html",
      "We-Are": "the champion yeah",
    });

    res.write("<h1>Hello</h1>");
    res.write(todoHTML);
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello</h1>");
    res.write("<p>123</p>");
    res.end();
  }
});
server.listen(8000);

const todo = ["Go Home", "Go Learn", "Go Lunch"];
const todoHTML = todo.map((el) => `<h1>${el}</h1>`).join("");

// server.on("request", (req, res) => {
//   console.log(req.url);
//   //   console.log(req.method);
//   if (req.url === "/todo") {
//     // res.statusCode = 222;
//     // res.setHeader("Content-Type", "text/plain");
//     // res.setHeader("Content-Type", "text/html");
//     // res.setHeader("Content-Type", "application/json");
//     // res.setHeader("We-Are", "the champion yeah");
//     res.writeHead(404, {
//       // "Content-Type": "application/json",
//       "Content-Type": "text/html",
//       "We-Are": "the World",
//     });
//     res.write("<h1>Hello</h1>");
//     res.write(todoHTML);
//     res.end();
//   } else {
//     res.statusCode = 404;
//     res.setHeader("Content-Type", "text/html");
//     res.write("<h1>Hello</h1>");
//     res.write("<p>123</p>");
//     res.end();
//   }
// });
