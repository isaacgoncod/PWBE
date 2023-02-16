const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "MySQL_2002",
  database: "nodemysql2",
});

module.exports = pool;
