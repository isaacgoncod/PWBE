const pool = require("../db/conn");
const Book = require("../models/Book");

const createBook = (req, res) => {
  let book = new Book(req.body);

  pool.query(book.create(), function (err) {
    if (err) {
      res.status(500).json(err).end();
    }

    res.status(201).end();
  });
};

const readBook = (req, res) => {
  let book = new Book(req.params);

  pool.query(book.read(), function (err, result) {
    if (err) {
      res.status(404).end();
    }

    res.json(result).end();
  });
};

const updateBook = (req, res) => {
  let book = new Book(req.body);

  pool.query(book.update(), function (err, result) {
    if (err) res.status(404).end();

    if (result.affectedRows > 0) res.status(204).end();
  });
};

const deleteBook = (req, res) => {
  let book = new Book(req.params);

  pool.query(book.delete(), function (err, result) {
    if (err) res.status(404).end();

    if (result.affectedRows > 0) res.status(204).end();
  });
};

module.exports = {
  createBook,
  readBook,
  updateBook,
  deleteBook,
};
