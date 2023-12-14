const express = require("express");

const app = express();

const firstHandle = (req, res, next) => {
  console.log("First handler");
  next();
};
const secondHandle = (req, res) => res.send("Second handler");

app.get("/", firstHandle, secondHandle);

app.listen(5000, () => console.log("Server was started on port 5000"));
