const con = require("../database/conn");
const Funcionario = require("../models/Funcionario");

const createFuncionario = (req, res) => {
  con.query(new Funcionario(req.body).create(), (err, result) => {
    if (err == null) {
      res.status(201).json({ message: result });
    } else {
      res.send("Erro:" + err).end();
    }
  });
};

const readFuncionario = (req, res) => {
  con.query(new Funcionario(req.body).read(), (err, result) => {
    if (err == null) {
      res.status(200).json({ Funcionarios: result });
    } else {
      res
        .status(404)
        .send("Erro:" + err)
        .end();
    }
  });
};

const updateFuncionario = (req, res) => {
  con.query(new Funcionario(req.body).update(), (err, result) => {
    if (result.affectedRows > 0) {
      res.status(202).json({ message: result });
    } else {
      res
        .status(404)
        .send("Erro:" + err)
        .end();
    }
  });
};

const delFuncionario = (req, res) => {
  con.query(new Funcionario(req.params).del(), (err, result) => {
    if (result.affectedRows > 0) {
      res.status(202).json({ message: result });
    } else {
      res
        .status(404)
        .send("Erro:" + err)
        .end();
    }
  });
};

module.exports = {
  readFuncionario,
  delFuncionario,
  createFuncionario,
  updateFuncionario,
};
