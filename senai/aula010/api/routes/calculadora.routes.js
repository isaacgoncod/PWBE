const express = require("express");
const router = express.Router();

const CalculadoraController = require("../controllers/calculadora.controller");

router.get("/calcular/:operacao", CalculadoraController.somar);

module.exports = router;
