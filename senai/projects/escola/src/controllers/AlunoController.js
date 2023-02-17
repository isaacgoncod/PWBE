const conn = require("../dao/conn");

const teste = (req, res) => {
  res.json("Escola Respondendo").end();
};
const listar = (req, res) => {
  conn.query("SELECT * FROM aluno", (result, err) => {
    if (err == null) {
      res.json(result).end();
    } else {
      res.json(err).end();
    }
  });
};

const cadastrar = (req, res) => {
  let { ra, nome, nascimento, turma } = req.query;

  let string = `INSERT INTO aluno VALUE ('${ra}', '${nome}', '${nascimento}', ${turma})`;

  conn.query(string, (err, result) => {
    if (err == null) {
      res.status(201).end();
    } else {
      res.json(err).end();
    }
  });

  res.redirect("/alunos");
};

module.exports = {
  teste,
  listar,
  cadastrar,
};
