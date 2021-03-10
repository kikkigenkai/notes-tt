const {Router} = require('express');
const router = Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/..' + '/views' + '/index.html'));
});

router.get('/note', (req, res) => {
    res.sendFile(path.join(__dirname + '/..' + '/views' + '/note.html'));
});

router.get('/categorie', (req, res) => {
    res.sendFile(path.join(__dirname + '/..' + '/views' + '/categorie.html'));
});

router.get('/edit/:id', (req, res) => {
    res.sendFile(path.join(__dirname + '/..' +  '/views' + '/edit.html'));
});

module.exports = router;