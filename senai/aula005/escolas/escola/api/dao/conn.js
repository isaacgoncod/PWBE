const mysql = require("mysql2");

const conn = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "MySQL_2002",
  database: "escola",
});

module.exports = conn;
