const express = require("express");
const router = express.Router();

const BookController = require("../controllers/BookController");

router.get("/test", (req, res) => {
  res.send("Book respondendo");
});

module.exports = router;
