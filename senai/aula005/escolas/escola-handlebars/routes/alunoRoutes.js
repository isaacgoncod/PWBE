const express = require("express");
const router = express.Router();

const AlunoController = require("../controllers/AlunoController");

router.get("/", AlunoController.teste);
router.get("/create", AlunoController.createAluno);
router.post("/create", AlunoController.createAlunoSave);
router.get("/read", AlunoController.readAluno);
router.get("/:ra", AlunoController.updateAluno);
router.post("/update/:ra", AlunoController.updateAlunoPost);
router.post("/delete/:ra", AlunoController.deleteAluno);

module.exports = router;
