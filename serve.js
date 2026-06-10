const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "www");
const port = 4173;

http.createServer((req, res) => {
  const file = req.url === "/" ? "index.html" : req.url.slice(1);
  const full = path.join(root, file);
  fs.readFile(full, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const type = full.endsWith(".html") ? "text/html" : "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
}).listen(port, () => console.log(`hue-knew on http://localhost:${port}`));
