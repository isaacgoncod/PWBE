const con = require("../dao/connection");

const cadastrar = (req, res) => {
    const {data} = req.body;

    const query = `INSERT INTO pacientes VALUES (DEFAULT, '${data.nome}', '${data.data_nascimento}')`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar paciente"
            }).end();
        }else { 
            data.id = result.insertId;
            
            res.status(201).json(data.id).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM pacientes`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao listar pacientes"
            }).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}

module.exports = {
    cadastrar,
    listar,
};
