let PlayerRestaurantFurniture = null; //Table of restaurant objects that are currently in place :3

const DrawRestaurant = () => {
    

    //The floor and top wall
    for(let i = 0;  i < RestaurantDefaultData.TilesX ;i++){
            //Wall
            image(brickWallTile, (windowWidth/2 - RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + (i * RestaurantDefaultData.TilesSize), (windowHeight/2 - (RestaurantDefaultData.TilesY)/2 * RestaurantDefaultData.TilesSize) - RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
        for(let j = 0; j < RestaurantDefaultData.TilesY; j++){

           
            //Floor
            DrawFloorTile(i, j); 
        };
    };

    if(PlayerRestaurantFurniture == null){
        PlayerRestaurantFurniture = true;
        UpdateRestaurantRequest();
    }else if(typeof(PlayerRestaurantFurniture) == typeof([])){
        for(let localF of PlayerRestaurantFurniture){
            let localFpos = CalculateRestaurantTile(localF.item_x, localF.item_y);
            let localFob = FilterFurnitureByID(localF.item_id)

            image(localFob.image, localFpos.x, localFpos.y, 64, 64);
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
        image(blueWallTile, windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + (RestaurantDefaultData.TilesSize * i), windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize), RestaurantDefaultData.TilesSize, RestaurantDefaultData.TilesSize);
    }

};


const CalculateRestaurantTile = (tileX, tileY) =>{

    let LocalXFormula = windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + (tileX * RestaurantDefaultData.TilesSize);
    let LocalYFormula = windowHeight/2 - (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize) + (tileY * RestaurantDefaultData.TilesSize);
    return {x: LocalXFormula, y: LocalYFormula};

};

