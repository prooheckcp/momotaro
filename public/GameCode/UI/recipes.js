//Variables\\

    //Wether the recipes window is open or not (false -> cooking crafting; true -> recipes inventory)
    let RecipesWindowOpen = false;

    //The current page of the inventory
    let RecipesWindowPage = 0; 

    //The types of recipes
    let recipesTypes = []; 

    //The inventory of the player when it comes to recipes
    let recipesInventory = []; 
//----------\\



//UI Elements\\

    let RecipesLeftArrow;
    let RecipesRightArrow;
//------------\\



const DrawRecipesWindow = (LocalBackgroundFrameX, LocalBackgroundFrameY) => {

    //Arrows\\

        //Left arrow
        if(RecipesWindowPage > 0){
            RecipesLeftArrow.x = LocalBackgroundFrameX + 20;
            RecipesLeftArrow.y = LocalBackgroundFrameY + 250;
            RecipesLeftArrow.w = 50;
            RecipesLeftArrow.h = 100;
            RecipesLeftArrow.hovered(()=>{
                tint(125, 123, 0);
            });

            RecipesLeftArrow.draw();
            noTint()
        };
        
        //Right arrow
        if(RecipesWindowPage + 1 < recipesInventory.length/3){
            RecipesRightArrow.x = LocalBackgroundFrameX + 930;
            RecipesRightArrow.y = LocalBackgroundFrameY + 250;
            RecipesRightArrow.w = 50;
            RecipesRightArrow.h = 100;
            RecipesRightArrow.hovered(()=>{
                tint(125, 123, 0);
            });

            RecipesRightArrow.draw(); 
            noTint();
        };
    //-------\\


    //Draw the slots
    for(let i = 0 + (RecipesWindowPage * 3); i < 3 + (RecipesWindowPage * 3); i++){

        if(i < recipesInventory.length){
            DrawRecipeSlot(LocalBackgroundFrameX + 100, 100 + LocalBackgroundFrameY + ((i - (RecipesWindowPage * 3)) * 160), FilterDishesByID(recipesInventory[i].dish_id));
        };

    };

};

const DrawRecipeSlot = (x, y, dish) =>{

    //Background of the slot
    fill(0, 50);
    rect(x, y, 800, 120);

    rect(x, y - 40, 800, 40);

    //Name of the dish
    textAlign(LEFT, CENTER);
    textSize(25);
    BetterText(dish.name, x, y - 20);

    //Required ingredienets
    let SizeOfTheRecipesArray = 0;
    for(let i in dish.recipes){if(dish.recipes[i] != ''){SizeOfTheRecipesArray++}};
    let LocalI = 0;
    for(let ingredientID in dish.recipes){
        let LocalV = dish.recipes[ingredientID];

        if(LocalV != ''){
            
            let SlotPositionX = 10 + x + (150 * LocalI);
            let SlotPositionY = y + 10;
            
            //Text fill between ingredients
            textAlign(CENTER, CENTER);
            textSize(40);
            if(LocalI + 1 >= SizeOfTheRecipesArray){
                BetterText('=', SlotPositionX + 125, SlotPositionY + 50); 
            }else{
                BetterText('+', SlotPositionX + 125, SlotPositionY + 50);
            }

            //Ingredient Background
            fill(0, 50);
            rect(SlotPositionX, SlotPositionY, 100, 100, 10);

            //Ingredient Image
            image(FilterIngredientsByID(LocalV).image, SlotPositionX, SlotPositionY, 100, 100);
            LocalI++;
        };
    };

    //Dish Image
    fill(0, 50);
    rect(x + 10 + (150 * LocalI), y + 10, 100, 100, 10);
    image(dish.image, x + 10 + (150 * LocalI), y + 10, 100, 100);

};

const RecipeWindowMousePressed = () =>{

    //Move to the previous page
    if(RecipesWindowPage > 0){
        RecipesLeftArrow.pressed(()=>{
            RecipesWindowPage--;
        });

    };

    //Move to the next page
    if(RecipesWindowPage + 1 < recipesInventory.length/3){
        RecipesRightArrow.pressed(()=>{
            RecipesWindowPage++;
        });
    };

};