const Note = require('../models/Note');
const Categorie = require('../models/Categorie');
const SortUtil = require('../utils/SortUtil');

class NoteService {
    async getOne(id) {
        const note = await Note.find({ _id: id });

        return note;
    }

    async editNote(id, note) {
        const editedNote = await Note.findByIdAndUpdate(id, {
            ...note
        });
        
        return editedNote;
    }

    async getNotesWithoutCategorie() {
        const notes = await Note.find({ categorieId: null });

        return notes.sort(SortUtil.sortDateAsc);
    }

    async createNote(note) {
        if (note.categorie) {
            const checkedCategorie = await Categorie.findOne({ cName: note.categorie });

            if (checkedCategorie) {
                const createdNote = new Note({
                    title: note.title,
                    categorieId: checkedCategorie._id,
                    description: note.description,
                    actualDate: note.actualDate
                });

                checkedCategorie.addNote(createdNote);

                await createdNote.save();

                return createdNote;
            }
        }
        
        const createdNote = new Note({ ...note });

        await createdNote.save();

        return createdNote;
    }
}

module.exports = new NoteService();