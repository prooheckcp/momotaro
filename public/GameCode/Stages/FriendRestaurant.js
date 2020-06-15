
//Variables\\

    //The user ID of the frined
    let FriendID = 1;

    //The restaurant stats of the friend
    let FriendStats = {
        level: 1,
        exp: 0,
        name: 'N/A',
        resname: 'N/A'
    };

    //The friend furniture
    let FriendFurniture = [];
//----------\\

//UI elements\\

    //Button that sets you back to the friend list
    let GoBackButton;

//------------\\

const SetupFriendRestaurant = () =>{

    GoBackButton = new NewButton( 0, 0, 0, 0, DefaultRedButton);

};

const DrawFriendRestaraunt = () =>{


    //Draw the restaurant structure\\

        //The floor and top wall
        for(let i = 0;  i < RestaurantDefaultData.TilesX ;i++){

            //Draw the top wall
            image(brickWallTile, (windowWidth/2 - RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + (i * RestaurantDefaultData.TilesSize), (windowHeight/2 - (RestaurantDefaultData.TilesY)/2 * RestaurantDefaultData.TilesSize) - RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);

            for(let j = 0; j < RestaurantDefaultData.TilesY; j++){

                //Draw the Floor
                DrawFloorTile(i, j); 
            };
        };


        //The right and left walls
        for(let j = 0; j < RestaurantDefaultData.TilesY + 1; j++){

            //Left Side of the wall
            image(leftWallTile, (windowWidth/2 - RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) - RestaurantDefaultData.TilesSize, (windowHeight/2 - (RestaurantDefaultData.TilesY)/2 * RestaurantDefaultData.TilesSize) - RestaurantDefaultData.TilesSize + (RestaurantDefaultData.TilesSize * j), RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
                
            //Right Side of the wall
            image(rightWallTile, (windowWidth/2 + RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize), (windowHeight/2 - (RestaurantDefaultData.TilesY)/2 * RestaurantDefaultData.TilesSize) - RestaurantDefaultData.TilesSize + (RestaurantDefaultData.TilesSize * j), RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        };

        //Right bottom corner
        image(rightCornerTile, windowWidth/2 + (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize), windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize) ,RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        
        //Left bottom corner
        image(leftCornerTile, windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) - RestaurantDefaultData.TilesSize, windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize) ,RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        
        //Left Side of entrance Door
        image(woodFloorTile, windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) , windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize) ,RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        image(leftEntranceTile, windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) , windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize) ,RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        
        //Right Side of entrance Door
        image(woodFloorTile, windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + RestaurantDefaultData.TilesSize, windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize) ,RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        image(rightEntranceTile, windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + RestaurantDefaultData.TilesSize, windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize) ,RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);

        for(let i = 2; i <RestaurantDefaultData.TilesX; i++){

            //Bottom side wall
            image(blueWallTile, windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + (RestaurantDefaultData.TilesSize * i), windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize), RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        };
    //------------------------------\\


    //Draw the furniture\\

        for(let localF of FriendFurniture){
            let localFpos = CalculateRestaurantTile(localF.item_x, localF.item_y);
            let localFob = FilterFurnitureByID(localF.item_id);
            image(localFob.image, localFpos.x, localFpos.y + 64 - localFob.image.height);
        };
    //-------------------\\


    //Draw the friend restaurant UI
    DrawFriendUI();

};

const DrawFriendUI = () =>{

    //XP bar\\

        //Background of the bar
        fill(0);  
        rect(60, 30, 325, 50, 10);

        //Fill part
        fill(186, 7, 222);
        rect(60, 30, (FriendStats.exp * 325)/CalculateRequiredEXP(FriendStats.level), 50, 10);
        fill(255);

        //Star //LevelMountain // levelStar
        image(LevelPortal, 60 - 50, 30 - 50 + 50/2, 100, 100);
        textAlign(CENTER, CENTER);
        textSize(25);
        BetterText('' + FriendStats.level + '', 59, 35 + 7 +50/2 );    

        textSize(25);
        BetterText('' + restaurantStats.level + '', this.x-1, this.y + 10 +this.h/2 );

        if(CheckIfMouseInRect({x: 60, y: 30, w: 325, h: 50}, mouseX, mouseY)){
            textSize(28);
            textAlign(CENTER, CENTER);
            BetterText('Exp: ' + FriendStats.exp + '/' + CalculateRequiredEXP(FriendStats.level), 60 + 325/2, 30 + 50/2);
        };

    //-------\\


    //Name displayer\\

        textSize(25);
        let OwnerNameDisplayer = FriendStats.name + "'s restaurant";
        let LocalW = textWidth(OwnerNameDisplayer) + 30;

        image(MoneyFrame, windowWidth - (LocalW + 60), 30, LocalW, 50);
        textAlign(CENTER, CENTER);
        textSize(25);
        BetterText(OwnerNameDisplayer, windowWidth - (LocalW + 60) + LocalW/2, 30 + 50/2);
    //---------------\\

    //Restaurant Name\\

        let RestaurantNameDisplayer = FriendStats.resname;
        let LocalW2 = textWidth(RestaurantNameDisplayer) + 30;

        image(MoneyFrame, windowWidth - (LocalW2 + 60), 80, LocalW2, 30);
        textAlign(CENTER, CENTER);
        textSize(18);
        BetterText(RestaurantNameDisplayer, windowWidth - (LocalW2 + 60) + LocalW2/2, 80 + 30/2);   
    //----------------\\

    //Go back button\\

        //Button
        GoBackButton.x = windowWidth - 250;
        GoBackButton.y = windowHeight - 100;
        GoBackButton.w = 200;
        GoBackButton.h = 50;
        GoBackButton.hovered(()=>{

            tint(150);
            GoBackButton.w += 5;
            GoBackButton.h += 5;
            GoBackButton.x -= 2.5;
            GoBackButton.y -= 2.5;
        });
        GoBackButton.draw();
        noTint();

        //Text
        textAlign(CENTER, CENTER);
        textSize(26);
        BetterText('Go back', GoBackButton.x + GoBackButton.w/2, GoBackButton.y + GoBackButton.h/2);
    //---------------\\

};

const PressedFriendRestauranat = () =>{
    GoBackButton.pressed(()=>{

        Stage = 'Map';

    });
};