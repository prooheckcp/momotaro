//Variables\\
let NPCconfiguration = {
  npcSize : {x: 50, y: 50},
  defaultTime: 15,
  MaxWaitingTime: 30
};

//Objects on which NPCs can sit

const ObjectsThatAreSittable = ['ch_fr', 'ch_ba', 'cu_ch'];

//Prestige Points
let CurrentPrestigePoints = 0;
let TimeBetweenEachNPC = 1000;
//----------\\

//Debounces\\
let NPCcreationDebounce = true;
//----------\\

//Keep track of time
let TimePassed = 0;
let LastNPC = 0;

//The current NPCS
let NPCsInTheRestaurant = [];


function Npcsetup() {
  
}

function DrawNpc() {


  //Check on how much time has passed
  TimePassed += deltaTime/1000

  //Create a new NPC
  if(LastNPC + TimeBetweenEachNPC < TimePassed && NPCcreationDebounce){
    NPCcreationDebounce = false;
    CreateNewNPC();
  }

  //Draw the NPCs on the screen
  for(let i = 0; i < NPCsInTheRestaurant.length; i++){

    //Assign the NPC variable
    let NPC = NPCsInTheRestaurant[i];

    //NPC position
    let NPCwaitingPosition = {
      x: windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + RestaurantDefaultData.TilesSize + ((i * (NPCconfiguration.npcSize.x + 20))),
      y: windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize) + RestaurantDefaultData.TilesSize
    };

    //Check if the mouse is located on the NPC
    if(mouseX > NPCwaitingPosition.x && mouseX < NPCconfiguration.npcSize.x + NPCwaitingPosition.x && mouseY > NPCwaitingPosition.y && mouseY < NPCwaitingPosition.y + NPCconfiguration.npcSize.y){
      NPC.beingHovered = true;
    }else{
      NPC.beingHovered = false;
    };


    //Draw the NPC
    if(NPC.NPCskin == null){
      if(NPC.selected){fill(250, 233, 0)}else{fill(255)};

      //Decide the position
      if(!NPC.sit){
        rect(NPCwaitingPosition.x, NPCwaitingPosition.y, NPCconfiguration.npcSize.x, NPCconfiguration.npcSize.y);
      }else{
        rect(NPC.chairPos.x , NPC.chairPos.y, NPCconfiguration.npcSize.x, NPCconfiguration.npcSize.y);
      }

    }else{
      image(NPC.NPCskin, NPCwaitingPosition.x, NPCwaitingPosition.y, NPCconfiguration.npcSize.x, NPCconfiguration.npcSize.y);
    }

    //If the time ran out then delete the NPC
    if(NPC.enteredTime + NPCconfiguration.MaxWaitingTime < TimePassed){
      let LocalNPCindex = NPCsInTheRestaurant.indexOf(NPC);
      NPCsInTheRestaurant.remove(NPC);
    }


  };

};

//Creates a new random NPC
const CreateNewNPC = () => {

  print('A new NPC was created');

  //Update the dishes inventory
  UpdateDishesInventory();

  let LocalToBeSentData = {
    NPCskin: null,
    x: 0,
    y: 0,
    enteredTime: TimePassed,
    sit : false,
    selected: false,
    chairPos: {x: 0, y: 0},
    beingHovered : false
  }

  LastNPC = TimePassed; 
  NPCsInTheRestaurant.push(LocalToBeSentData);
  NPCcreationDebounce = true;
}

function NpcPressed(){
  
  //Select a NPC
  for(let NPC of NPCsInTheRestaurant){
    if(NPC.beingHovered){

      let LocalInitialState = NPC.selected;

      //Remove the selected from other NPCs
      for(let NPC2 of NPCsInTheRestaurant){
        NPC2.selected = false;
      }

      //Set the correct NPC as selected
      NPC.selected = !LocalInitialState;
    };
  }
  let ClickedObject = CheckObjectOnTile();

  for(let NPC of NPCsInTheRestaurant){

    let SomeoneIsSittingThere = true;
    //Check if the object exists
    if(typeof(ClickedObject) != typeof('String')){

      //Check if the NPC is already in a chair 
      if(!NPC.sit){

        //Break the loop in case there is no selected NPC
          let AtLestOneHoveredNPC = false;
          for(let NPC of NPCsInTheRestaurant){
            if(NPC.selected){
              AtLestOneHoveredNPC = true
            };
          };
          if(!AtLestOneHoveredNPC){
            break;
          };

          //Check if there was already someone sitting on that table
          for(let NPC of NPCsInTheRestaurant){

            let LocalMousePos = CalculateRestaurantTile(MouseOnTile.x, MouseOnTile.y);
            if(NPC.chairPos.x  == LocalMousePos.x && NPC.chairPos.y == LocalMousePos.y){
              alert('There is already a user in this chair');
              SomeoneIsSittingThere = false;
            };

          };

        //Check the object type
        for(let chair of ObjectsThatAreSittable){

          if(chair == ClickedObject.item_id){

            //If the chair exists check if the NPC is selected
            if(NPC.selected == true && NPC.sit == false && SomeoneIsSittingThere){

              //Set a NPC position and variables
              NPC.selected = false;
              NPC.sit = true;

              //The position of the chair
              NPC.chairPos = CalculateRestaurantTile(MouseOnTile.x, MouseOnTile.y);
              print('Sitted a NPC')
            }
          }
        }
      };
    }
  };

}

const UpdatePrestigePoints = () =>{
  CurrentPrestigePoints = 0;
  for(let item of PlayerRestaurantFurniture){
    CurrentPrestigePoints += FilterFurnitureByID(item.item_id).reputation;
  };

  //Calculate the time between each NPC
  TimeBetweenEachNPC = NPCconfiguration.defaultTime * Math.pow((1/1.05), CurrentPrestigePoints * 0.01);

};

const CheckObjectOnTile = mousePositions =>{
  mouseOnTileFun();
  //The item on that tile
  let LocalTileItem = 'Nothing';
  for(let item of PlayerRestaurantFurniture){

    if(item.item_x == MouseOnTile.x && item.item_y == MouseOnTile.y){
      LocalTileItem = item;
    }

  }

 return LocalTileItem;


};
