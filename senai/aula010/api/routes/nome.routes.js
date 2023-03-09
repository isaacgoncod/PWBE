const express = require("express");
const router = express.Router();

const NomeController = require("../controllers/nome.controller");

router.post("/concatenar", NomeController.concatenar);

module.exports = router;
