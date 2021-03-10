const Categorie = require('../models/Categorie');

module.exports = (req, res, next) => {
    Categorie.findById(req.params.id, (err, item) => {
        if (err || !item) {
            return res.json({
                message: 'bad id'
            });
        }

        next();
    });
};