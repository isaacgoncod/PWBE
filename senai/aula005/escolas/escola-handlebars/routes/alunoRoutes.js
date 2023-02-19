const express = require("express");
const router = express.Router();

const AlunoController = require("../controllers/AlunoController");

router.get("/", AlunoController.teste);
router.get("/read", AlunoController.listar);
router.get("/create", AlunoController.createAluno);
router.post("/create", AlunoController.createAlunoSave);

module.exports = router;
