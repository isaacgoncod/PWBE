const express = require("express");

const Pacientes = require("../controllers/pacientes.controller");

const router = express.Router();

router.post("/paciente", Pacientes.cadastrar);
router.get("/pacientes", Pacientes.listar);

module.exports = router;
