//Variables\\
let ingredientsClasses = []; //The igredients classes with the info
let ingredientsList = []; //A list of all the ingredients within the marketplace

let dishesClasses = []; //The dishes classes with the info
let dishesLevels = []; //The level each recipe requires
let dishesInventory = []; //The inventory of the player when it comes to dishes

let ingredientsInventory = []; //The inventory of the player when it comes to ingredients
let recipesInventory = []; //The inventory of the player when it comes to recipes


let ItemsToBeCrafted = {slot1: '', slot2: '', slot3: ''}; //The currents items within the 3 slots

let CurrentPageInCooking = 0;

let ResultOfTheCrafting = null; //The item that is ready to be collected from the cooking in case the other 3 holes are correctly filled

//UI ELEMENTS\\
let BackToTheRestaurantButton;
let CookingRightArrow;
let CookingLeftArrow;
let CookingTabButton;
let RecipesTabButton;

const CookSetUp = () => {

    //The tabs buttons\\

    //Cooking
    CookingTabButton = new NewButton(0, 0, 0, 0, MarketButton); 
    //Recipes
    RecipesTabButton = new NewButton(0, 0, 0, 0, MarketButton);
    //-----------------\\

    /*Buttons*/
    BackToTheRestaurantButton = new NewButton(0, 0, 0, 0, CloseMark);
    CookingRightArrow = new NewButton(0, 0, 0, 0, RightYellowArrow);
    CookingLeftArrow = new NewButton(0, 0, 0, 0, LeftYellowArrow);

    /*The ingredients classes*/
    ingredientsClasses.push(new ingredients('tu' /*ID*/, tu_Image/*Image*/, 'Tuna'/*Name*/));
    ingredientsClasses.push(new ingredients('sh' /*ID*/, sh_Image/*Image*/, 'Shrimp'/*Name*/));
    ingredientsClasses.push(new ingredients('co' /*ID*/, ca_Image/*Image*/, 'Cocoa'/*Name*/));
    ingredientsClasses.push(new ingredients('ch' /*ID*/, ch_Image/*Image*/, 'Cherry'/*Name*/));
    ingredientsClasses.push(new ingredients('eg' /*ID*/, eg_Image/*Image*/, 'Eggs'/*Name*/));
    ingredientsClasses.push(new ingredients('pa' /*ID*/, pa_Image/*Image*/, 'Pasta'/*Name*/));
    ingredientsClasses.push(new ingredients('ri' /*ID*/, ri_Image/*Image*/, 'Rice'/*Name*/));
    ingredientsClasses.push(new ingredients('wa' /*ID*/, wa_Image/*Image*/, 'Water'/*Name*/));
    ingredientsClasses.push(new ingredients('ol_oi' /*ID*/, ol_oi_Image/*Image*/, 'Olivia oil'/*Name*/));
    ingredientsClasses.push(new ingredients('br' /*ID*/, br_Image/*Image*/, 'Bread'/*Name*/));
    ingredientsClasses.push(new ingredients('fl' /*ID*/, fl_Image/*Image*/, 'Flour'/*Name*/));
    
    
    /*The dishes classes*/
    /*id, image, name, recipes (write the id of each igredient)*/
    dishesClasses.push(new dishes('no' /*id*/, noo_Image /* image*/, 'Noodles' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('br_om' /*id*/, bre_ome_Image /* image*/, 'Bread Omelete' /*Name*/, {ingredient1: 'eg', ingredient2: 'br', ingredient3: ''} /*Recipes*/));  
    dishesClasses.push(new dishes('tu_su' /*id*/, tun_sus_Image /* image*/, 'Tuna Sushi' /*Name*/, {ingredient1: 'tu', ingredient2: 'ri', ingredient3: 'wa'} /*Recipes*/));  
    dishesClasses.push(new dishes('sh_su' /*id*/, shi_sus_Image /* image*/, 'Shrimp Sushi' /*Name*/, {ingredient1: 'sh', ingredient2: 'ri', ingredient3: 'wa'} /*Recipes*/));  
    dishesClasses.push(new dishes('ch_ca' /*id*/, cho_cak_Image /* image*/, 'Chocolate Cake' /*Name*/, {ingredient1: 'co', ingredient2: 'fl', ingredient3: 'eg'} /*Recipes*/));  
    dishesClasses.push(new dishes('ch_pi' /*id*/, che_pie_Image /* image*/, 'Cherry Pie' /*Name*/, {ingredient1: 'ch', ingredient2: 'fl', ingredient3: 'wa'} /*Recipes*/));  
    
};



const CookDraw = ()=>{

    let LocalBackgroundFrameX = windowWidth/2 - 500;
    let LocalBackgroundFrameY = windowHeight/2 - 300;


    //Frame background\\
    background(45);
    image(MarketFrame, LocalBackgroundFrameX, LocalBackgroundFrameY, 1000, 600);

    //The tabs buttons\\

    //Cooking
    CookingTabButton.x = LocalBackgroundFrameX;
    CookingTabButton.y = LocalBackgroundFrameY - 75;
    CookingTabButton.w = 200;
    CookingTabButton.h = 75; 
    CookingTabButton.hovered(()=>{
        tint(190, 190, 59);
    });

    CookingTabButton.draw();
    noTint();
    //Recipes
    RecipesTabButton.x = LocalBackgroundFrameX + 220; 
    RecipesTabButton.y = LocalBackgroundFrameY - 75;
    RecipesTabButton.w = 200;
    RecipesTabButton.h = 75;
    RecipesTabButton.hovered(()=>{
        tint(190, 190, 59);
    });

    RecipesTabButton.draw();
    noTint();
    //-----------------\\

    //Cooking Text
    textSize(35);
    textAlign(CENTER, CENTER);
    if(!RecipesWindowOpen){
        BetterText('Cooking', LocalBackgroundFrameX + 100, LocalBackgroundFrameY - 37.5, {r: 255, g: 231, b: 100});
    }else{
        BetterText('Cooking', LocalBackgroundFrameX + 100, LocalBackgroundFrameY - 37.5);
    };
    //Recipes Text
    textSize(35);
    textAlign(CENTER, CENTER);
    if(RecipesWindowOpen){
        BetterText('Recipes', LocalBackgroundFrameX + 320, LocalBackgroundFrameY - 37.5, {r: 255, g: 231, b: 100});
    }else{
      BetterText('Recipes', LocalBackgroundFrameX + 320, LocalBackgroundFrameY - 37.5);  
    }
    

    //-----------------\\

    //Go back button\\
    BackToTheRestaurantButton.x = LocalBackgroundFrameX + 940;
    BackToTheRestaurantButton.y = LocalBackgroundFrameY + 10;
    BackToTheRestaurantButton.w = 50;
    BackToTheRestaurantButton.h = 50;

    BackToTheRestaurantButton.hovered(()=>{
        BackToTheRestaurantButton.x -= 5;
        BackToTheRestaurantButton.y -= 5;
        BackToTheRestaurantButton.w += 10;
        BackToTheRestaurantButton.h += 10;
        tint(190, 190, 59);
    });

    BackToTheRestaurantButton.draw();
    noTint();
    //---------------\\
    
    if(RecipesWindowOpen){
        //Call the recipes inventory frame 
        DrawRecipesWindow(LocalBackgroundFrameX, LocalBackgroundFrameY);
    }else{
        //Call the crafting cooking frame
        DrawCookingCraftingTable(LocalBackgroundFrameX, LocalBackgroundFrameY);
    }
    

}

const DrawCookingCraftingTable = (LocalBackgroundFrameX, LocalBackgroundFrameY) => {


 //Arrow Buttons\\

    //Right Arrow
    if((CurrentPageInCooking + 1) * 6 < ingredientsInventory.length){

        CookingRightArrow.x = LocalBackgroundFrameX + 918.75;
        CookingRightArrow.y = LocalBackgroundFrameY + 462.5;
        CookingRightArrow.w = 50;
        CookingRightArrow.h = 100;
        CookingRightArrow.hovered(() => {tint(125, 123, 0);});

        CookingRightArrow.draw();
        noTint();
    }

    //Left arrow
    if(CurrentPageInCooking > 0){

        CookingLeftArrow.x = LocalBackgroundFrameX + 31.25;
        CookingLeftArrow.y = LocalBackgroundFrameY + 462.5;
        CookingLeftArrow.w = 50;
        CookingLeftArrow.h = 100;
        CookingLeftArrow.hovered(() => {tint(125, 123, 0);})

        CookingLeftArrow.draw(); 
        noTint();
    }
    //--------------\\

    
    //Crafting bench\\


    for(let i = 0; i < 4; i++){

        //Variables\\
        let LocalSquareX = LocalBackgroundFrameX + 150 + 200 * i;
        let LocalSquareY = LocalBackgroundFrameY;

        if(mouseX > LocalSquareX && mouseY > LocalSquareY + 100 && mouseX < LocalSquareX + 100 && mouseY < LocalSquareY + 200){
            //The mouse is hovering this slot
            fill(242, 255, 0, 150); 

        }else{
            fill(0, 50);
        }


        //The square look
        rect(LocalSquareX, LocalSquareY + 100, 100, 100);


        if(i == 0 && typeof(ItemsToBeCrafted.slot1) == typeof('string') && ItemsToBeCrafted.slot1 != ''){
            //Hovering the first slot
            image(FilterIngredientsByID(ItemsToBeCrafted.slot1).image, LocalSquareX, LocalSquareY + 100, 100, 100);
            FilterIngredientsByID(ItemsToBeCrafted.slot1).x = LocalSquareX;
            FilterIngredientsByID(ItemsToBeCrafted.slot1).y = LocalSquareY + 100;
            FilterIngredientsByID(ItemsToBeCrafted.slot1).hoveredSlot();
        }else if(i == 1 && typeof(ItemsToBeCrafted.slot2) == typeof('string') && ItemsToBeCrafted.slot2 != ''){
            //Hovering the second slot
            image(FilterIngredientsByID(ItemsToBeCrafted.slot2).image, LocalSquareX, LocalSquareY + 100, 100, 100);
            FilterIngredientsByID(ItemsToBeCrafted.slot2).x = LocalSquareX;
            FilterIngredientsByID(ItemsToBeCrafted.slot2).y = LocalSquareY + 100;
            FilterIngredientsByID(ItemsToBeCrafted.slot2).hoveredSlot();
        }else if(i == 2 && typeof(ItemsToBeCrafted.slot3) == typeof('string') && ItemsToBeCrafted.slot3 != ''){
            //Hover the third slot
            image(FilterIngredientsByID(ItemsToBeCrafted.slot3).image, LocalSquareX, LocalSquareY + 100, 100, 100);
            FilterIngredientsByID(ItemsToBeCrafted.slot3).x = LocalSquareX;
            FilterIngredientsByID(ItemsToBeCrafted.slot3).y = LocalSquareY + 100;
            FilterIngredientsByID(ItemsToBeCrafted.slot3).hoveredSlot();
        }else if(i == 3){
            //Check if there is a plate ready to be collected
            let LocalDishToBeCooked = CheckIfAdishIsFullFilled();
            //If the item was found then display it
            if(LocalDishToBeCooked != undefined){
                image(LocalDishToBeCooked.image, LocalSquareX, LocalSquareY + 100, 100, 100);
                LocalDishToBeCooked.hoveredSlot(LocalSquareX, LocalSquareY + 100);

                if(restaurantStats.level < GetDishLevel(LocalDishToBeCooked.id)){
                    fill(0, 120);
                    rect(LocalSquareX, LocalSquareY + 100, 100, 100);
                    textAlign(CENTER, CENTER);
                    textSize(20);
                    BetterText('Lvl '+GetDishLevel(LocalDishToBeCooked.id)+'!', LocalSquareX + 50, LocalSquareY + 150);
                }
            }
        };

    }

    //---------------\\

    //Inventory slots\\

    //Background of the items displayer
    fill(0, 50);
    rect(LocalBackgroundFrameX + 112.5, LocalBackgroundFrameY + 450, 775, 125);

    //Slots with each ingredient on your inventory
    for(let i = (CurrentPageInCooking * 6); i < (CurrentPageInCooking + 1) * 6  ; i++){
        
        
        if(i < ingredientsInventory.length){
            //Local variables of each slot
            let LocalJ = i - CurrentPageInCooking * 6;
            let LocalSlotX = LocalBackgroundFrameX + 137.5 + (LocalJ * 125);
            let LocalSlotY = LocalBackgroundFrameY + 462.5;
            let LocalIngredientInfo = FilterIngredientsByID(ingredientsInventory[i].ingredient_id);

            //Draws the ingredient slot
            LocalIngredientInfo.x = LocalSlotX;
            LocalIngredientInfo.y = LocalSlotY;
            LocalIngredientInfo.w = 100;
            LocalIngredientInfo.h = 100;
            LocalIngredientInfo.amount = ingredientsInventory[i].ingredient_amount;

            LocalIngredientInfo.drawSlot();
        };
    };

    //Slots with each ingredient on your inventory hovered version
    for(let i = (CurrentPageInCooking * 6); i < (CurrentPageInCooking + 1) * 6  ; i++){
        
        if(i < ingredientsInventory.length){
            let LocalIngredientInfo = FilterIngredientsByID(ingredientsInventory[i].ingredient_id); 
            //Hovered a slot
            LocalIngredientInfo.hoveredSlot();
        };
    };

    //----------------\\

};



const CookMousePressed = () =>{ 

    //Pressed the cross to go back to the restaurant
    BackToTheRestaurantButton.pressed(()=>{
        Stage = 'Default';
        ItemsToBeCrafted.slot1 = '';
        ItemsToBeCrafted.slot2 = '';
        ItemsToBeCrafted.slot3 = '';
    });

    //The tab buttons to move between each window
    CookingTabButton.pressed(()=>{
        RecipesWindowOpen = false;
    });
    RecipesTabButton.pressed(()=>{
        RecipesWindowOpen = true;
    });

    if(RecipesWindowOpen){
        //In the case the recipes tab is open then only detecte mouse on recipes
        RecipeWindowMousePressed();
    }else{
        //The reversed situatiaon from above
        CookingCraftingMousePressed();
    }

}

const CookingCraftingMousePressed = () =>{

     //Pressed one of the crafting place slots
     for(let i = 0; i < 4; i++){

        //Variables\\
        let LocalBackgroundFrameX = windowWidth/2 - 500;
        let LocalBackgroundFrameY = windowHeight/2 - 300;
        let LocalSquareX = LocalBackgroundFrameX + 150 + 200 * i;
        let LocalSquareY = LocalBackgroundFrameY;

        if(mouseX > LocalSquareX && mouseY > LocalSquareY && mouseX < LocalSquareX + 100 && mouseY < LocalSquareY + 200){
            if(i == 0){
                RaiseTheAmountOfIngredients(ItemsToBeCrafted.slot1);
                ItemsToBeCrafted.slot1 = '';
            }else if(i == 1){
                RaiseTheAmountOfIngredients(ItemsToBeCrafted.slot2);
                ItemsToBeCrafted.slot2 = '';
            }else if(i == 2){
                RaiseTheAmountOfIngredients(ItemsToBeCrafted.slot3);
                ItemsToBeCrafted.slot3 = '';
            }else if(i == 3){
                let LocalDishToBeCooked = CheckIfAdishIsFullFilled();

                if(LocalDishToBeCooked != undefined){

                    let TheUserHasTheRecipe = false;

                    for(let recipe of recipesInventory){
                        if(LocalDishToBeCooked.id == recipe.dish_id){
                            TheUserHasTheRecipe = true;
                        };
                    };

                    if(restaurantStats.level < GetDishLevel(LocalDishToBeCooked.id)){
                        alert('Your level is too low!');
                    }else if(!TheUserHasTheRecipe){
                        alert('You do not own the correct recipe!');
                    }else{
                        let LocalItemsToBeCrafted = {slot1: ItemsToBeCrafted.slot1, slot2: ItemsToBeCrafted.slot2, slot3: ItemsToBeCrafted.slot3};
                        
                        ItemsToBeCrafted.slot1 = '';
                        ItemsToBeCrafted.slot2 = '';
                        ItemsToBeCrafted.slot3 = '';

                        //Collect the cooked item
                        httpPost('/post/CreateNewDish', {dishID: LocalDishToBeCooked.id, userID: UserID, ingredients: LocalItemsToBeCrafted}, data =>{
                            alert(data);
                            clickingSound.play();
                            UpdateIngredientsInventory();
                            UpdateDishesInventory();
                        });
                    }
                }

            }
        };

    };


    //Pressed one of the slots
    for(let i = (CurrentPageInCooking * 6); i < (CurrentPageInCooking + 1) * 6  ; i++){

        //The positions of the frames
        let LocalBackgroundFrameX = windowWidth/2 - 500;
        let LocalBackgroundFrameY = windowHeight/2 - 300;


        if(i < ingredientsInventory.length){
            //Local variables of each slot
            let LocalJ = i - CurrentPageInCooking * 6;
            let LocalSlotX = LocalBackgroundFrameX + 137.5 + (LocalJ * 125);
            let LocalSlotY = LocalBackgroundFrameY + 462.5;
            let LocalIngredientInfo = FilterIngredientsByID(ingredientsInventory[i].ingredient_id);

            LocalIngredientInfo.ClickedSlot();
        }
    };

    //Pressed the right arrow to go to the next page
    if((CurrentPageInCooking + 1) * 6 < ingredientsInventory.length){
        CookingRightArrow.pressed(()=>{
            if((CurrentPageInCooking + 1) * 6 < ingredientsInventory.length){
            CurrentPageInCooking++;
            };
        });
    }

    //Pressed the left arrow to go to the last page
    if(CurrentPageInCooking > 0){
        CookingLeftArrow.pressed(()=>{
            if(CurrentPageInCooking > 0){
                CurrentPageInCooking--;
            };
        });
    };

}

const CookMouseReleased = () =>{

    if(RecipesWindowOpen){
        return;
    }

    //Released the key button
    for(let i = (CurrentPageInCooking * 6); i < (CurrentPageInCooking + 1) * 6  ; i++){

        if(i < ingredientsInventory.length){
            let LocalIngredientInfo = FilterIngredientsByID(ingredientsInventory[i].ingredient_id);
            LocalIngredientInfo.ReleasedSlot();
        };

    };

};


const CheckIfAdishIsFullFilled = () =>{

    //Check all the dishes classes
    for(let Dish of dishesClasses){
        let LocalFormula = [];
        let LocalRecipes = Dish.recipes;
        LocalFormula.push(LocalRecipes.ingredient1);
        LocalFormula.push(LocalRecipes.ingredient2);
        LocalFormula.push(LocalRecipes.ingredient3);

        let CountOfEquals = 0;
        //Check the current igredients
        for(let ingredient of LocalFormula){
            if(ItemsToBeCrafted.slot1 == ingredient){
                CountOfEquals++;
            }else if(ItemsToBeCrafted.slot2 == ingredient){
                CountOfEquals++;
            }else if(ItemsToBeCrafted.slot3 == ingredient){
                CountOfEquals++;
            }

        }

        if(CountOfEquals >= 3){
            return(Dish);
        }

    }
};