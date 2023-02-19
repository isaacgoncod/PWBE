const conn = require("../dao/conn");

const teste = (req, res) => {
  res.json("Escola Respondendo").end();
};

const listar = (req, res) => {
  // conn.query("SELECT * FROM aluno", (result, err) => {
  //   if (err == null) {
  //     res.json(result).end();
  //   } else {
  //     res.json(err).end();
  //   }
  // });

  const query = "SELECT * FROM aluno";

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }

    res.json(data).end();
  });
};

const cadastrar = (req, res) => {
  let { ra, nome, nascimento, turma } = req.query;

  // let string = `INSERT INTO aluno VALUE ('${ra}', '${nome}', '${nascimento}', ${turma})`;

  // conn.query(string, (err, result) => {
  //   if (err == null) {
  //     res.status(201).end();
  //   } else {
  //     res.json(err).end();
  //   }
  // });

  const query = `INSERT INTO aluno (??,??,??,??) VALUE (?,?,?,?)`;
  const data = [
    "ra",
    "nome",
    "nascimento",
    "id_turma",
    ra,
    nome,
    nascimento,
    turma,
  ];

  conn.query(query, data, function (err) {
    if (err) {
      console.log(err);
    }

    res.status(201).end();
  });
};

module.exports = {
  teste,
  listar,
  cadastrar,
};
