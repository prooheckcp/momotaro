//Variables\\

    //The igredients classes with the info
    let ingredientsClasses = []; 

    //A list of all the ingredients within the marketplace
    let ingredientsList = []; 

    //The dishes classes with the info
    let dishesClasses = []; 

    //The level each recipe requires
    let dishesLevels = []; 

    //The inventory of the player when it comes to dishes
    let dishesInventory = []; 

    //The inventory of the player when it comes to ingredients
    let ingredientsInventory = []; 

    //The currents items within the 3 slots of the crafting table
    let ItemsToBeCrafted = {slot1: '', slot2: '', slot3: ''}; 

    //The current page of ingredients from the cooking crafting table
    let CurrentPageInCooking = 0;

    //The item that is ready to be collected from the cooking in case the other 3 holes are correctly filled
    let ResultOfTheCrafting = null;
//----------\\


//UI ELEMENTS\\
    let BackToTheRestaurantButton;
    let CookingRightArrow;
    let CookingLeftArrow;
    let CookingTabButton;
    let RecipesTabButton;
//------------\\


const CookSetUp = () => {

    //Recipes Arrow buttons\\
        RecipesLeftArrow = new NewButton(0, 0, 0, 0, LeftYellowArrow);
        RecipesRightArrow = new NewButton(0, 0, 0, 0, RightYellowArrow);
    //----------------------\\

    //The tabs buttons\\

        //Cooking
        CookingTabButton = new NewButton(0, 0, 0, 0, MarketButton); 
        //Recipes
        RecipesTabButton = new NewButton(0, 0, 0, 0, MarketButton);
    //-----------------\\

    //Buttons\\
    
        BackToTheRestaurantButton = new NewButton(0, 0, 0, 0, CloseMark);
        CookingRightArrow = new NewButton(0, 0, 0, 0, RightYellowArrow);
        CookingLeftArrow = new NewButton(0, 0, 0, 0, LeftYellowArrow);
    //--------\\


    //The ingredients classes\\
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
    //------------------------\\
    
    //The dishes classes\\
        dishesClasses.push(new dishes('no' /*id*/, noo_Image /* image*/, 'Noodles' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
        dishesClasses.push(new dishes('br_om' /*id*/, bre_ome_Image /* image*/, 'Bread Omelete' /*Name*/, {ingredient1: 'eg', ingredient2: 'br', ingredient3: ''} /*Recipes*/));  
        dishesClasses.push(new dishes('tu_su' /*id*/, tun_sus_Image /* image*/, 'Tuna Sushi' /*Name*/, {ingredient1: 'tu', ingredient2: 'ri', ingredient3: 'wa'} /*Recipes*/));  
        dishesClasses.push(new dishes('sh_su' /*id*/, shi_sus_Image /* image*/, 'Shrimp Sushi' /*Name*/, {ingredient1: 'sh', ingredient2: 'ri', ingredient3: 'wa'} /*Recipes*/));  
        dishesClasses.push(new dishes('ch_ca' /*id*/, cho_cak_Image /* image*/, 'Chocolate Cake' /*Name*/, {ingredient1: 'co', ingredient2: 'fl', ingredient3: 'eg'} /*Recipes*/));  
        dishesClasses.push(new dishes('ch_pi' /*id*/, che_pie_Image /* image*/, 'Cherry Pie' /*Name*/, {ingredient1: 'ch', ingredient2: 'fl', ingredient3: 'wa'} /*Recipes*/));  
    //-------------------\\
};



const CookDraw = ()=>{

    //Set the background position\\
    
        let LocalBackgroundFrameX = windowWidth/2 - 500;
        let LocalBackgroundFrameY = windowHeight/2 - 300;
    //----------------------------\\

    //Frame background\\
    
        background(45);
        image(MarketFrame, LocalBackgroundFrameX, LocalBackgroundFrameY, 1000, 600);
    //-----------------\\

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

    //Cooking Tabs Text\\
    
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
        };
    //------------------\\


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
    
    //Choose which tab to be displayed
        if(RecipesWindowOpen){
            //Call the recipes inventory frame 
            DrawRecipesWindow(LocalBackgroundFrameX, LocalBackgroundFrameY);
        }else{
            //Call the crafting cooking frame
            DrawCookingCraftingTable(LocalBackgroundFrameX, LocalBackgroundFrameY);
        };
    

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
        };
    //--------------\\

    //Hint message displayed at the middle of the window
    fill(0, 50);
    rect(LocalBackgroundFrameX + 100, LocalBackgroundFrameY + 300, 800, 75, 10);
    textAlign(CENTER, CENTER)
    textSize(20);
    BetterText( 'Drag and drop the ingredients into the slots above in order to cook.\nDo not forget to check the recipes tab in order to keep on track!', LocalBackgroundFrameX + 500, LocalBackgroundFrameY + 337.5);

    //Crafting bench\\
        for(let i = 0; i < 4; i++){

            //The slots positions
            let LocalSquareX = LocalBackgroundFrameX + 150 + 200 * i;
            let LocalSquareY = LocalBackgroundFrameY;

            //The symbols in between the slots
            textAlign(CENTER, CENTER);
            textSize(40);
            if(i == 2){
                //To be displayed before the last square
                BetterText('=', LocalSquareX + 150, LocalSquareY + 150); 
            }else if(i < 3){
                //To be displayed after every square unless the next one is the last one
                BetterText('+', LocalSquareX + 150, LocalSquareY + 150);
            }

            //Small hovering feedback when mouse is hovering the slot
            if(mouseX > LocalSquareX && mouseY > LocalSquareY + 100 && mouseX < LocalSquareX + 100 && mouseY < LocalSquareY + 200){
                
                //Hovering
                fill(242, 255, 0, 150); 

            }else{

                //Not hovering
                fill(0, 50);
            }

            //Draws the square of the crafting table slots
            rect(LocalSquareX, LocalSquareY + 100, 100, 100);


            if(i == 0 && typeof(ItemsToBeCrafted.slot1) == typeof('string') && ItemsToBeCrafted.slot1 != ''){
                
                //Display 1st slot item image
                image(FilterIngredientsByID(ItemsToBeCrafted.slot1).image, LocalSquareX, LocalSquareY + 100, 100, 100);
                FilterIngredientsByID(ItemsToBeCrafted.slot1).x = LocalSquareX;
                FilterIngredientsByID(ItemsToBeCrafted.slot1).y = LocalSquareY + 100;
                FilterIngredientsByID(ItemsToBeCrafted.slot1).hoveredSlot();

            }else if(i == 1 && typeof(ItemsToBeCrafted.slot2) == typeof('string') && ItemsToBeCrafted.slot2 != ''){
                
                //Display 2nd slot item image
                image(FilterIngredientsByID(ItemsToBeCrafted.slot2).image, LocalSquareX, LocalSquareY + 100, 100, 100);
                FilterIngredientsByID(ItemsToBeCrafted.slot2).x = LocalSquareX;
                FilterIngredientsByID(ItemsToBeCrafted.slot2).y = LocalSquareY + 100;
                FilterIngredientsByID(ItemsToBeCrafted.slot2).hoveredSlot();

            }else if(i == 2 && typeof(ItemsToBeCrafted.slot3) == typeof('string') && ItemsToBeCrafted.slot3 != ''){
                
                //Display 3rd slot item image
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

                    //Avoid a bug where your level is too low
                    if(restaurantStats.level < GetDishLevel(LocalDishToBeCooked.id)){
                        fill(0, 120);
                        rect(LocalSquareX, LocalSquareY + 100, 100, 100);
                        textAlign(CENTER, CENTER);
                        textSize(20);
                        BetterText('Lvl '+GetDishLevel(LocalDishToBeCooked.id)+'!', LocalSquareX + 50, LocalSquareY + 150);
                    };
                };
            };

        };

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

    //Tab buttons\\

        //Crafting tab
        CookingTabButton.pressed(()=>{
            RecipesWindowOpen = false;
        });

        //Recipes inventory
        RecipesTabButton.pressed(()=>{
            RecipesWindowOpen = true;
        });

    //------------\\


    //Pressed events for the tabs
    if(RecipesWindowOpen){

        //Pressed event on recipe inventory tab
        RecipeWindowMousePressed();
    }else{

        //Pressed event on the crafting table tab
        CookingCraftingMousePressed();
    }

}

