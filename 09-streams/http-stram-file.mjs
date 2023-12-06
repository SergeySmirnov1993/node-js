import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const filePath = "./09-streams/files/index.html";
    const readStream = fs.createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    readStream.pipe(res);
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
