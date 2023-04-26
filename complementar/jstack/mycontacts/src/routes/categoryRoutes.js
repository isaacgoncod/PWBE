const { Router } = require('express');

const CategoryController = require('../controllers/CategoryController');

const router = Router();

router.post('/categories', CategoryController.store);
router.get('/categories', CategoryController.index);

module.exports = router;
