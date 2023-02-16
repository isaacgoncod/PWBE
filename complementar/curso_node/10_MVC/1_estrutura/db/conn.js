const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySQL_2002",
  database: "nodemvc",
});

pool.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Conectado ao MySQL!");
});

module.exports = pool;
