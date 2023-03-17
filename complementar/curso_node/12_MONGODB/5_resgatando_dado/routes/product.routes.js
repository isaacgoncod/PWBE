const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product.controller");

router.post("/create", ProductController.createProductPost);
router.get("/create", ProductController.createProduct);
router.get("/:id", ProductController.getProduct);
router.get("/", ProductController.showProducts);

module.exports = router;
