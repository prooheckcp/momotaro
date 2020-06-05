//Consume a dish
const NPCbuyDish = (dishID, NPC) =>{

  httpPost('/post/ConsumeDish', 'json', {id: UserID, DishID: dishID}, data =>{

    if(data.status == 'ok'){
      print('yummi :)');
      NpcPaySound.volume = VolEffectsValue;
      NpcPaySound.play();
      //Remove the NPC and update the stats
      UpdateIngredientsInventory();
      UpdateRestaurantStats();
      CheckIfLevelUp();
      
      setTimeout(() => {
        NPCsInTheRestaurant.remove(NPC);
      }, 2000);

    }else{
      //Alert the console
      print(LocalStatusResult.status);
    };          

  });

};

//Get the decoration of the restaurant
const UpdateRestaurantRequest = () => {

    httpPost('/post/getDecoration', {id: UserID}, data =>{
        let LocalData = eval(data)
        PlayerRestaurantFurniture = [];
        if(typeof(LocalData) == typeof([])){
          for(let LocalF of LocalData){
              PlayerRestaurantFurniture.push(LocalF);
          };
          //Calculate the restaurant prestige points worth
          UpdatePrestigePoints();
        }
    });

  
    UpdateIngredientsInventory();

};

//Updates the user inventory (furniture on the user inventory)
const UpdateInventoryRequest = () =>{
    httpPost('/post/getInventory', {id : UserID}, data =>{
      let LocalData = eval(data);
  
      if(LocalData[0] != null){
        inventory = [];
        for(item of LocalData){
          inventory.push(item);
        };
      };
  
    });
  };

//Update the EXP, level and money
const UpdateRestaurantStats = () =>{
  httpPost('/post/getRestaurantStats', {id: UserID}, data => {
    let LocalData = eval(data)[0];

    restaurantStats.exp = LocalData.exp;
    restaurantStats.level = LocalData.level;
    restaurantStats.money = LocalData.money;

  })
}

//Give exp function
const GiveExp = amount => {
  httpPost('/post/giveExp', {id : UserID, exp : amount}, data =>{
    UpdateRestaurantStats();
    CheckIfLevelUp();
  });
};

//Give money function
const GiveMoney = amount =>{
  httpPost('/post/giveMoney', {id : UserID, money: amount}, data =>{
    UpdateRestaurantStats();
  });
};

//Update the top 50 players of the leaderboard
const UpdateLeaderBoard = () =>{
  loadJSON('/get/top50players', data =>{
    let LocalDataPlayers = eval(data);
    TopLevelPlayers = [];
    for(let playerRes of LocalDataPlayers){
      TopLevelPlayers.push(playerRes);
    };
  });
};

//Update the dishes amount
const UpdateDish = () =>{
  httpPost('/post/UpdateDishAm', {id : UserID, dishes: amount}, data =>{
    UpdateDishAmount();
  });
};

//Get the decoration market place
const UpdateDecorationMarketPlace = () =>{
  loadJSON('/get/DecorationMarket' , data =>{

      //Reset the array
      DecorationList = [];

      for(let item of data){
          DecorationList.push(item);
      };
  });
};

//Get the ingredients market place
const UpdateIngredientsMarketPlace = () =>{
  loadJSON('/get/IngredientMarket', data =>{
    
    IgredientsList = [];

    for(let ingredient of data){
      IgredientsList.push(ingredient);
    };

  });
};


//Update the ingredients inventory, dishes inventory and the decoration inventory
const UpdateStorageInventory = () =>{


  httpPost('/post/getIngredientsInventory', {id: UserID}, data =>{

    let LocalData = eval(data);

    ingredientsInventory = [];
    for(let LocalIgredients of LocalData){

      ingredientsInventory.push(LocalIgredients);
    };


  });

  httpPost('/post/getInventory', {id : UserID}, data =>{
    let LocalData = eval(data);

    inventory = [];
    if(LocalData[0] != null){
      
      for(item of LocalData){
        inventory.push(item);
      };
    };
  });


  httpPost('/post/getInventoryDishes', {id: UserID}, data => {
    
    let LocalData = eval(data);

    dishesInventory = [];

    for(dish of LocalData){
      dishesInventory.push(dish);
    };

  });

};


