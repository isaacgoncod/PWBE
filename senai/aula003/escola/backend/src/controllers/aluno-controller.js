const Aluno = require("../models/aluno");

var alunos = [];

const teste = (req, res) => {
  res.json("API Respondendo").end();
};

const criar = (req, res) => {
  let aluno = new Aluno(req.body.ra, req.body.nome, req.body.nascimento);
  alunos.push(aluno);

  res.status(201).end();
};

const listar = (req, res) => {
  res.status(200).json(alunos).end();
};

module.exports = {
  teste,
  criar,
  listar,
};
