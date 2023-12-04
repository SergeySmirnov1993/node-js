const comments = require("./data");

function getHtml(req, res) {
  res.statusCode = 200;
  res.setHeader("Constent-Type", "text/html");
  res.write("<html><body><div>");
  res.write("<h1>Hello from the Node.js</h1>");
  res.write("</div></body></html>");
  res.end();
}

function getText(req, res) {
  res.statusCode = 200;
  res.setHeader("Constent-Type", "text/plain");
  res.write("This is plain text");
  res.end();
}

function getComments(req, res) {
  res.statusCode = 200;
  res.setHeader("Constent-Type", "application/json");
  res.end(JSON.stringify(comments));
}

function postComment(req, res) {
  res.setHeader("Constent-Type", "text/plain");

  if (req.headers["content-type"] === "application/json") {
    let commentJSON = "";
    req.on("data", (chunk) => (commentJSON += chunk));
    req.on("end", () => {
      try {
        comments.push(JSON.parse(commentJSON));
        res.statusCode = 200;
        res.end("Comment data was recived");
      } catch {
        res.statusCode = 400;
        res.end("Invalid JSON");
      }
    });
  } else {
    res.statusCode = 400;
    res.end("Data must be in the JSON format");
  }
}

function get404(req, res) {
  res.statusCode = 404;
  res.setHeader("Constent-Type", "text/html");
  res.write("<h1>Page not found!</h1>");
  res.end();
}

module.exports = {
  getHtml,
  getText,
  getComments,
  postComment,
  get404,
};
