const mysql = require("mysql2");

try {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "MySQL_2002",
    database: "inventario",
  });

  console.log("Conectamos ao MySQL!");

  module.exports = pool;
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}
