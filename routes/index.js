const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model.js') //.. go back to parent folder, and the next folder

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//route to movies.hbs after clicking 'Check the movies!'
router.get('/movies', async (req, res) => { // --> /movies is the URL 
    const movies = await Movie.find() //model we define in line 3, which takes the model from the file
    console.log(movies)
    res.render('movies', {movies}) //'movies' = hbs file -- {movies}argument with the array with the information
})

module.exports = router;