//Update the ingredients on the cooking tab and the marketplace
const UpdateIngredientsInventory = () =>{
  httpPost('/post/getIngredientsInventory', {id: UserID}, data =>{

    let LocalData = eval(data);

    ingredientsInventory = [];
    for(let LocalIgredients of LocalData){

      ingredientsInventory.push(LocalIgredients);
    };


  });


  //Adds the recipes info
  loadJSON('/get/getRecipesTypes' ,data => {

    let LocalData = eval(data);

    for(let recipe of LocalData){
      dishesLevels.push(recipe);
    };

  });

//Get the recipes inventory
httpPost('/post/getRecipesInventory', {userID: UserID}, data =>{

    let LocalData = eval(data);
    recipesInventory = [];

    for(let recipe of LocalData){
      recipesInventory.push(recipe);
    }

  });

};

//Get the dish required level
const GetDishLevel = dish_id =>{
  for(let recipe of dishesLevels){

    if(dish_id == recipe.dish_id){
      return recipe.recipe_level;
    }

  };
};

//NPC consume the dish
const NpcConsume = () =>{
  
  httpPost('/post/NpcConsume', {id : UserID, dishes: amount}, data =>{
    NpcConsumeDish();
  });
  
};

//Update the dishes inventory
const UpdateDishesInventory = () =>{
  httpPost('/post/getInventoryDishes', {id: UserID}, data => {
    
    let LocalData = eval(data);

    dishesInventory = [];

    for(dish of LocalData){
      dishesInventory.push(dish);
    };

  });
};

//Check if the user has a restaurant or not
const CheckIfRestaurantExists = () =>{

  httpPost('/post/RestaurantName', {id: UserID}, data => {

    let LocalResponse = eval(data)[0];


    if (LocalResponse.status == 'no'){

      Stage = 'RestaurantName';

    }else{

      restaurantName = LocalResponse.resName;
      Stage = 'default';

    };

  });
  
};

//Update the friend related data

const UpdateFriendsData = () =>{

  //Ask the backend for the database data
  httpPost('/post/getUserFriendsData', {id : UserID}, data=>{
    let LocalData = JSON.parse(data);

      //Sent friend requests
      PendingRequests = [];
      for(row of LocalData.sent){

        //The row
        let LocalObject = {
          name: row.name,
          resname: row.resname,
          level: row.level,
          exp: row.exp,
          date: row.days,
          id: row.id,
          button: new NewButton(0, 0, 0, 0, DefaultRedButton)
        };

        //Add a new row on the array
        PendingRequests.push(LocalObject);
      };

      //Received friend requests
      friendRequests = [];
      for(row of LocalData.received){

        //The row
        let LocalObject = {
          name: row.name,
          resname: row.resname,
          level: row.level,
          exp: row.exp,
          date: row.days,
          id: row.id,
          button: new NewButton(0, 0, 0, 0, DefaultRedButton),
          button2: new NewButton(0, 0, 0, 0, DefaultRedButton)
        };

        //Add a new row on the array
        friendRequests.push(LocalObject);
        
      };


      //Friend list
      friendlist = [];
      for(row of LocalData.friendlist){

        //The row
        let LocalObject = {
          name: row.name,
          resname: row.resname,
          level: row.level,
          exp: row.exp,
          date: row.days,
          id: row.id,
          button: new NewButton(0, 0, 0, 0, DefaultRedButton),
          button2: new NewButton(0, 0, 0, 0, DefaultRedButton)
        };

        //Add a new row on the array
        friendlist.push(LocalObject);

      };

  });

};


const RemovePendingRequest = (yourid, otherID) =>{

  httpPost('/post/cancelFriendRequest', {id: yourid, other: otherID}, data =>{
    
    let LocalResult = eval(data)[0].Output;

    print(LocalResult);

    if(LocalResult == 'deleted'){

      UpdateFriendsData();
      alert(LocalResult);

    }else{

      alert(LocalResult);

    };

  });

};


const AcceptFriendRequest = (yourid, otherid) =>{

  httpPost('/post/acceptFriendRequest', {id: yourid, other: otherid}, data =>{

    //From string to json object
    let LocalData = eval(data)[0];

    //Update the windows data
    UpdateFriendsData();

    //Alert the user with some feedback
    if(LocalData.Output == 'added'){
      alert('Added new friend!')
    }else{
      alert(LocalData.Output)
    };

  });

};

const EndFriendShip = (yourid, otherid) =>{

  httpPost('/post/endFriendship', {id: yourid, other: otherid}, data =>{

    let LocalData = eval(data)[0];

    //Update the windows data
    UpdateFriendsData();

    //Alert the user with some feedback
    if(LocalData.Output == 'done'){
      alert('Removed friend!')
    }else{
      alert(LocalData.Output)
    };    

  });

};