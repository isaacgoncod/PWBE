const express = require("express");
const exphbs = require("express-handlebars");
const pool = require("./db/conn");

const app = express();

app.use(express.static("public"));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/books/insertbook", function (req, res) {
  const title = req.body.title;
  const page_qty = req.body.page_qty;

  const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`;
  const data = ["title", "page_qty", title, page_qty];

  pool.query(sql, data, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
  });
});

app.get("/books", function (req, res) {
  const query = `SELECT * FROM books`;

  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }

    const books = data;

    console.log(data);

    res.render("books", { books });
  });
});

app.get("/books/:id", function (req, res) {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, function (err, data) {
    if (err) {
      console.log(err);
    }

    const book = data[0];

    console.log(data[0]);

    res.render("book", { book });
  });
});

app.get("/books/edit/:id", function (req, res) {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, function (err, data) {
    if (err) {
      console.log(err);
    }

    const book = data[0];

    console.log(data[0]);

    res.render("editbook", { book });
  });
});

app.post("/books/updatebook/:id", (req, res) => {
  const { id, title, page_qty } = req.body;

  const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
  const data = ["title", title, "page_qty", page_qty, "id", id];

  pool.query(sql, data, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM books WHERE ?? = ?`;
  const data = ["id", id];

  pool.query(sql, data, function (err) {
    console.log(err);
  });

  res.redirect("/books");
});

app.listen(3000);
