const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': async (req, res) => {
        const genres = await db.Genre.findAll();
        res.render('genresList.ejs', {genres});
    },
    'detail': async (req, res) => {
        const genre = await db.Genre.findByPk(req.params.id);
        res.render('genresDetail.ejs', {genre});
    }

}

module.exports = genresController;
