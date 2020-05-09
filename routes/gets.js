const express = require('express');
const router = express.Router();
const path = require('path');
const entryPoint = require('../util/path');
const dbase = require('./../services/database');

//Data\\
const restaurant = require(path.join(entryPoint, 'static_data', 'restaurant.js'));



//Get the top 50 players

router.get('/top50players', (req, res, next) =>{

    dbase.query('SELECT * FROM restaurant GROUP BY res_level, res_exp, res_name ORDER BY res_level DESC LIMIT 50;', (err, results, fields) =>{
        if(err){console.log(err)};
        res.send(results);
    });

});

//Get the dec_market

router.get('/DecorationMarket', (req, res, next) =>{
    
    dbase.query('SELECT * FROM dec_market ORDER BY item_price;', (err, results, fields) =>{
        if(err){console.log(err)};

        res.send(results);

    });

});

//Data such as the restaurant size and tiles size
router.get('/RestaurantDefaultData', (req, res, next) => {
    res.send(restaurant);
});


const ImagesPathUI = (ImageName) => path.join(entryPoint, 'Game_Images', 'UI', ImageName); 
const ImagesPathRes = (ImageName) => path.join(entryPoint, 'Game_Images', 'Restaurant_Parts', ImageName);
const ImagesPathDec = (ImageName) => path.join(entryPoint, 'Game_Images', 'Furniture', ImageName);
const ImagesPathCooK = (ImageName) => path.join(entryPoint, 'Game_Images', 'Food', ImageName);

//Images\\

//UI

router.get('/image/LeaderboardTab', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LeaderboardTab.png'));
});

router.get('/image/LeaderboardsFrame', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LeaderboardsFrame.png'));
});


router.get('/image/MarketButton', (req, res, next) =>{
    res.sendFile(ImagesPathUI('MarketButton.png'));
});

router.get('/image/MarketFrame', (req, res, next) =>{
    res.sendFile(ImagesPathUI('MarketFrame.png'));
});

router.get('/image/CloseMarket', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CloseMark.png'));
});

router.get('/image/JapanCityMarket', (req, res, next) =>{
    res.sendFile(ImagesPathUI('osakabutton.png'));
});

router.get('/image/JapanCityFriends', (req, res, next) =>{
    res.sendFile(ImagesPathUI('saporrobutton.png'));
});

router.get('/image/JapanCityRestaurant', (req, res, next) =>{
    res.sendFile(ImagesPathUI('tokyobutton.png'));
});


router.get('/image/JapanMap', (req, res, next)=>{
    res.sendFile(ImagesPathUI('JapanMap.png'));
});

router.get('/image/MoneyDisplayer', (req, res, next) =>{
    res.sendFile(ImagesPathUI('MoneyDisplayer.png'));
});

router.get('/image/levelstar', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LevelStar.png'));
});

router.get('/image/circlebutton', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButton.png'));
});

router.get('/image/CircleButtonCheck', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonCheck.png'));
});

router.get('/image/CircleButtonGeneral', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonGeneral.png'));
});

router.get('/image/CircleButtonGear', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonGear.png'));
});

router.get('/image/CircleButtonLogOut', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonLogOut.png'));
});

router.get('/image/CircleButtonLeaderboards', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonLeaderboards.png'));
});

router.get('/image/CircleButtonCooking', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonCooking.png'));
});

router.get('/image/CircleButtonDecoration', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonDecoration.png'));
});

router.get('/image/CircleButtonStorage', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonStorage.png'));
});

router.get('/image/CircleButtonMap', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonMap.png'));
});

router.get('/image/middleframe', (req, res, next) =>{
    res.sendFile(ImagesPathUI('MiddleFrame.png'));
});

router.get('/image/buttonImage', (req, res, next) =>{
    res.sendFile(ImagesPathUI('RectangleButton.png'));
});

router.get('/image/logo', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LogoMomotaro.png'));
});

router.get('/image/lake', (req, res, next) =>{
    res.sendFile(ImagesPathUI('house.gif'));
});

