const express = require("express");

const Especialidades = require("../controllers/especialidades.controller");

const router = express.Router();

router.post("/especialidade", Especialidades.cadastrar);
router.get("/especialidades", Especialidades.listar);

module.exports = router;
