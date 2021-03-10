const Categorie = require('../models/Categorie');
const Note = require('../models/Note');
const SortUtil = require('../utils/SortUtil');

class CategorieService {
    async editCategorie(id, categorie) {
        const editedCategorie = await Categorie.findByIdAndUpdate(id, {
            ...categorie
        });

        return editedCategorie;
    }

    async getOne(id) {
        const categorie = await Categorie.findOne({ _id: id });

        return categorie;
    }

    async getCategorieNotes(id) {
        const categorie = await Categorie.findOne({ _id: id });
        const notes = await Note.find();

        return notes.filter(note => {
            if (note.categorieId !== null) {
                return note.categorieId.toString() === categorie._id.toString()
            }
        }).sort(SortUtil.sortDateAsc);
    }

    async getAll() {
        const categories = await Categorie.find();

        return categories;
    }

    async createCategorie(categorie) {
        const createdCategorie = new Categorie({ ...categorie });

        await createdCategorie.save();

        return createdCategorie;
    }
}

module.exports = new CategorieService();