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

    httpPost('/post/levelUp', {id: UserID}, data =>{

        let LocalData = eval(data)[0];
        print(LocalData);

        if(LocalData.no != undefined){
            print('Did not level up');
        }else if(LocalData.yes != undefined){
            //The player leveled up!
            LevelUpAnimation(LocalData.yes);
            UpdateRestaurantStats();
        }
        

    });

};


const LevelUpAnimation = level =>{
    print('leveld up to: ' + level);
};