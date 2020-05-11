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
const BetterText = (string, x, y) => {

    fill(0);
    text(string, x + 2, y);
    text(string, x + 2, y + 2);
    text(string, x + 2, y - 2);
    text(string, x - 2, y);
    text(string, x - 2, y + 2);
    text(string, x - 2, y - 2);
    text(string, x, y + 2);
    text(string, x, y - 2);

    fill(255);
    text(string, x, y);

}

const LowerTheAmountOfIngredients = ing_id =>{
    for(let ingredient of ingredientsInventory){
        if(ingredient.ingredient_id == ing_id){
            ingredient.ingredient_amount--;
        }
    };
};

const RaiseTheAmountOfIngredients = ing_id =>{
    for(let ingredient of ingredientsInventory){
        if(ingredient.ingredient_id == ing_id){
            ingredient.ingredient_amount++;
        }
    };
};