const express = require("express");
const router = express.Router();

const CorretorController = require("../controllers/corretor.controller");

router.get("/test", (req, res) => {
  res.send("Imobiliária api");
});

router.post("/adicionar", CorretorController.adicionar);
router.get("/listar", CorretorController.listar);
router.post("/login", CorretorController.autenticar);

module.exports = router;
