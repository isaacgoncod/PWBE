const pool = require('../db/conn')

const test = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const createItem = (req, res)=>{
    let string = `INSERT INTO item VALUE('${req.body.id}','${req.body.nome}','${req.body.descricao}',${req.body.valor})`
    pool.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const readItem = (req, res)=>{
    let string = "SELECT * FROM item"
    pool.query(string, (err, result)=>{
        if(err == null)
            res.json(result).end()
    })
}

const deleteItem = (req, res)=>{
    let string = `DELETE FROM item WHERE id = '${req.params.id}'`
    pool.query(string, (err, result)=>{
        if(result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    test,
    createItem,
    readItem,
    deleteItem
}