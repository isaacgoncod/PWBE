const express = require("express");
const router = express.Router();

const ImovelController = require("../controllers/imovel.controller");

router.get("/listar", ImovelController.listar);
router.get("/:info", ImovelController.buscar);
router.post("/adicionar", ImovelController.adicionar);
router.put("/atualizar", ImovelController.atualizar);

module.exports = router;
