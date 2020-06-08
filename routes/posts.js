//Variables\\

    const express = require('express');
    const router = express.Router();
    const dbase = require('./../services/database');
    const path = require('path');
    const accountServicesRouter = require('./posts_folder/accountServices');
    const restarauntServicesRouter = require('./posts_folder/getAccountDetails');
//----------\\

//Middleware\\

    router.use(accountServicesRouter);
    router.use(restarauntServicesRouter);
//-----------\\

//Decrease the dish, give the money and the exp
router.post('/ConsumeDish', (req, res, next) => {
    const UserInfo = req.body;

    dbase.query('CALL purchaseDish("' + UserInfo.DishID + '", ' + UserInfo.id + ');', (err, results, fields) =>{

        if(err)throw err;
        res.send({status: 'ok'});
    });

});


//Buy ingredient
router.post('/buyIngredient', (req, res, next) =>{

    let LocalInfo = req.body;

    //Call the database
    dbase.query('CALL BuyIngredient( ' + LocalInfo.id + ', ' + LocalInfo.price + ', "' + LocalInfo.itemid + '", ' + LocalInfo.amount + ')', (err, results, fields) =>{
        if(err)throw err;

        //Give feedback to the client
        res.send(results[0][0].output);

    });

});




router.post('/CreateNewDish', (req, res, next) => {

    const UserInfo = req.body;


    dbase.query('SELECT * FROM ingredients_inventory WHERE user_id = ' + UserInfo.userID + ';', (err, results, fields) =>{
        
        if(err)throw err;

        let QueryWorked = false;
        for(let slot in UserInfo.ingredients){
            for(let row of results){
            
            
                if(row.ingredient_id == UserInfo.ingredients[slot]){

                    //If an ingredient exists then it will decrease it
                    if(row.ingredient_amount > 0){
                        dbase.query('UPDATE ingredients_inventory SET ingredient_amount = ingredient_amount - 1 WHERE ingredient_id = "' + row.ingredient_id + '" AND user_id = ' + UserInfo.userID + ';', (err, results, fields) =>{
                            if(err)throw err;
                            QueryWorked = true;
                        });
                    }else{
                        res.send('ERROR: there are not enough ingredients');
                    }
                }

            };
        };


        dbase.query('SELECT * FROM dishes_inventory WHERE user_id = ' + UserInfo.userID + ' AND dish_id = "' + UserInfo.dishID + '";', (err, results, fields) =>{
            if(err)throw err;

            if(results[0] == undefined){
                dbase.query('INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id) VALUES(' + UserInfo.userID + ', 1, "' + UserInfo.dishID + '");', (err, results, fields) =>{
                    if(err)throw err;
                    res.send('Added a new dish!');
                });
            }else{
                let InfoFromAmountOfDishes = results[0].dishes_amount + 1;
                dbase.query('UPDATE dishes_inventory SET dishes_amount = dishes_amount + 1 WHERE user_id = ' + UserInfo.userID + ' AND dish_id = "' + UserInfo.dishID + '";', (err, results, fields) =>{
                    res.send('You now have ' + InfoFromAmountOfDishes + ' of this kind!');
                });
            }

        });
    

    });


});


router.post('/buyDecoration', (req, res, next)=>{
    const UserInfo = req.body;

    dbase.query('CALL BuyDecoration( ' + UserInfo.id + ', ' + UserInfo.price + ', "' + UserInfo.itemid + '", ' + UserInfo.amount + ')', (err, results, fields) =>{
        if(err)throw err;

        res.send(results[0][0].output);

    });

});


router.post('/levelUp', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query('CALL CheckLevel(' + UserInfo.id + ');', (err, results, fields) =>{
        if(err)throw err;
        res.send(results[0]);
    });


});

router.post('/giveMoney', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query('CALL GiveMoneyPlayer(' + UserInfo.money + ' , ' + UserInfo.id + ');', (err, results, fields) => {
        if(err)throw err;
        res.send('done');
    });

});

router.post('/UpdateDecoration', (req, res, next) =>{

    const UserInfo = req.body;

    dbase.query('CALL CleanInventory(' + UserInfo.id + ')', (err, results, fields) =>{
        if(err)throw err;



        for(let i = 0; UserInfo.inv.length > i ; i++){
            dbase.query('CALL AddItemInventory( "'+ UserInfo.inv[i].item_id +'", ' + UserInfo.id + ', ' + UserInfo.inv[i].item_amount + ')', (err, results, fields) => {
                if(err)throw err;

                if(i == (UserInfo.inv.length - 1)){

                    for(let j = 0; UserInfo.dec.length > j; j++ ){
                        dbase.query('CALL PlaceInRestaurantItem( "' + UserInfo.dec[j].item_id + '", ' + UserInfo.id + ', ' + UserInfo.dec[j].item_x + ', ' + UserInfo.dec[j].item_y + ')', (err, results, fields) =>{
                            if(err)throw err;
                            
                            if(j == (UserInfo.dec.length -1)){
                                res.send('done');
                            };

                        });
            
                    };

                };

            });
        };       



    });

    //Loop through the player inventory




});


module.exports = router;