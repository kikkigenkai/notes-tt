module.exports = (req, res, next) => {
    if (!req.body.title || !req.body.description || !req.body.actualDate) {
        res.status(400).json({ message: 'Empty request body' });
    } else if (req.body.title.trim().length < 3) {
        res.status(400).json({ message: 'Title too short' });
    } else if (req.body.description.trim().length < 3) {
        res.status(400).json({ message: 'Description too short' });
    } else if (
        !/^\d{4}(\.|-)(0[1-9]|1[0-2])(\.|-)(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/.test(req.body.actualDate) && 
        !/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])(\.|-)(0[1-9]|1[0-2])(\.|-)\d{4}$/.test(req.body.actualDate)
    ) {
        res.status(400).json({ message: 'Bad actual date' });
    } else {
        next();
    }
}