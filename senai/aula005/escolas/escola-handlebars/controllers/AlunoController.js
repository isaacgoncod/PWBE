const pool = require("../dao/conn");

const teste = (req, res) => {
  res.json("Escola Respondendo").end();
};

const createAluno = (req, res) => {
  res.render("aluno/create");
};

const createAlunoSave = (req, res) => {
  let { ra, nome, nascimento, id_turma } = req.body;

  const query = `INSERT INTO aluno (??,??,??,??) VALUE (?,?,?,?)`;
  const data = [
    "ra",
    "nome",
    "nascimento",
    "id_turma",
    ra,
    nome,
    nascimento,
    id_turma,
  ];

  pool.query(query, data, function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect("/alunos/create");
  });
};
const readAluno = (req, res) => {
  const query = "SELECT * FROM aluno";

  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }

    const alunos = data;

    res.render("aluno/read", { alunos });
  });
};

const updateAluno = (req, res) => {
  const ra = req.params.ra;

  const query = `SELECT * FROM aluno WHERE ?? = ?`;
  const data = ["ra", ra];

  pool.query(query, data, function (err, data) {
    if (err) {
      console.log(err);
    }

    const aluno = data[0];

    res.render("aluno/edit", { aluno });
  });
};

const updateAlunoPost = (req, res) => {
  const { ra, nome, nascimento, id_turma } = req.body;

  const query = `UPDATE aluno SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?`;
  const data = [
    "nome",
    nome,
    "nascimento",
    nascimento,
    "id_turma",
    id_turma,
    "ra",
    ra,
  ];

  pool.query(query, data, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/alunos/read");
  });
};

const deleteAluno = (req, res) => {
  const ra = req.params.ra;

  const query = `DELETE FROM aluno WHERE ?? = ?`;
  const data = ["ra", ra];

  pool.query(query, data, function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect("/alunos/read");
  });
};

module.exports = {
  teste,
  createAluno,
  createAlunoSave,
  readAluno,
  updateAluno,
  updateAlunoPost,
  deleteAluno,
};
