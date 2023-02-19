const express = require("express");
const router = express.Router();

const AlunoController = require("../controllers/AlunoController");

router.get("/teste", AlunoController.teste);
router.get("/listar", AlunoController.listar);
router.get("/create", AlunoController.cadastrar);

module.exports = router;
