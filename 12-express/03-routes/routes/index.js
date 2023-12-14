const express = require("express");
const commentsRouter = require("./comments");
const usersRouter = require("./users");
const { getRootHandler } = require("../controllers/root");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/comments", commentsRouter);
router.use("/", getRootHandler);

module.exports = router;
