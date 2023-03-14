const mysql = require('mysql2')

const con = mysql.createConnection({
    user: 'root',
    password:"MySQL_2002",
    host: 'localhost',
    database: 'clinica'
});

module.exports = con;