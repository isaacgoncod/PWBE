const mysql = require("mysql2");

try {
  const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "inventario",
  });

  console.log("Conectamos ao MySQL!");

  module.exports = pool;
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}
