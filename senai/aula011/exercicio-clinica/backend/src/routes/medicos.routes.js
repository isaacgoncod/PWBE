const express = require('express');

const Medicos = require('../controllers/medicos');

const router = express.Router();

router.post('/medico', Medicos.cadastrar);
router.get('/medicos', Medicos.listar);

module.exports = router;