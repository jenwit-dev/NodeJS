const http = require("http");
const server = http.createServer();
server.listen(8000);

const todo = "Go Home";

server.on("request", (req, res) => {
  console.log(req.url);
  //   console.log(req.method);
  if (req.url === "/todo") {
    res.statusCode = 222;
    //   res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello</h1>");
    res.write(`<p>${todo}</p>`);
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello</h1>");
    res.write("<p>123</p>");
    res.end();
  }
});
