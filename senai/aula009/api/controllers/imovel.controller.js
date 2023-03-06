const pool = require("../db/conn");

const listar = (req, res) => {
  let query = `SELECT * FROM imovel`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const buscar = (req, res) => {
  const { info } = req.params;

  let query = `SELECT * FROM imovel WHERE codigo LIKE '%${info}%' OR endereco LIKE '%${info}%'`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const adicionar = (req, res) => {
  const {
    corretor_id,
    codigo,
    endereco,
    valor_venda,
    valor_aluguel,
    status_id,
  } = req.body;

  valor_venda = valor_venda != undefined ? valor_venda : 0;
  valor_aluguel = valor_aluguel != undefined ? valor_aluguel : 0;

  let query = `INSERT INTO imovel VALUE (DEFAULT, ${corretor_id}, '${codigo}', '${endereco}', ${valor_venda}, ${valor_aluguel}, ${status_id})`;

  pool.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

module.exports = {
  listar,
  buscar,
  adicionar,
};
