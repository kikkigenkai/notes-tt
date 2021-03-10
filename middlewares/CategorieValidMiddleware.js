module.exports = (req, res, next) => {
    if (!req.body.cName) {
        res.status(400).json({ message: 'Empty request body' });
    } else if (req.body.cName.length < 3) {
        res.status(400).json({ message: 'Categorie name too short' });
    } else if (req.body.cName.length > 15) {
        res.status(400).json({ message: 'Categorie name too long, max 15 characters' })
    } else {
        next();
    }
};