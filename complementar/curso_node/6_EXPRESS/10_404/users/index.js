const express = require("express");
const router = express.Router();

const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
  let { name, age } = req.body;

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  //leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos buscando pelo usuário: ${id}`);

  res.sendFile(`${basePath}.html`);
});

module.exports = router;
