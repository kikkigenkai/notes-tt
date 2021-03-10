const { Router } = require('express');
const CategorieController = require('../controllers/CategorieController');
const CategorieIdMiddleware = require('../middlewares/CategorieIdMiddleware');
const CategorieValidMiddleware = require('../middlewares/CategorieValidMiddleware');
const router = Router();

router.get('/categories', CategorieController.getAll);
router.get('/categories/:id', CategorieIdMiddleware, CategorieController.getOne);
router.get('/categories/notes/:id', CategorieIdMiddleware, CategorieController.getCategorieNotes);
router.post('/categories', CategorieValidMiddleware, CategorieController.createCategorie);
router.put('/categories/:id', CategorieIdMiddleware, CategorieValidMiddleware, CategorieController.editCategorie);

module.exports = router;