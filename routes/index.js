const express = require('express');
const router = express.Router();
//get our schema model 
const Movie = require('../models/movie.model.js') 


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//route to movies.hbs when clicking 'Check the movies!'
router.get('/movies', async (req, res) => { // --> '/movies' is the URL part
     
    //model we define in line 3, which takes the model from the file
    const movies = await Movie.find()
    //console.log(movies)
    res.render('movies', {movies}) 
    //'movies' = hbs file
    //{movies} second argument, the array with the information
})

//route to details of the selected movie from /movies page
    router.get('/movie/:id', async (req, res) => {

        //we get the details from a specific ID from our model
        const details = await Movie.findById(req.params.id) 

        //render to our details.hbs, {details} showing the info of the selected movie id  
        res.render('details', {details})
    })
module.exports = router;
