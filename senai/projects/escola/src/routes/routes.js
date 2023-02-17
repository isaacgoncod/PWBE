const express = require("express");
const router = express.Router();

const AlunoController = require("../controllers/AlunoController");

router.get("/", AlunoController.teste);
router.get("/alunos", AlunoController.listar);
router.get("/create", AlunoController.cadastrar);

module.exports = router;
