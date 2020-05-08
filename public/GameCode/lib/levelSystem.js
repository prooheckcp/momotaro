const CalculateRequiredEXP = level =>{
    let Result;
    if(level == 1){
       Result = 10 * level;         
    }else{
        Result = 10 + (10 * level) + (10 * (level - 1))
    }
    
    return Result;
};

const CheckIfLevelUp = () =>{

    httpPost('/post/levelUp', {id: UserID, Nexp: CalculateRequiredEXP(restaurantStats.level)}, data =>{

        if(data == 'yes'){
            UpdateRestaurantStats();
        }
        

    });

};