const NoteService = require('../services/NoteService');

class NoteController {
    async getOne(req, res) {
        try {
            const note = await NoteService.getOne(req.params.id);

            res.status(200).json({ data: note });
        } catch (err) {
            res.json({
                message: 'error'
            });
        }
    }

    async editNote(req, res) {
        try {
            const editedNote = await NoteService.editNote(req.params.id, req.body);

            res.status(200).json({ data: editedNote });
        } catch (err) {
            console.log(err);
            res.json({
                message: 'error'
            });
        } 
    }

    async getNotesWithoutCategorie(req, res) {
        try {
            const notes = await NoteService.getNotesWithoutCategorie();

            res.status(200).json({ data: notes });
        } catch (err) {
            console.log(err);
            res.json({
                message: 'error'
            });
        }
    }

    async createNote(req, res) {
        try {
            const note = await NoteService.createNote(req.body);

            res.status(201).json({ data: note });
        } catch (err) {
            console.log(err);
            res.json({
                message: 'error'
            });
        }
    }
}

module.exports = new NoteController();