const con = require("../database/conn");
const Funcionario = require("../models/Funcionario");

const createFuncionario = (req, res) => {
  con.query(new Funcionario(req.body).create(), function (err, result) {
    if (err) {
      res.status(500).send({ err: err }).end();
    }

    res.status(201).json(result);
  });
};

const readFuncionario = (req, res) => {
  con.query(new Funcionario(req.body).read(), function (err, result) {
    if (err) {
      res.status(500).send({ err: err }).end();
    }

    res.status(200).json(result);
  });
};

const updateFuncionario = (req, res) => {
  con.query(new Funcionario(req.body).update(), function (err, result) {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(500).send({ err: err }).end();
    }
  });
};

const delFuncionario = (req, res) => {
  con.query(new Funcionario(req.params).del(), function (err, result) {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(500).send({ err: err }).end();
    }
  });
};

module.exports = {
  readFuncionario,
  delFuncionario,
  createFuncionario,
  updateFuncionario,
};
