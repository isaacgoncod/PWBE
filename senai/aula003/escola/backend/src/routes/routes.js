const express = require("express");

const router = express.Router();

const aluno = require("../controllers/aluno-controller");

router.get("/", aluno.teste);
router.get("/alunos", aluno.listar);
router.post("/aluno", aluno.criar);

module.exports = router;
