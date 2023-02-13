const express = require("express");
const router = express.Router();

const Alunos = require("../controllers/aluno-controller");
const Professores = require("../controllers/professor-controller");
const Turmas = require("../controllers/turma-controller");

router.get("/", Alunos.teste);

router.get("/alunos", Alunos.listar);
router.get("/aluno/:ra", Alunos.buscar);
router.post("/aluno", Alunos.criar);
router.post("/alunos", Alunos.criarVarios);
router.put("/aluno/:ra", Alunos.atualizar);
router.delete("/aluno/:ra", Alunos.deletar);

router.get("/professores", Professores.listar);
router.get("/professor/:id", Professores.buscar);
router.post("/professor", Professores.criar);
router.post("/professores", Professores.criarVarios);
router.put("/professor/:id", Professores.atualizar);
router.delete("/professor/:id", Professores.deletar);

router.get("/turmas", Turmas.listar);
router.get("/turma/:id", Turmas.buscar);
router.post("/turma", Turmas.criar);
router.post("/turmas", Turmas.criarVarios);
router.put("/turma/:id", Turmas.atualizar);
router.delete("/turma/:id", Turmas.deletar);

module.exports = router;
