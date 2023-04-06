const { Router } = require("express");
const router = Router();

const pacienteController = require("../controllers/paciente.controller");

router.get("/listar", pacienteController.readPaciente);
router.post("/create", pacienteController.createPaciente);
router.put("/update", pacienteController.updatePaciente);
router.delete("/:id", pacienteController.delPaciente);

module.exports = router;
