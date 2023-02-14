const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql2");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/books/insertbook", (req, res) => {
  const { title, pageQty } = req.body;

  const sql = `INSERT INTO books (title, page_qty) VALUES ('${title}', '${pageQty}')`;

  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
  });
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

  console.log("Conectou ao MySQL!");

  app.listen(3000);
});
