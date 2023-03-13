const rand = (req, res) => {
  const { limite } = req.query;

  let numRandom = Math.floor(Math.random() * limite);

  res.status(200).json({ random: numRandom }).end();
};

module.exports = {
  rand,
};
