const { Router } = require('express');
const NoteController = require('../controllers/NoteController');
const NoteIdMiddleware = require('../middlewares/NoteIdMiddleware');
const NoteValidMiddleware = require('../middlewares/NoteValidMiddleware');
const router = Router();

router.get('/notes/:id', NoteIdMiddleware, NoteController.getOne);
router.get('/notes', NoteController.getNotesWithoutCategorie);
router.post('/notes', NoteValidMiddleware, NoteController.createNote);
router.put('/notes/:id', NoteIdMiddleware, NoteValidMiddleware, NoteController.editNote);

module.exports = router;