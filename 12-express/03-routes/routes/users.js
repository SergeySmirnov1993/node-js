const express = require("express");
const {
  getUsersHandler,
  postUsersHandler,
  getUserHendler,
} = require("../controllers/user");

const router = express.Router();

router.get("/", getUsersHandler);
router.post("/", postUsersHandler);
router.get("/:userId", getUserHendler);

module.exports = router;
