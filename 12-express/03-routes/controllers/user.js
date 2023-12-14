const getUsersHandler = (req, res) => {
  res.send("Get users route");
};
const postUsersHandler = (req, res) => {
  res.send("Post users route");
};
const getUserHendler = (req, res) => {
  res.send(`Get User route. Params ${JSON.stringify(req.params)}`);
};

module.exports = {
  getUsersHandler,
  postUsersHandler,
  getUserHendler,
};
