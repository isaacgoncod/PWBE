const somar = (req, res) => {
  const { vali, valii } = req.query;

  let resultado = Number(vali) + Number(valii);

  res.status(200).json({ resultado: resultado }).end();
};

module.exports = {
  somar,
};
