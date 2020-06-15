//Variables\\

    const express = require('express');
    const router = express.Router();
    const path = require('path');
    const entryPoint = require('../../util/path');
//----------\\

//Absolute path of the files\\

    const ImagesPathUI = (ImageName) => path.join(entryPoint, 'Game_Images', 'UI', ImageName); 
    const ImagesPathRes = (ImageName) => path.join(entryPoint, 'Game_Images', 'Restaurant_Parts', ImageName);
    const ImagesPathDec = (ImageName) => path.join(entryPoint, 'Game_Images', 'Furniture', ImageName);
    const ImagesPathCooK = (ImageName) => path.join(entryPoint, 'Game_Images', 'Food', ImageName);
    const NpcPath = (NpcName) => path.join(entryPoint, 'Game_Images', 'Npc', NpcName);
//---------------------------\\

//Npc art\\

    //NPC 1
    router.get('/npcFemalebakerUP', (req, res, next) =>{
        res.sendFile(NpcPath('npcFemalebakerUP.png'));
    });

    router.get('/npcFemalebakerSit', (req, res, next) =>{
        res.sendFile(NpcPath('npcFemalebakerSit.png'));
    });

    //NPC 2
    router.get('/npcBusinessManUP', (req, res, next) =>{
        res.sendFile(NpcPath('Youngbusinessman4.png'));
    });

    router.get('/npcBusinessManSit', (req, res, next) =>{
        res.sendFile(NpcPath('Youngbusinessman1.png'));
    });

    //NPC 3
    router.get('/npcOldBusinessManUP', (req, res, next) =>{
        res.sendFile(NpcPath('Oldbusinessman4.png'));
    });

    router.get('/npcOldBusinessManSit', (req, res, next) =>{
        res.sendFile(NpcPath('Oldbusinessman1.png'));
    });

    //NPC 4
    router.get('/npcMaleStudentUP', (req, res, next) =>{
        res.sendFile(NpcPath('Malestudent4.png'));
    });

    router.get('/npcMaleStudentSit', (req, res, next) =>{
        res.sendFile(NpcPath('Malestudent1.png'));
    });

    //NPC 5
    router.get('/npcMalePunktUP', (req, res, next) =>{
        res.sendFile(NpcPath('Malepunk4.png'));
    });

    router.get('/npcMalePunkSit', (req, res, next) =>{
        res.sendFile(NpcPath('Malepunk1.png'));
    });

    //NPC 6
    router.get('/npcMaleCasualUP', (req, res, next) =>{
        res.sendFile(NpcPath('Malecasual4.png'));
    });

    router.get('/npcMaleCasualSit', (req, res, next) =>{
        res.sendFile(NpcPath('Malecasual1.png'));
    });

    //NPC 7
    router.get('/npcFemaleYouthUP', (req, res, next) =>{
        res.sendFile(NpcPath('Femaleyouth4.png'));
    });

    router.get('/npcFemaleYouthSit', (req, res, next) =>{
        res.sendFile(NpcPath('Femaleyouth1.png'));
    });

    //NPC 8
    router.get('/npcFemaleTrendyUP', (req, res, next) =>{
        res.sendFile(NpcPath('Femaletrendy4.png'));
    });

    router.get('/npcFemaleTrendySit', (req, res, next) =>{
        res.sendFile(NpcPath('Femaletrendy1.png'));
    });

    //NPC 9
    router.get('/npcFemaleStudentUP', (req, res, next) =>{
        res.sendFile(NpcPath('Femalestudent4.png'));
    });

    router.get('/npcFemaleStudentSit', (req, res, next) =>{
        res.sendFile(NpcPath('Femalestudent1.png'));
    });

//--------\\

//Images\\
//UI

router.get('/acceptbutton', (req, res, next) =>{
    res.sendFile(ImagesPathUI('DenyButton.png'));
});

router.get('/notificationFrame', (req, res, next) =>{
    res.sendFile(ImagesPathUI('NotificationFrame.png'));
});

