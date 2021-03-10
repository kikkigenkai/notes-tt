const Note = require('../models/Note');

module.exports = (req, res, next) => {
    Note.findById(req.params.id, (err, item) => {
        if (err || !item) {
            return res.json({
                message: 'bad id'
            });
        }

        next();
    });
};