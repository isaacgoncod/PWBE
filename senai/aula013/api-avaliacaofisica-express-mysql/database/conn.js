const mysql = require("mysql2");

const con = mysql.createConnection({
  host: process.env.HOST || "localhost",
  database: process.env.DATABASE || "avaliacao_fisica",
  user: process.env.USER || "root",
  // password: process.env.PASSWORD || "",
  // timezone: process.env.TMZ || "utc",
});

module.exports = con;