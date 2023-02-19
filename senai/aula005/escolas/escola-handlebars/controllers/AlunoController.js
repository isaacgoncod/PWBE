const pool = require("../dao/conn");

const teste = (req, res) => {
  res.json("Escola Respondendo").end();
};

const listar = (req, res) => {
  const query = "SELECT * FROM aluno";

  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }

    const alunos = data;

    console.log(alunos);

    res.render("aluno/read", { alunos });
  });
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

module.exports = {
  teste,
  listar,
  createAluno,
  createAlunoSave,
};
