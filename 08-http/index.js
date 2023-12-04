const htttp = require("http");
const {
  getHtml,
  getText,
  getComments,
  postComment,
  get404,
} = require("./handlers");

const PORT = 3000;

const server = htttp.createServer((req, res) => {
  if (req.url === "/http" && req.method === "GET") {
    return getHtml(req, res);
  }
  if (req.url === "/text" && req.method === "GET") {
    return getText(req, res);
  }
  if (req.url === "/comments" && req.method === "GET") {
    return getComments(req, res);
  }
  if (req.url === "/comments" && req.method === "POST") {
    return postComment(req, res);
  }
  return get404(req, res);
});

server.listen(PORT, () => {
  console.log("Server was launched on port", PORT);
});
