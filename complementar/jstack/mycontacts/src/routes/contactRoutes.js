const { Router } = require('express');

const ContactController = require('../controllers/ContactController');

const router = Router();

router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);

module.exports = router;
