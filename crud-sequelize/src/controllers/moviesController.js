const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    'list': async (req, res) => {
        const movies = await db.Movie.findAll();
        res.render('moviesList.ejs', {movies});
    },
    'detail': async (req, res) => {
        const movie = await db.Movie.findByPk(req.params.id, /* {include: [{association: "genre"}]} */);
        res.render('moviesDetail.ejs', {movie});
    },
    'new': async (req, res) => {
        const movies = await db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
        res.render('newestMovies', {movies});
    },
    'recomended': async (req, res) => {
        const movies = await db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
        res.render('recommendedMovies.ejs', {movies});
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: async function (req, res) {
        
    },
    create: async function (req,res) {

    },
    edit: async function(req,res) {

    },
    update: async function (req,res) {

    },
    delete: async function (req,res) {

    },
    destroy: async function (req,res) {

    }
}

module.exports = moviesController;
