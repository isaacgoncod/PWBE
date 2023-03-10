const express = require("express");

const router = express.Router();

const aluno = require("../controllers/aluno-controller");
const professor = require("../controllers/professor-controller");

router.get("/alunos", aluno.listar);
router.post("/aluno", aluno.criar);
router.put("/aluno", aluno.atualizar);
router.delete("/aluno", aluno.deletar);

router.get("/professores", professor.listar);
router.post("/professor", professor.criar);
router.put("/professor", professor.atualizar);
router.delete("/professor", professor.deletar);

module.exports = router;
