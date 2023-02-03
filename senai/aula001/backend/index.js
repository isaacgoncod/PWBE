//Importações
const express = require("express");

//Corpo
const raiz = (req, res) => {
  res.send("Back End Ativo!");
};

//Configuração HTTP
const app = express();
app.get("/", raiz);
app.get("/interacao", (req, res) => {
  let nome = req.query.nome;
  let idade = req.query.idade;
  res.send(`Olá ${nome}, você tem ${idade} anos`);
});

//Teste no console
app.listen(3000, () => {
  console.log("Respondendo na porta 3000.");
});
