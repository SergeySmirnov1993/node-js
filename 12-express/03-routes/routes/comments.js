const express = require("express");
const {
  getCommentHandler,
  getCommentsHandler,
  postCommentsHandler,
  deleteCommentHandler,
} = require("../controllers/comments");

const router = express.Router();

router.get("/", getCommentsHandler);
router.post("/", postCommentsHandler);
router.get("/:commentId", getCommentHandler);
router.delete("/:commentId", deleteCommentHandler);

module.exports = router;
