const pool = require("../db/conn");

const adicionar = (req, res) => {
  const { nome, matricula, senha, salario } = req.body;

  let query = `INSERT INTO corretor VALUE (DEFAULT, '${nome}', '${matricula}', '${senha}', ${salario})`;

  pool.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const listar = (req, res) => {
  let query = `SELECT * FROM corretor`;

  pool.query(query, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const autenticar = (req, res) => {
  const { matricula, senha } = req.body;

  let query = `SELECT * FROM corretor WHERE matricula = '${matricula}' AND senha = '${senha}'`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(401).json(err).end();
    }
    if (resp.length == 0) {
      res.status(401).json({ msg: "Matricula ou Senha Inválidos" }).end();
    }

    let corretor = resp[0];

    delete corretor.senha;

    res.status(200).json(corretor).end();
  });
};

module.exports = {
  adicionar,
  listar,
  autenticar,
};
