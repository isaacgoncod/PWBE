const con = require("../dao/connection");

const cadastrar = (req, res) => {
    let data = req.body;

    const query = `INSERT INTO medicos VALUES (DEFAULT, '${data.nome}', ${data.especialidade_id})`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar medico"
            }).end();
        }else {
            data.id = result.insertId;
            
            res.status(201).json(data).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT m.id, m.nome, e.nome as especialidade FROM medicos m
                    INNER JOIN especialidades e
                    ON e.id = m.especialidade_id`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao listar medicos"
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