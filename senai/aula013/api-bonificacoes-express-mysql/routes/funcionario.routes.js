const { Router } = require("express");
const router = Router();

const funcionarioController = require("../controllers/funcionario.controller");

router.get("/listar", funcionarioController.readFuncionario);
router.post("/create", funcionarioController.createFuncionario);
router.put("/update", funcionarioController.updateFuncionario);
router.delete("/:matricula", funcionarioController.delFuncionario);

module.exports = router;
