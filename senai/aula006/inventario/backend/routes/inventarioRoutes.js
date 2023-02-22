const express = require("express");
const router = express.Router();

const InventarioController = require("../controllers/InventarioController");

router.get("/test", InventarioController.test);
router.get("/read", InventarioController.readItem);
router.post("/create", InventarioController.createItem);
router.delete("/delete", InventarioController.deleteItem);

module.exports = router;
