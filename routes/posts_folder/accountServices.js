//Variables\\

    const express = require('express');
    const router = express.Router();
    const dbase = require('./../../services/database');
//----------\\

//Password encryption\\

    const bcrypt = require('bcrypt');
    const saltRounds = 10;
//--------------------\\

router.post('/login', (req, res, next) => {

    const UserInfo = req.body;

    dbase.query('CALL GetUserHashPass("' + UserInfo.user + '");', (err, results, fields) =>{
        if(err)throw err;

        //Check if the user exists
        if(results[0][0] == undefined){

            res.send([{output: 'Username not found!'}]);

        }else{
            bcrypt.compare(UserInfo.password, results[0][0].pass, function(err, result) {

                if(result){
                    res.send([{output: 'Success', id: results[0][0].id }]);
                }else{
                    res.send([{output: 'The password is incorrect!'}]);
                };

            });
        };



    });
    
});

router.post('/signup', (req, res, next) => {

    //Received information
    let LocalInfo = req.body;

    //Encrypt the password
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(LocalInfo.password, salt, function(err, hash) {

            //Call the database
            dbase.query('CALL CreateAccount("' + LocalInfo.username + '", "' + LocalInfo.email + '", "' + hash  + '");' ,(err, results, fields)=>{
                
                //Send feedback to the client
                res.send(results[0]);

            });

        });
    });



       
});

//Send a friend request to the user
router.post('/sendFriendRequest', (req, res, next) => {

    let LocalInfo = req.body;

    dbase.query('CALL CreateRequestInvite(' + LocalInfo.id + ', "' + LocalInfo.name + '");', (err, results, fields) =>{
        if(err) throw err;

        res.send(results[0]);
    });

});

//Get the friends data
router.post('/getUserFriendsData',(req, res, next) =>{

    //Front-end data
    let LocalInfo = req.body;

    let DataToBeSent = {
        friendlist: undefined,
        received: undefined,
        sent: undefined
    };

    //Get friend list
    dbase.query('CALL GetFriendList(' + LocalInfo.id + ')', (err, results, fields) =>{
        if(err)throw err;

        //Update the array
        DataToBeSent.friendlist = results[0];

        //Get received requests
        dbase.query('CALL GetReceivedRequests(' + LocalInfo.id + ')', (err, results, fields) =>{
            if(err)throw err;

            //Update the array
            DataToBeSent.received = results[0];

            //Get sent requests
            dbase.query('CALL GetSentRequests(' + LocalInfo.id + ')', (err, results, fields) =>{
                if(err)throw err;
                
                //Update the array
                DataToBeSent.sent = results[0];

                    //Send the front data 
                    res.send(DataToBeSent);

            });

        });

    });

});

router.post('/cancelFriendRequest', (req, res, next) =>{

    let LocalInfo = req.body;

    dbase.query('CALL CancelSentRequest(' + LocalInfo.id + ',' + LocalInfo.other + ')', (err, results, fields) =>{
        if(err)throw err;
        res.send(results[0]);
    });

});

router.post('/acceptFriendRequest', (req, res, next) =>{

    let LocalInfo = req.body;

    //Tell the database to add the user
    dbase.query('CALL AcceptFriendRequest(' + LocalInfo.id + ',' + LocalInfo.other + ')', (err, results, fields) =>{
        if(err)throw err;
        
       dbase.query('CALL CancelSentRequest(' + LocalInfo.other + ',' + LocalInfo.id + ')', (err, results2, fields) =>{
            if(err)throw err;
            res.send(results[0]);
        });


    });

});

router.post('/endFriendship', (req, res, next) => {

    let LocalInfo = req.body;

    //Tell the database to end the friendship
    dbase.query('CALL EndFriendship(' + LocalInfo.id + ', ' + LocalInfo.other + ')', (err, results, fields) =>{
        if(err)throw err;

        res.send(results[0]);
    });

});

router.post('/getFriendRestaurant', (req, res, next) =>{

    let LocalInfo = req.body;
    let Result = {
        furniture: [],
        userStats: undefined
    };

    dbase.query('CALL getRestaurantData(' + LocalInfo.id + ')', (err, results, fields) =>{

        Result.userStats = results[0][0];

        dbase.query('CALL getRestaurantFurniture(' + LocalInfo.id + ')', (err, results, fields) =>{

            Result.furniture = results[0];

            res.send([Result]);

        });
    });

});


//Check if the restaurant exists
router.post('/RestaurantName', (req, res, next) =>{

    const UserInfo = req.body;

    dbase.query('CALL CheckIfRestaurant(' + UserInfo.id + ');', (err, results, fields) =>{
            //Send the feedback to the client
            res.send(results[0]);
    });

});

//Creates a restaurant after setting the name
router.post('/CreateRestaurant', (req, res, next) => {

    const UserInfo = req.body;
    dbase.query('CALL CreateRestaurant( ' + UserInfo.id + ', "' + UserInfo.resName + '");', (err, results, fields) =>{
        if(err)throw err;
        res.send('Done!')
    });

});

module.exports = router;