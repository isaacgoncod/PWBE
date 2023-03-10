const somar = (req, res) => {
  const { operacao } = req.params;
  const { vali, valii } = req.query;

  let resultado = Number(vali) + Number(valii);

  res.status(200).json({ resultado: resultado }).end();
};
const subtrair = (req, res) => {
  const { vali, valii } = req.query;

  let resultado = Number(vali) - Number(valii);

  res.status(200).json({ resultado: resultado }).end();
};
const multiplicar = (req, res) => {
  const { vali, valii } = req.query;

  let resultado = Number(vali) * Number(valii);

  res.status(200).json({ resultado: resultado }).end();
};
const dividir = (req, res) => {
  const { vali, valii } = req.query;

  let resultado = Number(vali) / Number(valii);

  res.status(200).json({ resultado: resultado }).end();
};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
};
