const mysql = require("mysql2");

const pool = mysql.createPool({
  localhost: "localhost",
  user: "root",
  password: "",
  database: "tarefa",
});

module.exports = pool;
