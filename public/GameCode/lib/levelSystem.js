//Arrays
let particles = []; //Particles showing behind the start
let ArrayOfTheMessage = []; //The level up message but in array format
let UnlockedBonusLevel = ['Unlocked pee', 'Unlocked fortnite']; //The things u unlocked uppon level up

//Variables
let StarX = 0;
let MessageBehindTheStar = '';
let CurrentMessageBehindTheStar = '';
let StarBarSize = 0;

let TimeSinceBarIsMaxSize = 0;
let TimePassedOnThePopUp = 0;


let LevelUpWindow = false;
let LevelThatWasReceived = 0;

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
            ActivateLevelUpAnimation(LocalData.yes);
            UpdateRestaurantStats();
        }
        

    });

};

const ActivateLevelUpAnimation = level => {
    LevelUpWindow = true;
    LevelThatWasReceived = level;
    StarX = windowWidth;
    particles = [];
    MessageBehindTheStar = 'Leveled up to level ' + level + '!';
    StarBarSize = 0;
    CurrentMessageBehindTheStar = '';
    TimePassedOnThePopUp = 0;
    TimeSinceBarIsMaxSize = 0;
    ArrayOfTheMessage = [];

    //Check for unlocks
    ArrayOfTheMessage = [];
    
    loadJSON('/get/getRecipesTypes', data =>{

        let LocalData = eval(data);
        recipesTypes = [];
        UnlockedBonusLevel = [];
        for(let recipe of LocalData){
            recipesTypes.push(recipe);

            if(recipe.recipe_level == level){
                UnlockedBonusLevel.push('-Unlocked New Recipe: ' + recipe.recipe_name)
            };

        };

    });

    for(let letter of MessageBehindTheStar){
        ArrayOfTheMessage.push(letter);
    };

}

const LevelUpAnimation = () =>{

    TimePassedOnThePopUp += deltaTime/1000;

    if(LevelUpWindow){
        

        
        if(particles.length < 75){
            particles.push(NewParticle(StarX + 62, windowHeight/2 - 300 + 62, random(-1, 1), random(-1, 1))); 
        }
        
        for(let part of particles){
            
            if(part.transparency <= 0){
                particles.remove(part);
            }
        
            fill(255, 231, 0, part.transparency);
            part.transparency -= (deltaTime/1000) * random(100, 150);
            part.x += (deltaTime/1000) * (part.dx * random(50, 80)); 
            part.y += (deltaTime/1000) * (part.dy * random(50, 80));
            
            noStroke();
            
            rect(part.x, part.y, 10, 10);
            
        
        }
        stroke(0);
        strokeWeight(1);  


        if(StarX > windowWidth/2 - 62 - 200){
            StarX -= (deltaTime/1000) * 2000;
        }else{

            fill(0, 120);
            rect(StarX + 62, windowHeight/2 - 300 + 62 - 30, StarBarSize, 60, 10);

            if(StarBarSize < 400 && CurrentMessageBehindTheStar != MessageBehindTheStar){
                StarBarSize += (deltaTime/1000) * 500;
            }else{

                TimeSinceBarIsMaxSize += deltaTime/50;

                let CurrentSizeOfTheMessage = 0;
                for(let letter of CurrentMessageBehindTheStar){
                    CurrentSizeOfTheMessage++;
                }

                if(int(TimeSinceBarIsMaxSize) >= CurrentSizeOfTheMessage && int(TimeSinceBarIsMaxSize) < ArrayOfTheMessage.length){
                    CurrentMessageBehindTheStar = CurrentMessageBehindTheStar + ArrayOfTheMessage[int(TimeSinceBarIsMaxSize)]
                }


                textAlign(CENTER, CENTER);
                textSize(30);
                BetterText(CurrentMessageBehindTheStar, StarX + 212 + 50 + 20, windowHeight/2 - 300 + 62)
            }


        };

        //Draw the star
        image(levelStar, StarX, windowHeight/2 - 300, 124, 124);

        if(CurrentMessageBehindTheStar == MessageBehindTheStar){
            textAlign(LEFT, CENTER);
            textSize(25);
            for(let i = 0; i < UnlockedBonusLevel.length; i++){
               BetterText(UnlockedBonusLevel[i], StarX + 124, windowHeight/2 - 185 + i * 30 ) 
            }
            
        }


        //Disable after this amount of time
        //This is 8 seconds
        if(TimeSinceBarIsMaxSize > 160){
            LevelUpWindow = false;
        }

    };

};

const NewParticle = (PosX, PosY, DirectionX, DirectionY) => {
    return {x: PosX, y: PosY, dx: DirectionX, dy: DirectionY, transparency : 255};    
  }