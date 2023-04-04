const con = require("../database/conn");
const Tarefa = require("../models/Tarefa");

const app = (req, res) => {
  con.query(new Tarefa(req.body).read(), (err, result) => {
    if (err == null) {
      res.render("index", { titulo: "Tarefas a Fazer", dados: result });
    } else {
      res.send("Erro:" + err).end();
    }
  });
};

module.exports = {
  app,
};
