const con = require("../dao/connection");

const cadastrar = (req, res) => {
  let data = req.body

    const query = `INSERT INTO especialidades VALUES (DEFAULT, '${data.nome}')`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar especialidade"
            }).end();
        }else {
            data.id = result.insertId;
            
            res.status(201).json({especialidades_id:data.id}).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM especialidades`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao listar especialidades"
            }).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}

module.exports = {
    cadastrar,
    listar
}