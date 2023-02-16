const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql2");

const app = express();

app.use("/public", express.static(__dirname + "/public"));

// define a extensão e a instância do handlebars com o modelo que será interpretado o código
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
// define qual o template a ser utilizado
app.set("view engine", "hbs");

app.use(
  express.urlencoded({
    extended: true,
  })
);
{
  extname: ".hbs";
}

app.use(express.json());

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/books/insertbook", function (req, res) {
  const title = req.body.title;
  const page_qty = req.body.page_qty;

  const query = `INSERT INTO books (title, page_qty) VALUES ('${title}', ${page_qty})`;

  conn.query(query, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
  });
});

app.get("/books", function (req, res) {
  const query = `SELECT * FROM books`;

  conn.query(query, function (err, data) {
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

  const query = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(query, function (err, data) {
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

  const query = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(query, function (err, data) {
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

  const sql = `UPDATE books SET title = '${title}', page_qty = '${page_qty}' WHERE id = ${id}`;

  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM books WHERE id = ${id}`;

  conn.query(sql, function (err) {
    console.log(err);
  });

  res.redirect("/books");
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySQL_2002",
  database: "nodemysql2",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Conectado ao MySQL!");

  app.listen(3000);
});
