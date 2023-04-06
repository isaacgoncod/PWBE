const express = require("express");

const router = express.Router();

const tarefaController = require("../controllers/tarefa.controller");

router.get("/", tarefaController.readTarefa);
router.post("/create", tarefaController.createTarefa);
router.put("/update", tarefaController.updateTarefa)
router.delete("/del/:id", tarefaController.delTarefa);

module.exports = router;
