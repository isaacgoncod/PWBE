const express = require("express");
const router = express.Router();

const CalculadoraController = require("../controllers/calculadora.controller");

router.get("/calcular/:operacao", CalculadoraController.somar);
router.get("/calcular/:operacao", CalculadoraController.subtrair);
router.get("/calcular/:operacao", CalculadoraController.multiplicar);
router.get("/calcular/:operacao", CalculadoraController.dividir);

module.exports = router;
