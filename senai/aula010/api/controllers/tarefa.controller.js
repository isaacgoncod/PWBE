const pool = require("../db/conn");

const tarefaRead = (req, res) => {
  let query = `SELECT * FROM tarefa`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(400).json(err).end();
    }

    res.status(200).json({ tarefa: resp }).end();
  });
};

const tarefaCreate = (req, res) => {
  const { tarefa, data_inicio } = req.body;

  let query = `INSERT INTO tarefa VALUE (DEFAULT, '${tarefa}','${data_inicio}', NULL, 1)`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(400).json(err).end();
    }

    res.status(201).json().end();
  });
};

const tarefaUpdate = (req, res) => {
  const { id } = req.params;
  const { data_fim, status_id } = req.body;

  let query = `UPDATE tarefa SET data_fim = '${data_fim}', status_id = '${status_id}' WHERE id = ${id}`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(404).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};

const tarefaDelete = (req, res) => {
  const { id } = req.params;

  let query = `DELETE FROM tarefa WHERE id =  ${id}`;

  pool.query(query, function (err, resp) {
    if (err) {
      res.status(404).json(err).end();
    }

    res.status(202).json(resp).end();
  });
};
module.exports = {
  tarefaCreate,
  tarefaRead,
  tarefaUpdate,
  tarefaDelete,
};
