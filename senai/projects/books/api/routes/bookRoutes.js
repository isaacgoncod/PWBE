const express = require("express");
const router = express.Router();

const BookController = require("../controllers/BookController");

router.get("/test", (req, res) => {
  res.send("Book respondendo");
});

router.post("/create", BookController.createBook);
router.get("/read", BookController.readBook);
router.get("/read/:id", BookController.readBook);
router.put("/update", BookController.updateBook);
router.delete("/delete/:id", BookController.deleteBook);

module.exports = router;
