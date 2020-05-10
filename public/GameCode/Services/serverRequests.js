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
  
};

const NpcPay = amount =>{
  
  httpPost('/post/NpcPay', {id : UserID, money: amount}, data =>{
    NpcGiveMoney();
  });

};

const NpcConsume = () =>{
  
  httpPost('/post/NpcConsume', {id : UserID, dishes: amount}, data =>{
    NpcConsumeDish();
  });
  
};
