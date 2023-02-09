const criar = (req, res) => {
    res.send("Criar").status(200).end();
}

const listar = (req, res) => {
    res.send("Listar").status(200).end();
}

const atualizar = (req, res) => {
    res.send("Atualizar").status(200).end();
}

const deletar = (req, res) => {
    res.send("Deletar").status(200).end();
}

module.exports = {
    criar,
    listar,
    atualizar,
    deletar
}