router.get('/LoginSignupButton', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LoginSignupButton.png'));
});

router.get('/ChatBalloon', (req, res, next) =>{
    res.sendFile(ImagesPathUI('ChatBalloon.png'));
});

router.get('/StorageFrame', (req, res, next) =>{
    res.sendFile(ImagesPathUI('StorageFrame.png'));
});

router.get('/SoundOn', (req, res, next) =>{
    res.sendFile(ImagesPathUI('SoundOn.png'));
});

router.get('/SoundOff', (req, res, next) =>{
    res.sendFile(ImagesPathUI('SoundOff.png'));
});

router.get('/Invisible', (req, res, next) =>{
    res.sendFile(ImagesPathUI('Invisible.png'));
});

router.get('/ConfigFrame', (req, res, next) =>{
    res.sendFile(ImagesPathUI('ConfigFrame.png'));
});

router.get('/LeaderboardTab', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LeaderboardTab.png'));
});

router.get('/LeaderboardsFrame', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LeaderboardsFrame.png'));
});

router.get('/MarketButton', (req, res, next) =>{
    res.sendFile(ImagesPathUI('MarketButton.png'));
});

router.get('/MarketFrame', (req, res, next) =>{
    res.sendFile(ImagesPathUI('MarketFrame.png'));
});

router.get('/CloseMarket', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CloseMark.png'));
});

router.get('/JapanCityMarket', (req, res, next) =>{
    res.sendFile(ImagesPathUI('osakabutton.png'));
});

router.get('/JapanCityFriends', (req, res, next) =>{
    res.sendFile(ImagesPathUI('saporrobutton.png'));
});

router.get('/JapanCityRestaurant', (req, res, next) =>{
    res.sendFile(ImagesPathUI('tokyobutton.png'));
});


router.get('/JapanMap', (req, res, next)=>{
    res.sendFile(ImagesPathUI('JapanMap.png'));
});

router.get('/MoneyDisplayer', (req, res, next) =>{
    res.sendFile(ImagesPathUI('MoneyDisplayer.png'));
});

router.get('/levelstar', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LevelStar.png'));
});

router.get('/LevelPortal', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LevelPortal.png'));
});

router.get('/circlebutton', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButton.png'));
});

router.get('/CircleButtonCheck', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonCheck.png'));
});

router.get('/CircleButtonGeneral', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonGeneral.png'));
});

router.get('/CircleButtonGear', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonGear.png'));
});

router.get('/CircleButtonLogOut', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonLogOut.png'));
});

router.get('/CircleButtonLeaderboards', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonLeaderboards.png'));
});

router.get('/CircleButtonCooking', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonCooking.png'));
});

router.get('/CircleButtonDecoration', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonDecoration.png'));
});

router.get('/CircleButtonStorage', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonStorage.png'));
});

router.get('/CircleButtonMap', (req, res, next) =>{
    res.sendFile(ImagesPathUI('CircleButtonMap.png'));
});

router.get('/middleframe', (req, res, next) =>{
    res.sendFile(ImagesPathUI('MiddleFrame.png'));
});

router.get('/buttonImage', (req, res, next) =>{
    res.sendFile(ImagesPathUI('RectangleButton.png'));
});

router.get('/logo', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LogoMomotaro.png'));
});

router.get('/lake', (req, res, next) =>{
    res.sendFile(ImagesPathUI('house.gif'));
});

router.get('/frame', (req, res, next) =>{
    res.sendFile(ImagesPathUI('frame.png'));
});

router.get('/ReturnButtonCook', (req, res, next) =>{
    res.sendFile(ImagesPathUI('Return_Restaurant.png'));
});

router.get('/floor_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('WoodFloorTile.png'));
});

router.get('/wall_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('BrickWallTile.png'));
});

router.get('/left_wall_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('LeftSideWallTile.png'));
});

router.get('/right_wall_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('RightSideWallTile.png'));
});

router.get('/right_corner_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('RightCornerTile.png'));
});

