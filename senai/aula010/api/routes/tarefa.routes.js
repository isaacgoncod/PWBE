const express = require("express");
const router = express.Router();

const TarefaController = require("../controllers/tarefa.controller");

router.get("/tarefas", TarefaController.tarefaRead);
router.post("/nova", TarefaController.tarefaCreate);
router.put("/alterar/:id", TarefaController.tarefaUpdate);
router.delete("/deletar/:id", TarefaController.tarefaDelete);

module.exports = router;
