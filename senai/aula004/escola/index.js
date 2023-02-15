const express = require("express");
const mysql = require("mysql2");

const router = require("./src/routes/routes");

const app = express();

app.use(express.json());

app.use("/", router);

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "escola",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Conectou ao MySQL!");
});

app.listen(3000);