router.get('/image/frame', (req, res, next) =>{
    res.sendFile(ImagesPathUI('frame.png'));
});

router.get('/image/ReturnButtonCook', (req, res, next) =>{
    res.sendFile(ImagesPathUI('Return_Restaurant.png'));
});

router.get('/image/floor_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('WoodFloorTile.png'));
});

router.get('/image/wall_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('BrickWallTile.png'));
});

router.get('/image/left_wall_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('LeftSideWallTile.png'));
});

router.get('/image/right_wall_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('RightSideWallTile.png'));
});

router.get('/image/right_corner_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('RightCornerTile.png'));
});

router.get('/image/left_corner_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('LeftCornerTile.png'));
});

router.get('/image/blue_wall_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('BlueWallTile.png'));
});

router.get('/image/left_entrance_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('EntranceLeftSideTile.png'));
});

router.get('/image/right_entrance_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('EntranceRightSideTile.png'));
});

//UI\\

router.get('/images/bottom_frame', (req, res, next) => {
    res.sendFile(ImagesPathUI('BottomFrame.png'));
});

router.get('/images/left_yellow_arrow', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LeftYellowArrow.png'));
});

router.get('/images/right_yellow_arrow', (req, res, next) =>{
    res.sendFile(ImagesPathUI('RightYellowArrow.png'));
});

//Decorations\\

router.get('/image/AnimatedCrow2', (req, res, next) =>{
    res.sendFile(ImagesPathDec('animated_crow2.gif'));
});

router.get('/image/AnimatedCrow', (req, res, next) =>{
    res.sendFile(ImagesPathDec('animated_crow.gif'));
});

router.get('/image/AnimatedPlant', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Misc_pottedplant.gif'));
});


router.get('/image/Bar_Left', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Bar_Left.png'));
});

router.get('/image/Bar_Middle', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Bar_Middle.png'));
});

router.get('/image/Bar_Right', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Bar_Right.png'));
});

router.get('/image/Beje_Plant', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Beje_Plant.png'));
});

router.get('/image/Purple_Plant', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Purple_Plant.png'));
});

router.get('/image/Chair_Back', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Chair_Back.png'));
});

router.get('/image/Chair_Front', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Chair_Front.png'));
});

router.get('/image/Cushion_Chair', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Cushion_Chair.png'));
});

router.get('/image/Long_Table', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Long_Table.png'));
});

router.get('/image/Simple_Table', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Simple_Table.png'));
});

router.get('/image/Round_Table', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Round_Table.png'));
});

router.get('/image/Machine_Karaoke', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Machine_Karaoke.png'));
});

router.get('/image/Television', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Television.png'));
});

router.get('/image/Television_Corner', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Television_Corner.png'));
});

router.get('/image/Oven', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Oven.png'));
});

//Igredients\\

router.get('/image/Tuna', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Tuna.png'));
});

router.get('/image/Shrimp', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Shrimp.png'));
});

router.get('/image/Cacoa', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Cacoa.png'));
});

router.get('/image/Cherry', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Cherry.png'));
});

router.get('/image/Eggs', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Eggs.png'));
});

router.get('/image/Pasta', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Pasta.png'));
});

router.get('/image/Tuna', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Tuna.png'));
});

router.get('/image/Rice', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Rice.png'));
});

router.get('/image/Water', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Water.png'));
});

router.get('/image/Oliva_Oil', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Oliva_Oil.png'));
});

router.get('/image/Bread', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Bread.png'));
});


router.get('/image/Tuna', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Tuna.png'));
});

router.get('/image/Flour', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Flour.png'));
});

router.get('/image/Noodles', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Noodles.png'));
});

router.get('/image/Bread_Omelet', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Bread_Omelet.png'));
});

router.get('/image/Tuna_Sushi', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Tuna_Sushi.png'));
});

router.get('/image/Shrimp_Sushi', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Shrimp_Sushi.png'));
});

router.get('/image/Chocolate_Cake', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Chocolate_Cake.png'));
});

router.get('/image/Cherry_Pie', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Cherry_Pie.png'));
});

module.exports = router;