//Variables\\

  //The player inventory (furniture to be placed not the one currently placed)
  let inventory = null;

  //All the classes of the furniture
  let furniture = []; 

  //The page of items that is currently being displayed
  let LocalBottomFramePage = 1; 
  
  //The current tile on which the mouse is located
  let MouseOnTile = {x: null, y: null};
//----------\\

//UI elements\\

  //Displays current reputation points
  let ReputationDisplayer;

  //Buttons
  let LeftYellowArrowButton;
  let RightYellowArrowButton;
  let AcceptDecorationButton;
  let DenyDecorationButton;
//------------\\

const DecorationSetUp = () => {
  
  //UI elements\\
    LeftYellowArrowButton =  new NewButton(windowWidth/2 - 400, windowHeight - 137.5, 50, 100, LeftYellowArrow);
    RightYellowArrowButton =  new NewButton(windowWidth/2 + 350, windowHeight - 137.5, 50, 100, RightYellowArrow);
    AcceptDecorationButton = new NewButton(windowWidth/2 + 400, windowHeight - 75 , 75, 75, CircleButtonCheck);
    ReputationDisplayer = new ReputationPointsDisplayer();
    DenyDecorationButton = new NewButton(0, 0, 0, 0, DenyButtonImage);
  //------------\\
  
  //The furniture classes\\
    MarketFurnitureClasses();
  //----------------------\\
  
 
};
  

const DecorationDraw = () =>{

  //Recalculate prestige points
  UpdatePrestigePoints();

  //Draw the reputation displayer
  ReputationDisplayer.x = windowWidth - 260; 
  ReputationDisplayer.y = 30;
  ReputationDisplayer.w = 200;
  ReputationDisplayer.h = 50;
  ReputationDisplayer.draw();

  //Check where the mouse is
  mouseOnTileFun();  

  
  if (inventory == null){

    //Debounce for the inventory
    inventory = [];
    //Update the inventory
    UpdateInventoryRequest();
    
  }else if(typeof(inventory) == typeof([])){

  //The bottom frame
  image(BottomFrame, windowWidth/2 - 400 , windowHeight - 150, 800, 125);

  //Accept changes button
  let AcceptDecorationButtonBeingHovered = false;
  AcceptDecorationButton.w = 75;
  AcceptDecorationButton.h = 75;
  AcceptDecorationButton.x = windowWidth/2 + 425;
  AcceptDecorationButton.y = windowHeight - 125;
  AcceptDecorationButton.hovered(()=>{
    AcceptDecorationButton.w = 90;
    AcceptDecorationButton.h = 90;
    AcceptDecorationButton.x = windowWidth/2 + 417.5;
    AcceptDecorationButton.y = windowHeight - 132.5;
    AcceptDecorationButtonBeingHovered = true;
    tint(190, 190, 59);
  });
  AcceptDecorationButton.draw();
  noTint();

  //Deny changes button
  let DenyDecorationButtonBeingHovered = false;
  DenyDecorationButton.w = 75;
  DenyDecorationButton.h = 75;
  DenyDecorationButton.x = windowWidth/2 + 525;
  DenyDecorationButton.y = windowHeight - 125;
  DenyDecorationButton.hovered(()=>{
    DenyDecorationButton.w = 90;
    DenyDecorationButton.h = 90;
    DenyDecorationButton.x = windowWidth/2 + 517.5;
    DenyDecorationButton.y = windowHeight - 132.5;
    DenyDecorationButtonBeingHovered = true;
    tint(190, 190, 59);
  });
  DenyDecorationButton.draw();
  noTint();

  //Hovering button message
  if(AcceptDecorationButtonBeingHovered){
    UIinfo('Accept changes');
  };

  if(DenyDecorationButtonBeingHovered){
    UIinfo('Do not make any changes');
  };

  //Arrow buttons\\
  
    //Left arrow
    if(LocalBottomFramePage > 1){

      LeftYellowArrowButton.hovered(() => {tint(125, 123, 0);});
      LeftYellowArrowButton.x = windowWidth/2 - 400;
      LeftYellowArrowButton.y = windowHeight - 137.5;
      LeftYellowArrowButton.draw();
      noTint();
    };
    
    
    //Right Arrow
    if(inventory.length > LocalBottomFramePage * 6){

      RightYellowArrowButton.hovered(() => {tint(125, 123, 0);});
      RightYellowArrowButton.x = windowWidth/2 + 350;
      RightYellowArrowButton.y = windowHeight - 137.5;
      RightYellowArrowButton.draw();
      noTint();
    };
  //--------------\\

    //Display the items
    for(let i = 0 + (LocalBottomFramePage - 1) * 6; i < 6 + (LocalBottomFramePage - 1) * 6; i++){

      //The item
      let LocalItem = inventory[i];


      
      if(LocalItem != null){

        //Calculate variable for slot position
        let j = i - 6 * (LocalBottomFramePage - 1);

        //The item slot
        let LocalFurniture = FilterFurnitureByID(LocalItem.item_id);
        LocalFurniture.x = windowWidth/2 - 350 + (j * (100 + 100/7)) + (100/7);
        LocalFurniture.y = windowHeight - 137.5;
        LocalFurniture.drawSlot(LocalItem.item_amount);

      };
      
    };

  };

};

//Calculate on which tile is the mouse at
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
        let LocalFurniture = FilterFurnitureByID(LocalF.item_id);
        LocalFurniture.amount++;

        for(let j = 0; j < inventory.length; j++){

          if(inventory[j].item_id == LocalF.item_id){
            inventory[j].item_amount++;
          };

        };

      };
    }

  }

  //Arrow buttons\\
  
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
  //--------------\\

  //Deny the restaurant changes
  DenyDecorationButton.pressed(()=>{
    Stage = 'Default';
    UpdateRestaurantRequest();
    UpdateInventoryRequest();

    for(let object of furniture){
      object.amount = null;
    };

  });
  //UpdateRestaurantRequest()

  //The accept button which changes the stage
  AcceptDecorationButton.pressed(()=>{

    Stage = 'Default';
    //Send the
    httpPost('/post/UpdateDecoration', {inv: inventory, dec: PlayerRestaurantFurniture,  id: UserID}, data =>{

    });

    
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

  //The released event of all items
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