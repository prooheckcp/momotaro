const express = require('express');
const router = express.Router();
const dbase = require('./../services/database');

////////////////////////////////////////////ERROR - res.send([{money : results[0].res_money, level: results[0].res_level, exp: results[0].res_exp}]); ////////////////////////////////////////////
////////////////////////////////////////////Tem um erro relacionado ao "results[0].res_money", que não identifiquei exatamente, por favor, da uma olhada
router.post('/NpcPay', (req, res, next) => {

    const UserInfo = req.body;
    
    dbase.query('UPDATE restaurant SET res_money = res_money + ' + UserInfo.price + ' WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{

        if(err){console.log(err)};
            res.send('DONE!')

    });

});

router.post('/NpcConsume', (req, res, next) => {
    const UserInfo = req.body;

    dbase.query('UPDATE dishes_inventory SET dishes_amount = dishes_amount - ' + UserInfo.amount + ' WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{

        if(err){console.log(err)};
            res.send('DONE!')

    });

});
router.post('/UpdateDishAm', (req, res, next) => {

    const UserInfo = req.body;
    
    dbase.query('UPDATE dishes_inventory SET dishes_amount = dishes_amount + ' + UserInfo.amount + ' WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{

        if(err){console.log(err)};
            res.send('DONE!')

    });
});

/*
router.post('/buyDecoration', (req, res, next)=>{
    const UserInfo = req.body;


    dbase.query('SELECT res_money FROM restaurant WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{
        if(err){console.log(err)};
        if(results[0].res_money < UserInfo.price){
            res.send([{status: 'error, not enough cash'}])
        }else{

            dbase.query('UPDATE restaurant SET res_money = res_money - ' + UserInfo.price + ' WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{


                dbase.query('SELECT * FROM dec_in_inventory WHERE user_id = ' + UserInfo.id + ' AND item_id = "' + UserInfo.itemid + '";', (err, results2, fields)=>{
                    
                    if(typeof(results2) != typeof([]) || results2.length == 0){
                        //There was still no item of this kind
                        dbase.query('INSERT INTO dec_in_inventory(item_id, user_id, item_amount)VALUES( "'+ UserInfo.itemid + '", ' + UserInfo.id + ', ' + UserInfo.amount + ');', (err, results, fields) =>{
                            if(err){console.log('Line28: ' + err)};
                            res.send([{status: UserInfo.amount + ' new item(s) were added to your inventory!'}]);
                        })
                    }else{
                        //There was already 1 item of this kind
                        dbase.query('UPDATE dec_in_inventory SET item_amount = item_amount + ' + UserInfo.amount + ' WHERE user_id = ' + UserInfo.id + ' AND item_id = "' + UserInfo.itemid + '";', (err, results, fields) =>{
                            if(err){console.log(err)};
                            res.send([{status: UserInfo.amount + ' new items were added to your inventory!'}]);
                        })
                    };


                });
                   

            });

        };

    });
    

});

router.post('/levelUp', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query('SELECT res_exp FROM restaurant WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) => {

        if(results[0].res_exp >= UserInfo.Nexp){

        dbase.query('UPDATE restaurant SET res_level = res_level + 1, res_exp = res_exp - ' + UserInfo.Nexp + ' WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{
            res.send('yes');
        });

        }else{
            res.send('no');
        }

    });


});

*/
router.post('/giveExp', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query('UPDATE restaurant SET res_exp = res_exp + ' + UserInfo.exp + ' WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{

        if(err){console.log(err)};
        res.send('done!')

    });
});


router.post('/giveMoney', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query('UPDATE restaurant SET res_money = res_money + ' + UserInfo.money + ' WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) => {
        if(err){console.log(err)};
        res.send('done');
    });

});

//Get the restaurant stats by id :3
router.post('/getRestaurantStats', (req, res, next) =>{

    const UserInfo = req.body;

    dbase.query('SELECT * FROM restaurant WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{

       // res.send([{money : results[0].res_money, level: results[0].res_level, exp: results[0].res_exp}]);

    });

});


//Check if the restaurant exists
router.post('/RestaurantName', (req, res, next) =>{

    const UserInfo = req.body;

    dbase.query('SELECT * FROM restaurant WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{
        if(results == undefined || results[0] == undefined){
            res.send([{status: "no"}]);
        }else{
            res.send([{status: "yes", resName: results[0].res_name}])
        };
    });

});

