const operacoes = (req, res) => {
  const { operacao } = req.params;
  const { vali, valii } = req.query;

  let resultado = 0;

  if (operacao === "somar") resultado = Number(vali) + Number(valii);

  if (operacao === "subtrair") resultado = Number(vali) - Number(valii);

  if (operacao === "multiplicar") resultado = Number(vali) * Number(valii);

  if (operacao === "dividir") resultado = Number(vali) / Number(valii);

  res.status(200).json({ resultado: resultado }).end();
};

module.exports = {
  operacoes,
};
