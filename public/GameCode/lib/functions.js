//Adds a new functionality to the arrays in javascript
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


//Filter the dishes classes table by id 
const FilterDishesByID = id =>{
    let LocalResponse = 'N/A';

    for(let object of dishesClasses){

        if(id == object.id){
            LocalResponse = object;

        };
    };
    return LocalResponse;

};

//Filter the Furniture classes table by id
const FilterFurnitureByID = id =>{
    let LocalResponse = 'N/A';
    for(let object of furniture){
        if(id == object.id){
            LocalResponse =  object;
        }
    };
    return LocalResponse;
};


//Filter the Ingredients classes table by id
const FilterIngredientsByID = id =>{
    let LocalResponse = 'N/A';
    for(let object of ingredientsClasses){
        if(id == object.id){
            LocalResponse = object;
        };
    };

    return LocalResponse;
};

//A small message displayed near your mouse
const UIinfo = message =>{
    textSize(20);
    textAlign(CENTER, CENTER);
    let LocalMessageW = textWidth(message);
    let LocalBoxSizeW = LocalMessageW + 20;
    let LocalBoxSizeH = 30;

    let InBounds = mouseX + LocalBoxSizeW + 10 < windowWidth;

    fill(0, 100);
    if(InBounds){
        rect(mouseX, mouseY - 35, LocalBoxSizeW, LocalBoxSizeH, 20);
        BetterText(message, mouseX + LocalBoxSizeW/2, mouseY - 35 + LocalBoxSizeH/2);
    }else{
        rect(mouseX - LocalBoxSizeW, mouseY - 35, LocalBoxSizeW, LocalBoxSizeH, 20);
        BetterText(message, mouseX + LocalBoxSizeW/2 - LocalBoxSizeW, mouseY - 35 + LocalBoxSizeH/2);
    }
    fill(255);
};



//Add commas to numbers (ex: 1000 -> 1,000)
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//Simply checks wether the mouse is or isnt on the rectangle
const CheckIfMouseInRect = (button, mx, my) =>{
    
    if (mx > button.x && mx < button.x + button.w && my > button.y && my < button.y + button.h){
        return true;
    }else{
        return false;
    };

}

//Adds a black outline to the text instead of the default looking one
const BetterText = (string, x, y, color) => {

    fill(0);
    text(string, x + 2, y);
    text(string, x + 2, y + 2);
    text(string, x + 2, y - 2);
    text(string, x - 2, y);
    text(string, x - 2, y + 2);
    text(string, x - 2, y - 2);
    text(string, x, y + 2);
    text(string, x, y - 2);

    if(typeof(color) == typeof({})){
        fill(color.r, color.g, color.b)
    }else{
       fill(255); 
    }
    
    text(string, x, y);

    fill(255);
}

//Lower the amount of ingredients
const LowerTheAmountOfIngredients = ing_id =>{
    for(let ingredient of ingredientsInventory){
        if(ingredient.ingredient_id == ing_id){
            ingredient.ingredient_amount--;
        }
    };
};

//Raise the amount of ingredients
const RaiseTheAmountOfIngredients = ing_id =>{
    for(let ingredient of ingredientsInventory){
        if(ingredient.ingredient_id == ing_id){
            ingredient.ingredient_amount++;
        }
    };
};



const AlertsToBeShown = [];
let RectOffPosition = 0;
let DebounceTimeout = false;
const DrawAlert = () =>{

    //Variables\\

        //The notification frame size
        let LocalFrame = {
            w: 400,
            h: 50
        };    

        //Time to display the message (in seconds)
        let LocalTime = 3;
    //----------\\



    if(AlertsToBeShown.length != 0){

        //Draw the notification
        image(NotificationFrame, windowWidth/2 - LocalFrame.w/2, -LocalFrame.h + RectOffPosition, LocalFrame.w, LocalFrame.h);
        
        //Text\\

            //Text details
            textSize(20);
            textAlign(CENTER, CENTER);

            //Display the text
            BetterText(AlertsToBeShown[0].msg, windowWidth/2, -LocalFrame.h + RectOffPosition + LocalFrame.h/2);        
        //-----\\


        if(AlertsToBeShown.length != 0 && LocalFrame.h > RectOffPosition && AlertsToBeShown[0].shown){

            RectOffPosition += (deltaTime/1000) * 140; 

            if(RectOffPosition > LocalFrame.h){
                RectOffPosition = LocalFrame.h;
            };


        }else if(RectOffPosition > 0 && AlertsToBeShown[0].shown && !DebounceTimeout){

            DebounceTimeout = true;

            let CancelTimeOut = setTimeout(()=>{
                AlertsToBeShown[0].shown = false;
                DebounceTimeout = false;

            }, LocalTime * 1000);

        }else if(RectOffPosition > 0 && !(AlertsToBeShown[0].shown)){

            RectOffPosition -= (deltaTime/1000) * 140;

        }else if(RectOffPosition < 0){

            AlertsToBeShown.remove(AlertsToBeShown[0]);

        };

    };

};

async function BetterAlert(text){

    if(typeof(text) != typeof('string')){
        text = 'N/A';
    };

    AlertsToBeShown.push({
        msg : text,
        shown : true
    });
};


const RandomNUM = n => {
    return Math.floor(Math.random(10) * (n + 1));
};