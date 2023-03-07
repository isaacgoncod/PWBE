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
  let { corretor_id, codigo, endereco, valor_venda, valor_aluguel } = req.body;

  valor_venda = valor_venda != undefined ? valor_venda : 0;
  valor_aluguel = valor_aluguel != undefined ? valor_aluguel : 0;

  if (valor_venda == 0 && valor_aluguel == 0) {
    res
      .status(400)
      .json({ msg: "Necessario inserir um valor de venda ou aluguel" });
  }

  let query = `INSERT INTO imovel VALUE (DEFAULT, ${corretor_id}, '${codigo}', '${endereco}', ${valor_venda}, ${valor_aluguel}, 1)`;

  pool.query(query, function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const atualizar = (req, res) => {
  const {
    id,
    corretor_id,
    codigo,
    endereco,
    valor_venda,
    valor_aluguel,
    status_id,
  } = req.body;

  let query = `UPDATE imovel SET corretor_id = ${corretor_id}, codigo = '${codigo}', endereco = '${endereco}', valor_venda = ${valor_venda}, valor_aluguel = ${valor_aluguel}, status_id = ${status_id} WHERE id = ${id}`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(404).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const alterarStatus = (req, res) => {
  const { codigo, status } = req.params;

  let query = `UPDATE imovel SET status_id = ${status} WHERE codigo = '${codigo}'`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(404).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const deletar = (req, res) => {
  const { id } = req.params;

  let query = `DELETE FROM imovel WHERE id = ${id}`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(404).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

module.exports = {
  listar,
  buscar,
  adicionar,
  atualizar,
  alterarStatus,
  deletar,
};
