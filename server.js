const http = require("http");

const listener = (req, res) => {
  //set headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "NodeJS");

  //handling request
  const { method, url } = req;

  if (url === "/") {
    //todo: if url == /
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: "Ini adalah homepage",
        })
      );
    } else {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else if (url === "/about") {
    //todo: if url == /about
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: "Ini adalah about page",
        })
      );
    } else if (method === "POST") {
      let body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            message: `Halo ${name}! ini adalah halaman about`,
          })
        );
      });
    } else {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else {
    //todo: if url!= /about && url!= /
    res.statusCode = 404;

    res.end(
      JSON.stringify({
        message: `Halaman tidak ditemukan!`,
      })
    );
  }
};

const server = http.createServer(listener);

const port = 3000;
const host = "127.0.0.1";

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
