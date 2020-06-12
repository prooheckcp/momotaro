//Variables\\

    //The current restaurant furniture
    let PlayerRestaurantFurniture = null; 

//----------\\
const DrawRestaurant = () => {
    
    //The floor and top wall
    for(let i = 0;  i < RestaurantDefaultData.TilesX ;i++){

            //Draw the top wall
            image(brickWallTile, (windowWidth/2 - RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + (i * RestaurantDefaultData.TilesSize), (windowHeight/2 - (RestaurantDefaultData.TilesY)/2 * RestaurantDefaultData.TilesSize) - RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);

        for(let j = 0; j < RestaurantDefaultData.TilesY; j++){

            //Draw the Floor
            DrawFloorTile(i, j); 
        };
    };

    if(PlayerRestaurantFurniture == null){

        //Debounce to avoid unwanted updates
        PlayerRestaurantFurniture = true;

        //Load the player furniture
        UpdateRestaurantRequest();

    }else if(typeof(PlayerRestaurantFurniture) == typeof([])){

        if(Stage == 'Decoration'){

            //Draws the green tiles on which the furniture can be place
            for(let i = 0;  i < RestaurantDefaultData.TilesX ;i++){
                for(let j = 0; j < RestaurantDefaultData.TilesY; j++){

                let LocalPositions = CalculateRestaurantTile(i, j);

                if(i == MouseOnTile.x && j == MouseOnTile.y){
                //Yellow
                fill(203, 214, 0, 150);
                }else{
                //Green
                fill(43, 232, 0, 25);
                };
                rect(LocalPositions.x, LocalPositions.y, RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
                fill(255, 255, 255, 120);
                textAlign(CENTER, CENTER);
                textSize(20);
                //text(i + ', ' +  j , LocalPositions.x + RestaurantDefaultData.TilesSize/2, LocalPositions.y + RestaurantDefaultData.TilesSize/2);
                };
            };
        };

        //Draw the furniture in case that it finds it
        for(let localF of PlayerRestaurantFurniture){
            let localFpos = CalculateRestaurantTile(localF.item_x, localF.item_y);
            let localFob = FilterFurnitureByID(localF.item_id);
            image(localFob.image, localFpos.x, localFpos.y + 64 - localFob.image.height);
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
    }

};

//A simple function that calculates the tile position based on its number on the matriz
const CalculateRestaurantTile = (tileX, tileY) =>{

    let LocalXFormula = windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + (tileX * RestaurantDefaultData.TilesSize);
    let LocalYFormula = windowHeight/2 - (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize) + (tileY * RestaurantDefaultData.TilesSize);
    return {x: LocalXFormula, y: LocalYFormula};

};

