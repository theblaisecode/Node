const { error } = require("console");
const http = require("http");

const todos = [
  { id: 1, text: "Todo One" },
  { id: 2, text: "Todo Two" },
  { id: 3, text: "Todo Three" },
];

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // const { headers, url, method } = req;
  // console.log(headers, url, method);

  // This is the same
  // res.statusCode = 404;
  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("X-Powered-By", "Node.JS");

  // As this. This is just neater
  // res.writeHead(200, {
  //   "Content-Type": "application/json",
  //   "X-Powered-By": "Node.JS",
  // });

  // res.write("Hello Blaise");
  // res.write("<h1>Hello</h1>");
  // res.write("<h2>Hello again!!!</h2>");

  // console.log(req.headers.authorization);

  const { method, url } = req;
  let body = [];

  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      let status = 404;
      const response = {
        success: false,
        error: null,
        data: null,
      };

      if (method === "GET" && url === "/todos") {
        status = 200;
        response.success = true;
        response.data = todos;
      } else if (method === "POST" && url === "/todos") {
        const { id, text } = JSON.parse(body);

        if (!id || !text) {
          status = 400;
          response.error = "Please add id and text";
        } else {
          todos.push({ id, text });
          status = 201;
          response.success = true;
          response.data = todos;
        }
      }

      res.writeHead(status, {
        "Content-Type": "application/json",
        "X-Powered-By": "Node.JS",
      });

      res.end(JSON.stringify(response));
    });

  // console.log(req.headers.authorization);
  // console.log(req.headers["content-type"]);
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
