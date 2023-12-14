const getCommentHandler = (req, res) => {
  res.send(`Get comment route. Params ${JSON.stringify(req.params)}`);
};
const getCommentsHandler = (req, res) => {
  res.send("Get comments route");
};
const postCommentsHandler = (req, res) => {
  res.send("Post comments route");
};
const deleteCommentHandler = (req, res) => {
  res.send(`Delete comments route. Params ${JSON.stringify(req.params)}`);
};

module.exports = {
  getCommentHandler,
  getCommentsHandler,
  postCommentsHandler,
  deleteCommentHandler,
};
