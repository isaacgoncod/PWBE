const express = require("express");
const router = express.Router();

const ImovelController = require("../controllers/imovel.controller");

router.get("/listar", ImovelController.listar);
router.get("/:info", ImovelController.buscar);
router.get("/adicionar", ImovelController.adicionar);

module.exports = router;