router.get('/left_corner_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('LeftCornerTile.png'));
});

router.get('/blue_wall_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('BlueWallTile.png'));
});

router.get('/left_entrance_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('EntranceLeftSideTile.png'));
});

router.get('/right_entrance_tile', (req, res, next) =>{
    res.sendFile(ImagesPathRes('EntranceRightSideTile.png'));
});

//UI\\

router.get('/bottom_frame', (req, res, next) => {
    res.sendFile(ImagesPathUI('BottomFrame.png'));
});

router.get('/left_yellow_arrow', (req, res, next) =>{
    res.sendFile(ImagesPathUI('LeftYellowArrow.png'));
});

router.get('/right_yellow_arrow', (req, res, next) =>{
    res.sendFile(ImagesPathUI('RightYellowArrow.png'));
});

//Decorations\\

router.get('/ChocolateFountain', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Chocolate_Fountain.png'));
});

router.get('/Stanchion', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Stanchion.png'));
});

router.get('/ChocolateHeart', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Heart_chocolates.png'));
});

router.get('/Heater', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Heater.png'));
});

router.get('/CardboxMaid', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Cardbox_maid.png'));
});

router.get('/AnimatedCat', (req, res, next) =>{
    res.sendFile(ImagesPathDec('animated_cat.gif'));
});


router.get('/AnimatedCrow2', (req, res, next) =>{
    res.sendFile(ImagesPathDec('animated_crow2.gif'));
});

router.get('/AnimatedCrow', (req, res, next) =>{
    res.sendFile(ImagesPathDec('animated_crow.gif'));
});

router.get('/AnimatedPlant', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Misc_pottedplant.gif'));
});


router.get('/Bar_Left', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Bar_Left.png'));
});

router.get('/Bar_Middle', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Bar_Middle.png'));
});

router.get('/Bar_Right', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Bar_Right.png'));
});

router.get('/Beje_Plant', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Beje_Plant.png'));
});

router.get('/Purple_Plant', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Purple_Plant.png'));
});

router.get('/Chair_Back', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Chair_Back.png'));
});

router.get('/Chair_Front', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Chair_Front.png'));
});

router.get('/Cushion_Chair', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Cushion_Chair.png'));
});

router.get('/Long_Table', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Long_Table.png'));
});

router.get('/Simple_Table', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Simple_Table.png'));
});

router.get('/Round_Table', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Round_Table.png'));
});

router.get('/Machine_Karaoke', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Machine_Karaoke.png'));
});

router.get('/Television', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Television.png'));
});

router.get('/Television_Corner', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Television_Corner.png'));
});

router.get('/Oven', (req, res, next) =>{
    res.sendFile(ImagesPathDec('Oven.png'));
});

//Igredients\\

router.get('/Tuna', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Tuna.png'));
});

router.get('/Shrimp', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Shrimp.png'));
});

router.get('/Cacoa', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Cacoa.png'));
});

router.get('/Cherry', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Cherry.png'));
});

router.get('/Eggs', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Eggs.png'));
});

router.get('/Pasta', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Pasta.png'));
});

router.get('/Tuna', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Tuna.png'));
});

router.get('/Rice', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Rice.png'));
});

router.get('/Water', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Water.png'));
});

router.get('/Oliva_Oil', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Oliva_Oil.png'));
});

router.get('/Bread', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Bread.png'));
});


router.get('/Tuna', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Tuna.png'));
});

router.get('/Flour', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Flour.png'));
});

router.get('/Noodles', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Noodles.png'));
});

router.get('/Bread_Omelet', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Bread_Omelet.png'));
});

router.get('/Tuna_Sushi', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Tuna_Sushi.png'));
});

router.get('/Shrimp_Sushi', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Shrimp_Sushi.png'));
});

router.get('/Chocolate_Cake', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Chocolate_Cake.png'));
});

router.get('/Cherry_Pie', (req, res, next) =>{
    res.sendFile(ImagesPathCooK('Cherry_Pie.png'));
});

module.exports = router;