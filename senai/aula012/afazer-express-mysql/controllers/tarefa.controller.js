const con = require("../database/conn");
const Tarefa = require("../models/Tarefa");

const createTarefa = (req, res) => {
  con.query(new Tarefa(req.body).create(), (err, result) => {
    if (err == null) {
      res.status(201).redirect("/");
    } else {
      res.send("Erro:" + err).end();
    }
  });
};

const readTarefa = (req, res) => {
  con.query(new Tarefa(req.body).read(), (err, result) => {
    if (err == null) {
      res
        .status(200)
        .render("index", { titulo: "Tarefas a Fazer", dados: result });
    } else {
      res
        .status(404)
        .send("Erro:" + err)
        .end();
    }
  });
};

const updateTarefa = (req, res) => {
  con.query(new Tarefa(req.params).update(), (err, result) => {
    if (result.affectedRows > 0) res.status(202).redirect("/");
    else
      res
        .status(404)
        .send("Erro:" + err)
        .end();
  });
};

const delTarefa = (req, res) => {
  con.query(new Tarefa(req.params).del(), (err, result) => {
    if (result.affectedRows > 0) res.status(202).redirect("/");
    else
      res
        .status(404)
        .send("Erro:" + err)
        .end();
  });
};

module.exports = {
  readTarefa,
  delTarefa,
  createTarefa,
  updateTarefa,
};
