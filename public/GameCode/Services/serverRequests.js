//The purchase of a dish
const NPCbuyDish = (dishID, NPC) =>{

  httpPost('/post/ConsumeDish', 'json', {id: UserID, DishID: dishID}, data =>{

    if(data.status == 'ok'){
      print('yummi :)')
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

//Updates the user inventory
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

const UpdateRestaurantStats = () =>{
  httpPost('/post/getRestaurantStats', {id: UserID}, data => {
    let LocalData = eval(data)[0];

    restaurantStats.exp = LocalData.exp;
    restaurantStats.level = LocalData.level;
    restaurantStats.money = LocalData.money;

  })
}

const GiveExp = amount => {
  httpPost('/post/giveExp', {id : UserID, exp : amount}, data =>{
    UpdateRestaurantStats();
    CheckIfLevelUp();
  });
};

const GiveMoney = amount =>{
  httpPost('/post/giveMoney', {id : UserID, money: amount}, data =>{
    UpdateRestaurantStats();
  });
};


const UpdateLeaderBoard = () =>{
  loadJSON('/get/top50players', data =>{
    let LocalDataPlayers = eval(data);
    TopLevelPlayers = [];
    for(let playerRes of LocalDataPlayers){
      TopLevelPlayers.push(playerRes);
    };
  });
};


const UpdateDish = () =>{
  httpPost('/post/UpdateDishAm', {id : UserID, dishes: amount}, data =>{
    UpdateDishAmount();
  });
};


const UpdateDecorationMarketPlace = () =>{
  loadJSON('/get/DecorationMarket' , data =>{

      //Reset the array
      DecorationList = [];

      for(let item of data){
          DecorationList.push(item);
      };
  });
};


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

  httpPost('/post/getRecipesInventory', {userID: UserID}, data =>{

    let LocalData = eval(data);
    recipesInventory = [];

    for(let recipe of LocalData){
      recipesInventory.push(recipe);
    }

  });

};

const GetDishLevel = dish_id =>{
  for(let recipe of dishesLevels){

    if(dish_id == recipe.dish_id){
      return recipe.recipe_level;
    }

  };
};

const NpcConsume = () =>{
  
  httpPost('/post/NpcConsume', {id : UserID, dishes: amount}, data =>{
    NpcConsumeDish();
  });
  
};


const UpdateDishesInventory = () =>{
  httpPost('/post/getInventoryDishes', {id: UserID}, data => {
    
    let LocalData = eval(data);

    dishesInventory = [];

    for(dish of LocalData){
      dishesInventory.push(dish);
    };

  });
};


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