const CategorieService = require('../services/CategorieService');

class CategorieController {
    async editCategorie(req, res) {
        try {
            const categorie = await CategorieService.editCategorie(req.params.id, req.body);

            res.status(200).json({ data: categorie });
        } catch (err) {
            console.log(err);
            res.json({
                message: 'error'
            });
        }
    }

    async getOne(req, res) {
        try {
            const categorie = await CategorieService.getOne(req.params.id);

            res.status(200).json({ data: categorie });
        } catch (err) {
            console.log(err);
            res.json({
                message: 'error'
            });
        }
    }

    async getCategorieNotes(req, res) {
        try {
            const categorie = await CategorieService.getCategorieNotes(req.params.id);

            res.status(200).json({ data: categorie });
        } catch (err) {
            console.log(err);
            res.json({
                message: 'error'
            });
        }
    }

    async getAll(req, res) {
        try {
            const categories = await CategorieService.getAll();

            res.status(200).json({ data: categories });
        } catch (err) {
            console.log(err);
            res.json({
                message: 'error'
            });
        }
    }

    async createCategorie(req, res) {
        try {
            const categorie = await CategorieService.createCategorie(req.body);

            res.status(201).json({ data: categorie });
        } catch (err) {
            console.log(err);
            res.json({
                message: 'error'
            });
        }
    }
}

module.exports = new CategorieController();