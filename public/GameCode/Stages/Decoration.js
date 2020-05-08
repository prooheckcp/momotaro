//Variables\\
let inventory = null; //The player inventory, if null it will auto update to the current inventory, else it will just be updated when called
let furniture = []; //All the classes of the furniture
let LocalBottomFramePage = 1; //The page of items that is currently being displayed
let LocalBottomFrameOffSet = 0; //The offset in case I wanna polish this
let MouseOnTile = {x: null, y: null}; //If the mouse is on a restaurant tile the x and y will change to its number, else they will be kept as null

//Buttons\\
let LeftYellowArrowButton;
let RightYellowArrowButton;
let AcceptDecorationButton;

const DecorationSetUp = () => {
  /////////////////UI\\\\\\\\\\\\\\\\\
  LeftYellowArrowButton =  new NewButton(windowWidth/2 - 400, windowHeight - 137.5 + LocalBottomFrameOffSet, 50, 100, LeftYellowArrow);
  RightYellowArrowButton =  new NewButton(windowWidth/2 + 350, windowHeight - 137.5 + LocalBottomFrameOffSet, 50, 100, RightYellowArrow);
  AcceptDecorationButton = new NewButton(windowWidth/2 + 400, windowHeight - 75 , 75, 75, CircleButtonCheck)
  //////////////////\\\\\\\\\\\\\\\\\\
  
  ////////////Actual Decoration\\\\\\\\\\\\
  //Round Table
  furniture.push(new NewFurniture('ro_ta' /*ID*/, rou_tab_Image /*Img*/, 10 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 100/*price*/, 'Round table' /*name*/));
  furniture.push(new NewFurniture('ch_fr' /*ID*/, cha_fro_Image /*Img*/, 10 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 100/*price*/, 'Front Chair' /*name*/));
  furniture.push(new NewFurniture('ch_ba' /*ID*/, cha_bac_Image /*Img*/, 10 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 100/*price*/, 'Back Chair' /*name*/));
  furniture.push(new NewFurniture('cu_ch' /*ID*/, cha_cus_Image /*Img*/, 20 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 200/*price*/, 'Cushion Chair' /*name*/));
  furniture.push(new NewFurniture('mi_po' /*ID*/, animated_plant /*Img*/, 30 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 300/*price*/, 'Potted plant' /*name*/));
  furniture.push(new NewFurniture('an_cr' /*ID*/, animated_crow /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Crow' /*name*/));
  furniture.push(new NewFurniture('an_cr2' /*ID*/, animated_crow2 /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Sitting Crow' /*name*/));
  ////////////////////\\\\\\\\\\\\\\\\\\\\\
  
 
};
  

const DecorationDraw = () =>{

  //Check where the mouse is
  mouseOnTileFun();
  //The green tile to place items :3
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
      fill(255, 255, 255, 255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text(i + ', ' +  j , LocalPositions.x + RestaurantDefaultData.TilesSize/2, LocalPositions.y + RestaurantDefaultData.TilesSize/2);
    };
  };


  

  //Update the inventory
  if (inventory == null){
    inventory = [];
    UpdateInventoryRequest();
    
  }else if(typeof(inventory) == typeof([])){


  //The bottom frame\\
  image(BottomFrame, windowWidth/2 - 400 , windowHeight - 150 + LocalBottomFrameOffSet, 800, 125);
  //Accept changes button\\
  let AcceptDecorationButtonBeingHovered = false;
  AcceptDecorationButton.w = 75;
  AcceptDecorationButton.h = 75;
  AcceptDecorationButton.x = windowWidth/2 + 425;
  AcceptDecorationButton.y = windowHeight - 125 + LocalBottomFrameOffSet
  AcceptDecorationButton.hovered(()=>{
    AcceptDecorationButton.w = 90;
    AcceptDecorationButton.h = 90;
    AcceptDecorationButton.x = windowWidth/2 + 417.5;
    AcceptDecorationButton.y = windowHeight - 132.5 + LocalBottomFrameOffSet;
    AcceptDecorationButtonBeingHovered = true;
    tint(190, 190, 59);
  });
  AcceptDecorationButton.draw();

  if(AcceptDecorationButtonBeingHovered){
    UIinfo('Accept');
  };

  noTint();
  //Arrow buttons\\
  LeftYellowArrowButton.hovered(() => {tint(125, 123, 0);});
  
  if(LocalBottomFramePage > 1){
    LeftYellowArrowButton.draw();
  }
  noTint();
  RightYellowArrowButton.hovered(() => {tint(125, 123, 0);});
  
  if(inventory.length > LocalBottomFramePage * 6){
    RightYellowArrowButton.draw();
  }
  noTint();

    //Show the items
    for(let i = 0 + (LocalBottomFramePage - 1) * 6; i < 6 + (LocalBottomFramePage - 1) * 6; i++){
      let LocalItem = inventory[i];
      let j = i - 6 * (LocalBottomFramePage - 1);
      
      if(LocalItem != null){
        //DRAW THE ITEM SLOT UwU
        let LocalFurniture = FilterFurnitureByID(LocalItem.item_id);
        LocalFurniture.x = windowWidth/2 - 350 + (j * (100 + 100/7)) + (100/7);
        LocalFurniture.y = windowHeight - 137.5;
        LocalFurniture.drawSlot(LocalItem.item_amount);

      };
      
    };

  };

};

const mouseOnTileFun = () => {

  let LocalMouseIsOnTile = false;

  for(let i = 0;  i < RestaurantDefaultData.TilesX ;i++){
    for(let j = 0; j < RestaurantDefaultData.TilesY; j++){

     let LocalTilePos = CalculateRestaurantTile(i, j)

    if(mouseX > LocalTilePos.x && mouseX < LocalTilePos.x + RestaurantDefaultData.TilesSize && mouseY > LocalTilePos.y && mouseY < LocalTilePos.y + RestaurantDefaultData.TilesSize){
      MouseOnTile.x = i;
      MouseOnTile.y = j;
      LocalMouseIsOnTile = true;
    }

    };
  };

  if(!LocalMouseIsOnTile){
    MouseOnTile.x = null;
    MouseOnTile.y = null;
  };


};
  

const DecorationMousePressed = () =>{
  
  //To remove dec from your restaurant
  if(MouseOnTile.x != null && MouseOnTile.y != null){
    for(let LocalF of PlayerRestaurantFurniture){
      if(MouseOnTile.x == LocalF.item_x && MouseOnTile.y == LocalF.item_y){
        
        PlayerRestaurantFurniture.splice(PlayerRestaurantFurniture.indexOf(LocalF), 1)

        httpPost('/post/removeFromRestaurant', {item : LocalF, id : UserID}, data =>{
          UpdateInventoryRequest();
          UpdateRestaurantRequest();
          
        });
      };
    }

  }

  RightYellowArrowButton.pressed(() =>{
    if(inventory.length > LocalBottomFramePage * 6){
      LocalBottomFramePage += 1
    };
  });

  LeftYellowArrowButton.pressed(() =>{
    if(LocalBottomFramePage > 1){
      LocalBottomFramePage -= 1
    };
  });



  //The accept button which changes the stage
  AcceptDecorationButton.pressed(()=>{
    Stage = 'Default';
  });


  //The click event of the items displayed on the inventory
  for(let i = 0; i < inventory.length; i++) {

    let LocalJ = i + ((LocalBottomFramePage - 1) * 6);

    if(LocalJ < LocalBottomFramePage * 6){
      
      if(LocalJ < inventory.length){
        FilterFurnitureByID(inventory[LocalJ].item_id).pressed();
      };
    }
  };


};

const DecorationMouseReleased = () =>{     

  for(let localF of furniture){
    localF.released();
  };

};

const MenuText = () => {

}


/*
⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
When your spaghetthi code works
*/

/*
⣿⣿⣿⣿⣿⣿⣿⡿⡛⠟⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠿⠨⡀⠄⠄⡘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠿⢁⠼⠊⣱⡃⠄⠈⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡿⠛⡧⠁⡴⣦⣔⣶⣄⢠⠄⠄⠹⣿⣿⣿⣿⣿⣿⣿⣤⠭⠏⠙⢿⣿⣿⣿⣿⣿
⣿⡧⠠⠠⢠⣾⣾⣟⠝⠉⠉⠻⡒⡂⠄⠙⠻⣿⣿⣿⣿⣿⡪⠘⠄⠉⡄⢹⣿⣿⣿⣿
⣿⠃⠁⢐⣷⠉⠿⠐⠑⠠⠠⠄⣈⣿⣄⣱⣠⢻⣿⣿⣿⣿⣯⠷⠈⠉⢀⣾⣿⣿⣿⣿
⣿⣴⠤⣬⣭⣴⠂⠇⡔⠚⠍⠄⠄⠁⠘⢿⣷⢈⣿⣿⣿⣿⡧⠂⣠⠄⠸⡜⡿⣿⣿⣿
⣿⣇⠄⡙⣿⣷⣭⣷⠃⣠⠄⠄⡄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣧⣁⣿⡄⠼⡿⣦⣬⣰⣿
⣿⣷⣥⣴⣿⣿⣿⣿⠷⠲⠄⢠⠄⡆⠄⠄⠄⡨⢿⣿⣿⣿⣿⣿⣎⠐⠄⠈⣙⣩⣿⣿
⣿⣿⣿⣿⣿⣿⢟⠕⠁⠈⢠⢃⢸⣿⣿⣶⡘⠑⠄⠸⣿⣿⣿⣿⣿⣦⡀⡉⢿⣧⣿⣿
⣿⣿⣿⣿⡿⠋⠄⠄⢀⠄⠐⢩⣿⣿⣿⣿⣦⡀⠄⠄⠉⠿⣿⣿⣿⣿⣿⣷⣨⣿⣿⣿
⣿⣿⣿⡟⠄⠄⠄⠄⠄⠋⢀⣼⣿⣿⣿⣿⣿⣿⣿⣶⣦⣀⢟⣻⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡆⠆⠄⠠⡀⡀⠄⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡿⡅⠄⠄⢀⡰⠂⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

Oh oh, so you're aproaching my code?
*/