const CookingCraftingMousePressed = () =>{

     //Pressed one of the crafting place slots
     for(let i = 0; i < 4; i++){

        //Variables\\

            //Background frame position
            let LocalBackgroundFrameX = windowWidth/2 - 500;
            let LocalBackgroundFrameY = windowHeight/2 - 300;

            //Slots positions
            let LocalSquareX = LocalBackgroundFrameX + 150 + 200 * i;
            let LocalSquareY = LocalBackgroundFrameY;
        //----------\\

        //Check if the slot was pressed correctly
        if(mouseX > LocalSquareX && mouseY > LocalSquareY && mouseX < LocalSquareX + 100 && mouseY < LocalSquareY + 200){
            if(i == 0){

                //Reset the first slot
                RaiseTheAmountOfIngredients(ItemsToBeCrafted.slot1);
                ItemsToBeCrafted.slot1 = '';

            }else if(i == 1){

                //Reset the second slot
                RaiseTheAmountOfIngredients(ItemsToBeCrafted.slot2);
                ItemsToBeCrafted.slot2 = '';

            }else if(i == 2){

                //Reset the third slot
                RaiseTheAmountOfIngredients(ItemsToBeCrafted.slot3);
                ItemsToBeCrafted.slot3 = '';

            }else if(i == 3){

                //Clicked the fourth slot (the one to create dishes)

                //Check if there is a dish to be cooked
                let LocalDishToBeCooked = CheckIfAdishIsFullFilled();

                //If there is a dish to be cooked
                if(LocalDishToBeCooked != undefined){

                    //Check if the user has the recipe\\
                    
                        let TheUserHasTheRecipe = false;

                        for(let recipe of recipesInventory){
                            if(LocalDishToBeCooked.id == recipe.dish_id){
                                TheUserHasTheRecipe = true;
                            };
                        };

                    //---------------------------------\\

                    //Take care of the interection with the last slot\\
                        if(restaurantStats.level < GetDishLevel(LocalDishToBeCooked.id)){

                            //In case the user level is too low
                            alert('Your level is too low!');

                        }else if(!TheUserHasTheRecipe){

                            //In case the user is lacking the recipe
                            alert('You do not own the correct recipe!');

                        }else{

                            //Store the items to be crafter
                            let LocalItemsToBeCrafted = {slot1: ItemsToBeCrafted.slot1, slot2: ItemsToBeCrafted.slot2, slot3: ItemsToBeCrafted.slot3};
                            
                            //Reset the slots
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
                        };
                    //------------------------------------------------\\
                }

            }
        };

    };


    //Pressed one of the slots of the ingredients inventory\\
    
        for(let i = (CurrentPageInCooking * 6); i < (CurrentPageInCooking + 1) * 6  ; i++){

            if(i < ingredientsInventory.length){

                //The ingredient information
                let LocalIngredientInfo = FilterIngredientsByID(ingredientsInventory[i].ingredient_id);

                //Pressed event of that ingredient
                LocalIngredientInfo.ClickedSlot();
            }
        };
    //------------------------------------------------------\\

    //Arrow buttons\\

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
    //--------------\\
}

const CookMouseReleased = () =>{

    //If not on crafting table just stop the code
    if(RecipesWindowOpen){
        return;
    }

    //Released the mouse event
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
            };

        };

        if(CountOfEquals >= 3){
            return(Dish);
        };

    };
};