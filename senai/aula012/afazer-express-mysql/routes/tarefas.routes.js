const express = require("express");

const router = express.Router();

const tarefaController = require("../controllers/tarefa.controller");

router.get("/", tarefaController.app);

module.exports = router;
