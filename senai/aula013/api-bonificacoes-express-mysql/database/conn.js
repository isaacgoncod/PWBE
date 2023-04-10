const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "MySQL_2002",
  database: "bonificacoes",
});

module.exports = con;