router.post('/CreateRestaurant', (req, res, next) => {

    const UserInfo = req.body;
    dbase.query('INSERT INTO momotaro.restaurant(user_id, res_name) VALUES(' + UserInfo.id + ', "' + UserInfo.resName + '");', (err, results, fields) =>{
        if(err){console.log(err)};
        res.send('Done!')
    });

});

router.post('/setResName', (req, res, next) =>{

    const UserInfo = req.body;

    

});

//Send the current inventory
router.post('/getInventory', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query('SELECT * FROM dec_in_inventory WHERE user_id = ' + UserInfo.id + ';', (err, results, fields) =>{

        if (err) {console.log(err)};
        
        res.send(results);
    });

});

router.post('/getDecoration', (req, res, next) =>{

    const UserInfo = req.body;

    dbase.query('SELECT * FROM dec_in_restaurant WHERE user_id = '+ UserInfo.id +';', (err, results, fields) => {

        if(err){console.log(err)};

        res.send(results);

    });

});

router.post('/removeFromRestaurant', (req, res, next) =>{
    const ItemInfo = req.body;
    dbase.query('DELETE FROM dec_in_restaurant WHERE item_id = "' + ItemInfo.item.item_id + '" AND user_id = ' + ItemInfo.id + ' AND item_x = ' + ItemInfo.item.item_x + ' AND item_y = ' + ItemInfo.item.item_y + ';', (err, results, fields) =>{
        if(err){console.log(err)};

        if(results.affectedRows > 0){
                dbase.query('UPDATE dec_in_inventory SET item_amount = item_amount + 1 WHERE item_id = "' + ItemInfo.item.item_id + '" AND user_id = ' + ItemInfo.id + ';', (err, results, fields) =>{
                    if(err){console.log(err)};
                });  
        };
    });



    res.send('data was removed!');

});

router.post('/addToRestaurant', (req, res, next) =>{
    const ItemInfo = req.body;
    
    dbase.query('INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y) VALUES("' + ItemInfo.item_id + '", ' + ItemInfo.id + ', ' + ItemInfo.x + ', ' + ItemInfo.y + ')', (err, results, fields) => {
        if (err) {console.log(err);};
    });

    dbase.query('UPDATE dec_in_inventory SET item_amount = item_amount - 1 WHERE item_id = "' + ItemInfo.item_id + '" AND user_id = ' + ItemInfo.id + ';', (err, results, fields) =>{
        if(err){console.log(err)};
    });

    res.send('The item has been added!');
});

router.post('/login', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query("SELECT * FROM users WHERE user_name = '"+ UserInfo.user + "';" , (err, results, fields) =>{

        if(results[0] == null){
            res.send([{status: false, id: null, message : 'Username did not exist!'}]);
        }else{
            if(results[0].user_password == UserInfo.password){
                res.send([{status: true, id: results[0].user_id}]);
            }else{
                res.send([{status: false, id: null, message : 'The password is incorrect!'}]);
            };
            
        }

    })
    
});

router.post('/signup', (req, res, next) => {

    dbase.query('SELECT * FROM users' ,(err, results, fields)=>{

        let EmailAlreadyExists = false;
        let UserNameAlreadyExists = false;

        for(account of results){
            
            if(req.body.email == account.user_email){
                EmailAlreadyExists = true;
            };
            if(req.body.username == account.user_name){
                UserNameAlreadyExists = true;
            }

        }


        if(EmailAlreadyExists){
            //status: 'Email Already Exists!', accepted: false
            res.send([{status: 'Email Already Exists!', accepted: false}]);
        }else if(UserNameAlreadyExists){
            res.send([{status: 'Username Already Exists!', accepted: false}]);
        }else{

            let SQLqueryInsert = "INSERT INTO `momotaro`.`users` (`user_password`, `user_name`, `user_email`) VALUES ('"+ req.body.password +"', '"+ req.body.username +"', '"+ req.body.email +"');";

            dbase.query(SQLqueryInsert ,(err, results, fields) => {
                

                //Check if there is any sql error
                if (err) {console.log(err)};
                
                dbase.query("SELECT user_id FROM users WHERE user_name = '" + req.body.username + "';", (err, results2, fields) =>{
                    
                    if(err){console.log(err)};
                
                    res.send([{status: 'Success!', accepted: true, userID : results2[0].user_id, username: req.body.username}]);
                });


            }
            
            );

            
        };



        

    });
});

module.exports = router;