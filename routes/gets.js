//Variables\\

    const express = require('express');
    const router = express.Router();
    const path = require('path');
    const entryPoint = require('../util/path');
    const dbase = require('./../services/database');
//----------\\

//Router and paths\\

    const ImagesRouter = require(path.join(__dirname, 'gets_folder', 'images'));
    const AudioRouter = require(path.join(__dirname, 'gets_folder', 'sound'));
//-----------------\\


//Middleware\\

    //images
    router.use('/image', ImagesRouter);

    //Sound
    router.use('/music', AudioRouter);
//-----------\\

//Get the recipes from the database
router.get('/getRecipesTypes', (req, res, next) =>{
    dbase.query('CALL GetRecipes();', (err, results, fields) =>{
        if(err)throw err;

        res.send(results[0]);
    });
});

//Get the top 50 players
router.get('/top50players', (req, res, next) =>{

    dbase.query('CALL GetTopPlayers(50);', (err, results, fields) =>{
        if(err)throw err;

        res.send(results[0]);
    });

});

//Get the ingredient_market
router.get('/IngredientMarket', (req, res, next) =>{

    dbase.query('CALL GetIngredients();', (err, results, fields) =>{
        if(err)throw err;

        res.send(results[0]);
    });

});

//Get the dec_market
router.get('/DecorationMarket', (req, res, next) =>{
    
    dbase.query('CALL GetDecoration();', (err, results, fields) =>{
        if(err)throw err;

        res.send(results[0]);
    });

});


//Data such as the restaurant size and tiles size
const restaurant = require(path.join(entryPoint, 'static_data', 'restaurant.js'));
router.get('/RestaurantDefaultData', (req, res, next) => {
    res.send(restaurant);
});

module.exports = router;