// dotenv não funciona com mysql2
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  timezone: process.env.TMZ,
});

module.exports = con;
