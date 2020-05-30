//Restaurant default stats\\

    let RestaurantDefaultData = {
        TilesX : 0,
        TilesY : 0,
        TilesSize : 0
    };
//-------------------------\\

let DrawFloorTile = (i, j) =>{

    //The size of the tile
    let LocalTileSize = RestaurantDefaultData.TilesSize;
    
    //Tile X position
    let LocalX = (windowWidth/2 - RestaurantDefaultData.TilesX/2 * LocalTileSize)  + (i * RestaurantDefaultData.TilesSize);
    
    //Tile Y position
    let LocalY = (windowHeight/2 - RestaurantDefaultData.TilesY/2 * LocalTileSize) + (j * RestaurantDefaultData.TilesSize);
    
    //Draws a single woodplank tile on the required position
    image(woodFloorTile, LocalX, LocalY, LocalTileSize, LocalTileSize);
};

const SetupRestaurant = () => {


    //Gets the default restaurant stats: Size of the tiles and the amount of tiles on X and Y
    loadJSON('/get/RestaurantDefaultData', (data) => {
        
        //Restaurant X size
        RestaurantDefaultData.TilesX = data.sizeX;

        //Restaurant Y size
        RestaurantDefaultData.TilesY = data.sizeY;

        //Restaurant tiles size
        RestaurantDefaultData.TilesSize = data.tilesSize;

    });

};