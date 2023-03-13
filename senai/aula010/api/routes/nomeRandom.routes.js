const express = require("express");
const router = express.Router();

const NomeRandomController = require("../controllers/nomeRandom.controller");

router.get("/nome", NomeRandomController.nomeRand);

module.exports = router;
