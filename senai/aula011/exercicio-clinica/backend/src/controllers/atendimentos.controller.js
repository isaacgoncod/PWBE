const con = require("../dao/connection");

const cadastrar = (req, res) => {
    let data = req.body;

    const query = `INSERT INTO atendimentos VALUES (DEFAULT, '${data.data}', ${data.medico_id}, ${data.paciente_id})`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar atendimento"
            }).end();
        }else {
            data.id = result.insertId;
            
            res.status(201).json(data).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM atendimentos`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao listar atendimentos"
            }).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}

const alterar = (req, res) => {
    const { id } = req.params;

    const { data } = req.body;

    const query = `UPDATE atendimentos SET data = '${data}' WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao alterar atendimento"
            }).end();
        }else {
            res.status(202).json({
                message: "Atendimento alterado com sucesso"
            }).end();
        }
    });
}

const remover = (req, res) => {
    const {id} = req.params
    
    const query = `DELETE FROM atendimentos WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao alterar atendimento"
            }).end();
        }else {
            res.status(204).json({
                message: "Atendimento removido com sucesso"
            }).end();
        }
    });
}

module.exports = {
    cadastrar,
    alterar,
    remover,
    listar,
}