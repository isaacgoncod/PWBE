const base = [
  "Juliana Silva",
  "Rafael Santos",
  "Gabriela Oliveira",
  "Pedro Henrique Lima",
  "Larissa Souza",
  "Bruno Oliveira",
  "Fernanda Rodrigues",
  "Gustavo Alves",
  "Aline Pereira",
  "Matheus Costa",
  "Luiza Santos",
  "Felipe Cardoso",
  "Mariana Ferreira",
  "Ricardo Oliveira",
  "Ana Paula Souza",
  "Lucas Vieira",
  "Isabela Oliveira",
  "José Carlos Mendes",
  "Natália Silva",
  "Carlos Eduardo Almeida",
];

const nomeRand = (req, res) => {
  let sort = Math.floor(Math.random() * base.length + 1);

  let nameSort = base[sort];

  res.status(200).json({ nome: nameSort }).end();
};

module.exports = {
  nomeRand,
};
