const express = require("express");
const postsController = require("./controllers/postsControllers");

const router = express.Router();

router.get("/", (req, res) =>
  res.status(200).send("Hello World, simple router test"),
);

router.get("/post/:id", postsController.getData);

module.exports = router;
