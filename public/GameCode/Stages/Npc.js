//Variables\\
let NPCconfiguration = {
  npcSize : {x: 50, y: 50},
  defaultTime: 120,
  MaxWaitingTime: 60
};

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
const NPCsInTheRestaurant = [];


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
  for(let NPC of NPCsInTheRestaurant){

    //If the time ran out then delete the NPC
    if(NPC.enteredTime + NPCconfiguration.MaxWaitingTime < TimePassed){
      let LocalNPCindex = NPCsInTheRestaurant.indexOf(NPC);
      NPCsInTheRestaurant.slice(LocalNPCindex, 1);
      print('Deleted an NPC');
      print(NPCsInTheRestaurant);
    }


    //Draw the NPC
    if(NPC.NPCskin == null){
      rect(windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + RestaurantDefaultData.TilesSize, windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize), NPCconfiguration.npcSize.x, NPCconfiguration.npcSize.y);
    }else{
      image(NPC.NPCskin, windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + RestaurantDefaultData.TilesSize, windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize), NPCconfiguration.npcSize.x, NPCconfiguration.npcSize.y);
    }

  };

};

//Creates a new random NPC
const CreateNewNPC = () => {

  print('A new NPC was created');

  let LocalToBeSentData = {
    NPCskin: null,
    x: windowWidth/2 - (RestaurantDefaultData.TilesX/2 * RestaurantDefaultData.TilesSize) + RestaurantDefaultData.TilesSize,
    y: windowHeight/2 + (RestaurantDefaultData.TilesY/2 * RestaurantDefaultData.TilesSize),
    enteredTime: TimePassed
  }



  LastNPC = TimePassed; 
  NPCsInTheRestaurant.push(LocalToBeSentData);
  NPCcreationDebounce = true;
  print(NPCsInTheRestaurant);
}

function NpcPressed(){
  print(CheckObjectOnTile());
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
// MouseOnTile