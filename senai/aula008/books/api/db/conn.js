const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "MySQL_2002",
  database: "biblioteca",
});

module.exports = pool;
