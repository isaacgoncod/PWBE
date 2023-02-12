const express = require("express");
const router = express.Router();

const Alunos = require("../controllers/aluno-controller");
const Professores = require("../controllers/professor-controller");

router.get("/", Alunos.teste);
router.post("/alunos", Alunos.criar);
router.get("/alunos", Alunos.listar);

router.post("/professores", Professores.criar);
router.get("/professores", Professores.listar);

module.exports = router;
