//Arrays\\

    //Particles showing behind the star
    let particles = []; 
    
    //The level up message but in array format
    let ArrayOfTheMessage = [];
    
    //The things you unlocked uppon level up
    let UnlockedBonusLevel = []; 
//-------\\

//Variables\\

    //The start X position
    let StarX = 0;

    //The message behind the star
    let MessageBehindTheStar = '';
    let CurrentMessageBehindTheStar = '';

    //The message bar behind the star
    let StarBarSize = 0;

    //The bar behind the star size
    let TimeSinceBarIsMaxSize = 0;

    //Timer of the bar
    let TimePassedOnThePopUp = 0;

    //Display the level up window
    let LevelUpWindow = false;

    //The leved to be displayed on the message
    let LevelThatWasReceived = 0;
//----------\\


//Calculate wheter the user should or should not level up
const CalculateRequiredEXP = level =>{
    let Result;
    if(level == 1){
       Result = 10 * level;         
    }else{
        Result = 10 + (10 * level) + (10 * (level - 1))
    }
    
    return Result;
};

//Calculate wheter the user should or should not level up on the back end and level up if that is the case
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

    //Reset variables\\

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
    //----------------\\

    //Check for unlocks
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

    //Devide the message in letters for writting purposes
    for(let letter of MessageBehindTheStar){
        ArrayOfTheMessage.push(letter);
    };

}

const LevelUpAnimation = () =>{

    //Calculate the time passed
    TimePassedOnThePopUp += deltaTime/1000;

    //If the window is being displayed
    if(LevelUpWindow){
        
        //Check if the amount of particles is below 75
        if(particles.length < 75){

            //Create a new particle
            particles.push(NewParticle(StarX + 62, windowHeight/2 - 300 + 62, random(-1, 1), random(-1, 1))); 
        }
        

        for(let part of particles){
            
            //If the particle is already invisible then delete it
            if(part.transparency <= 0){
                particles.remove(part);
            }
            
            //Increase the transparency of the particles randomly
            fill(255, 231, 0, part.transparency);
            part.transparency -= (deltaTime/1000) * random(100, 150);

            //Move the particle to a random position
            part.x += (deltaTime/1000) * (part.dx * random(50, 80)); 
            part.y += (deltaTime/1000) * (part.dy * random(50, 80));
            
            //Draw the particle
            noStroke();            
            rect(part.x, part.y, 10, 10);
            
        };

        //Reset the lines
        stroke(0);
        strokeWeight(1);  

        //Check if the star already reached its end position
        if(StarX > windowWidth/2 - 62 - 200){

            //Move the star to the correctp lace on the screen
            StarX -= (deltaTime/1000) * 2000;
        }else{

            //Draws the message bar
            fill(0, 120);
            rect(StarX + 62, windowHeight/2 - 300 + 62 - 30, StarBarSize, 60, 10);

            //Check if the bar already reached its maxium size
            if(StarBarSize < 400 && CurrentMessageBehindTheStar != MessageBehindTheStar){

                //Gradually increase the message bar size
                StarBarSize += (deltaTime/1000) * 500;
            }else{

                //Calculate the amount of time passed since the bar is maxed size
                TimeSinceBarIsMaxSize += deltaTime/50;

                //The current length of the message
                let CurrentSizeOfTheMessage = 0;
                for(let letter of CurrentMessageBehindTheStar){
                    CurrentSizeOfTheMessage++;
                }


                if(int(TimeSinceBarIsMaxSize) >= CurrentSizeOfTheMessage && int(TimeSinceBarIsMaxSize) < ArrayOfTheMessage.length){
                    
                    //Write the message letter by letter
                    CurrentMessageBehindTheStar = CurrentMessageBehindTheStar + ArrayOfTheMessage[int(TimeSinceBarIsMaxSize)]
                }


                textAlign(CENTER, CENTER);
                textSize(30);
                //Display the message
                BetterText(CurrentMessageBehindTheStar, StarX + 212 + 50 + 20, windowHeight/2 - 300 + 62)
            }


        };

        //Draw the star
        image(levelStar, StarX, windowHeight/2 - 300, 124, 124);

        if(CurrentMessageBehindTheStar == MessageBehindTheStar){
            textAlign(LEFT, CENTER);
            textSize(25);

            //The unlocked items
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

//Simple particle creation function
const NewParticle = (PosX, PosY, DirectionX, DirectionY) => {
    return {x: PosX, y: PosY, dx: DirectionX, dy: DirectionY, transparency : 255};    
  }