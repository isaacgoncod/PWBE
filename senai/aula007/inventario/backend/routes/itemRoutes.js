const express = require("express");
const router = express.Router();

const ItemController = require("../controllers/ItemController");

router.get("/", ItemController.teste);
router.post("/criar", ItemController.criar);
router.get("/listar", ItemController.listar);
router.get("/listar/:id", ItemController.listar);
router.put("/alterar", ItemController.alterar);
router.delete("/excluir/:id", ItemController.excluir);

module.exports = router;
