let RestaurantDefaultData = {
    TilesX : 0,
    TilesY : 0,
    TilesSize : 0
};

let DrawFloorTile = (i, j) =>{

    let LocalTileSize = RestaurantDefaultData.TilesSize;
    let LocalX = (windowWidth/2 - RestaurantDefaultData.TilesX/2 * LocalTileSize)  + (i * RestaurantDefaultData.TilesSize);
    let LocalY = (windowHeight/2 - RestaurantDefaultData.TilesY/2 * LocalTileSize) + (j * RestaurantDefaultData.TilesSize);
    
    image(woodFloorTile, LocalX, LocalY, LocalTileSize, LocalTileSize);
};

const SetupRestaurant = () => {



    loadJSON('/get/RestaurantDefaultData', (data) => {
        
        RestaurantDefaultData.TilesX = data.sizeX;
        RestaurantDefaultData.TilesY = data.sizeY;
        RestaurantDefaultData.TilesSize = data.tilesSize;

    });

};