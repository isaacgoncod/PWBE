const express = require("express");
const router = express.Router();

const ItemController = require("../controllers/ItemController");

router.get("/", ItemController.teste);
router.post("/item/criar", ItemController.criar);
router.get("/item/listar", ItemController.listar);
router.get("/item/listar/:id", ItemController.listar);
router.put("/item/alterar", ItemController.alterar);
router.delete("/item/excluir/:id", ItemController.excluir);

module.exports = router;
