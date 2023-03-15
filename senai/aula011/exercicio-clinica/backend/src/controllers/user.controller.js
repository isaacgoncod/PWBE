const conn = require("../dao/connection");
const User = require("../models/User");

const addUser = (req, res) => {
  let user = new User(req.body);

  conn.query(user.add(), function (err, resp) {
    if (err) {
      let { sqlMessage, sqlState } = err;

      res.status(400).json({ sqlMessage, sqlState }).end();
    }

    res.status(201).json(resp).end();
  });
};

const readUser = (req, res) => {
  let user = new User(req.body);

  conn.query(user.read(), function (err, resp) {
    if (err) {
      console.log(err);
      res.status(400).json(err).end();
    }

    res.status(200).json(resp).end();
  });
};

const authUser = (req, res) => {
  let user = new User(req.body);

  conn.query(user.auth(), function (err, resp) {
    if (err) {
      res.status(401).json(err).end();
    }
    if (resp.length == 0) {
      res.status(401).json({ msg: "Matricula ou Senha Inválidos" }).end();
    }

    let userPass = resp[0];

    delete userPass.senha;

    res.status(200).json(userPass).end();
  });
};

const deleteUser = (req, res) => {
  let user = new User(req.params);

  conn.query(user.delete(), function (err, resp) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(204).json(resp).end();
  });
};

module.exports = {
  addUser,
  readUser,
  authUser,
  deleteUser,
};
