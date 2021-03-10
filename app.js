const express = require('express');
const mongoose = require('mongoose');

const pageRoutes = require('./routes/routers');

const noteApi = require('./api/NotesModule');
const categorieApi = require('./api/CategorieModule');

const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', pageRoutes);

app.use('/api/', noteApi);
app.use('/api/', categorieApi);


(async () => {
    try {
        await mongoose.connect('mongodb://localhost/todo', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
})();