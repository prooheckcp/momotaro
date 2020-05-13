const UpdateRestaurantRequest = () => {
    httpPost('/post/getDecoration', {id: UserID}, data =>{
        let LocalData = eval(data)
        PlayerRestaurantFurniture = [];
        if(typeof(LocalData) == typeof([])){
          for(let LocalF of LocalData){
              PlayerRestaurantFurniture.push(LocalF);
          };
        }
    });
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
