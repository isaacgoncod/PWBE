const Turma = require("../models/turma");

var turmas = [];

const criar = (req, res) => {
  let { nome, sigla } = req.body;
  let id = 1;

  if (turmas.length > 0) {
    id = turmas[turmas.length - 1].id + 1;
  }

  const turma = new Turma(id, nome, sigla);

  turmas.push(turma);
  res.status(201).end();
};

const listar = (req, res) => {
  res.status(200).json(turmas).end();
};

const buscar = (req, res) => {
  let { id } = req.params;

  turmas.forEach((turma) => {
    if (turma.id == id) {
      res.status(200).json(turma).end();
    }
  });

  res.status(404).end();
};

const atualizar = (req, res) => {
  let { nome, sigla } = req.body;
  let { id } = req.params;

  turmas.forEach((turma, index) => {
    if (turma.id == id) {
      turmas[index] = new Turma(id, nome, sigla);
      res.status(200).json(turmas[index]).end();
    }
  });

  res.status(404).end();
};

const deletar = (req, res) => {
  let { id } = req.params;

  turmas.forEach((turma, index) => {
    if (turma.id == id) {
      turmas.splice(index, 1);
    }
  });

  res.status(200).json(turmas).end();
};

const criarVarios = (req, res) => {
  let data = req.body;
  let id = 1;

  if (turmas.length > 0) {
    id = turmas[turmas.length - 1].id + 1;
  }

  data.forEach((item, index) => {
    let turma = new Turma(id, item.nome, item.sigla);

    turmas.push(turma);

    id++;
  });

  res.status(201).end();
};

module.exports = {
  criar,
  listar,
  buscar,
  atualizar,
  deletar,
  criarVarios,
};