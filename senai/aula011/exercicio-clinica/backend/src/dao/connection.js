const mysql = require('mysql2')

const con = mysql.createConnection({
    user: 'root',
    password:"",
    host: 'localhost',
    database: 'clinica'
});

module.exports = con;