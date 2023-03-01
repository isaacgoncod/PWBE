const pool = require("../db/conn");

const adicionar = (req, res) => {
  const { nome, matricula, senha, salario } = req.body;

  let query = `INSERT INTO corretor VALUE (DEFAULT, '${nome}', '${matricula}', '${senha}', ${salario})`;

  pool.query(query, function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
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
module.exports = {
  adicionar,
  listar,
};
