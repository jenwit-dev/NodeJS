require("dotenv").config();
const http = require("http");
const url = require("url");
const querystring = require("querystring");

const data = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "JS" },
];

function httpHandler(req, res) {
  // console.log(req.headers);
  // console.log(req.url);
  // console.log(req.method);
  // ==============================
  // #1 else if (conditions หลายอันซ้อนกัน)
  // Condition 1
  //  Condition 2
  //    else
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    // res.write(JSON.stringify(data[0]));
    res.write(JSON.stringify({ msg: "Welcome" }));
    return res.end();
  } else if (req.url === "/todo") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(data));
    return res.end();
  } else if (req.url.match(/\/todo\/\d+/g)) {
    // console.log(req.url);
    let index = +req.url.split("/")[2];
    // console.log(index);
    res.writeHead(200, { "content-type": "application/json" });
    if (index > data.length - 1 || index < 0)
      return res.end(JSON.stringify({ msg: "no data" }));
    res.write(JSON.stringify({ msg: data[index] }));
    return res.end();
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.write(JSON.stringify({ msg: "Not found" }));
    return res.end();
  }

  // ==============================
  // #2 use only if(s)
  // Condition 1
  // Condition 2
  // if (req.url === "/") {
  //   res.writeHead(200, { "content-type": "application/json" });
  //   res.write(JSON.stringify({ msg: "Welcome" }));
  //   return res.end();
  // }
  // if (req.url === "/todo") {
  //   res.writeHead(200, { "content-type": "application/json" });
  //   res.write(JSON.stringify(data));
  //   return res.end();
  // }
  // res.writeHead(404, { "content-type": "application/json" });
  // res.write(JSON.stringify({ msg: "Not found" }));
  // return res.end();
}

const server = http.createServer(httpHandler);

const port = process.env.PORT || 8000;
server.listen(port, () => console.log("server ready on port : ", port));
