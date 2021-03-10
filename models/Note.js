const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categorieId: {
        type: Schema.Types.ObjectId,
        ref: 'Categorie',
        default: null
    },
    actualDate: {
        type: String,
        required: true
    }
});

module.exports = model('Note', NoteSchema);