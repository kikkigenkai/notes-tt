const {Schema, model} = require('mongoose');

const CategorieSchema = new Schema({
    cName: {
        type: String,
        required: true
    },
    notes: [
        {
            noteId: {
                type: Schema.Types.ObjectId,
                ref: 'Note',
                required: false
            }
        }
    ]
});

CategorieSchema.methods.addNote = function (note) {
    const notes = [...this.notes];
    const idx = notes.findIndex(n => n.toString() === note._id.toString());
    
    if (idx >= 0) {
        return;
    }

    notes.push({
        noteId: note._id
    });

    this.notes = [...notes];

    return this.save();
}

module.exports = model('Categorie', CategorieSchema);