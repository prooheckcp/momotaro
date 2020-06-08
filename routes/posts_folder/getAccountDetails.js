//Variables\\

const express = require('express');
const router = express.Router();
const dbase = require('./../../services/database');
//----------\\

//Get the player dishes
router.post('/getInventoryDishes', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query('CALL GetPlayerDishes(' + UserInfo.id + ');', (err, results, fields) =>{
        
        res.send(results[0]);

    });

});

//Get the recipes inventory
router.post('/getRecipesInventory', (req, res, next) => {
    const UserInfo = req.body;

    dbase.query('CALL GetPlayerRecipes(' + UserInfo.userID + ');', (err, results, fields) =>{
        if(err)throw err;

        res.send(results[0]);
    });

});

//Get the ingredients inventory
router.post('/getIngredientsInventory', (req, res, next) =>{
    const UserInfo = req.body;

    dbase.query('CALL GetPlayerIngredients(' + UserInfo.id + ');', (err, results, fielnds) =>{
        
        res.send(results[0]);

    });

});

//Get the furniture in the inventory
router.post('/getInventory', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query('CALL GetPlayerInventory(' + UserInfo.id + ');', (err, results, fields) =>{

        if(err)throw err;
        
        res.send(results[0]);
    });

});

//Get the furniture placed in the restaurant
router.post('/getDecoration', (req, res, next) =>{

    const UserInfo = req.body;

    dbase.query('CALL getRestaurantFurniture('+ UserInfo.id +');', (err, results, fields) => {

        if(err)throw err;

        res.send(results[0]);

    });

});


//Get the recipes types
router.post('/getRecipesTypes', (req, res, next) =>{

    const UserInfo = req.body;

    dbase.query('CALL GetRecipesTypes(' + UserInfo.id + ');', (err, results, fields) => {
        res.send(results[0]);
    });

});



//Get the restaurant stats by id :3
router.post('/getRestaurantStats', (req, res, next) =>{

    const UserInfo = req.body;

    dbase.query('CALL LoadRestaurantStats(' + UserInfo.id + ');', (err, results, fields) =>{

        res.send([{money : results[0][0].res_money, level: results[0][0].res_level, exp: results[0][0].res_exp}]);

    });

});


module.exports = router;