const express = require("express");
const router = express.Router();

const ImovelController = require("../controllers/imovel.controller");

router.get("/listar", ImovelController.listar);
router.get("/:info", ImovelController.buscar);
router.post("/adicionar", ImovelController.adicionar);
router.put("/atualizar", ImovelController.atualizar);
router.put("/:codigo/:status", ImovelController.alterarStatus);
router.delete("/deletar/:id", ImovelController.deletar);

module.exports = router;
