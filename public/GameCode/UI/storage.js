//Variables\\

    //The tab to be displayed
    let CurrentStoragePage = 'ingredients';

    //Default stats of the window 
    let StorageMainFrameDetails;

    //The info about the slots displayed on each tab
    let LocalSlotInformation;

//----------\\


//UI Elements\\

    let IngredientsStorageTab;
    let DishesStorageTab;
    let DecorationStorageTab;
    let CloseStorageWindow;
    let StorageLeftArrow;
    let StorageRightArrow;
//------------\\

//Storage Pages\\

    let IngredientsPages = 0;
    let DishesPages = 0;
    let DecorationPages = 0;
//--------------\\

const setupStorageWindow = () =>{

    //Default stats of the window\\

        StorageMainFrameDetails = {
            x: windowWidth/2 - 500,
            y: windowHeight/2 - 300
        };
    //----------------------------\\


    //The info about the slots displayed on each tab\\

        LocalSlotInformation = {
            x: StorageMainFrameDetails.x + 10,
            y: StorageMainFrameDetails.y + 10,
            w: 100,
            h: 100,
            slotLengthX: 9,
            slotLengthY: 4
        };
    //-----------------------------------------------\\

    //Buttons\\

        //Tab buttons
        IngredientsStorageTab = new NewButton(0, 0, 200, 75, MarketButton);
        DishesStorageTab = new NewButton(0, 0, 200, 75, MarketButton);
        DecorationStorageTab = new NewButton(0, 0, 200, 75, MarketButton);

        //Close the window button
        CloseStorageWindow = new NewButton(0, 0, 50, 50, CloseMark);

        //Arrow buttons
        StorageLeftArrow = new NewButton(0, 0, 50, 100, LeftYellowArrow);
        StorageRightArrow = new NewButton(0, 0, 50, 100, RightYellowArrow);
    //--------\\


};

const DrawStorageWindow = () =>{


    //Default stats of the window\\

        StorageMainFrameDetails = {
            x: windowWidth/2 - 500,
            y: windowHeight/2 - 300
        };
    //----------------------------\\

    //The info about the slots displayed on each tab\\

        LocalSlotInformation = {
            x: StorageMainFrameDetails.x + 10,
            y: StorageMainFrameDetails.y + 10,
            w: 100,
            h: 100,
            slotLengthX: 9,
            slotLengthY: 4
        };
    //-----------------------------------------------\\

    //Arrows\\

        //Left arrow
        StorageLeftArrow.x = StorageMainFrameDetails.x + 20;
        StorageLeftArrow.y = StorageMainFrameDetails.y + 475;

        //Right arrow
        StorageRightArrow.x = StorageMainFrameDetails.x + 400;
        StorageRightArrow.y = StorageMainFrameDetails.y + 475;
    //-------\\

    //Header\\

        StorageWindowHeader(StorageMainFrameDetails);
    //-------\\

    if(CurrentStoragePage == 'ingredients'){

        //Display the current page
        textAlign(CENTER, CENTER)
        textSize(50);
        BetterText('Page: '+(IngredientsPages + 1)+ '/' + (int(ingredientsInventory.length/(LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY) + 1)), StorageMainFrameDetails.x + 235, StorageMainFrameDetails.y + 525);
        
        //Diplay the items
        StorageWindowIngredients(StorageMainFrameDetails);

        //Display the left arrow if there are more pages
        if(IngredientsPages > 0){
            StorageLeftArrow.hovered(()=>{tint(190, 190, 59);});
            StorageLeftArrow.draw();
            noTint();
        };

        //Display the right arrow if there are more pages
        if(IngredientsPages + 1 < ingredientsInventory.length/(LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)){
            StorageRightArrow.hovered(()=>{tint(190, 190, 59);});
            StorageRightArrow.draw();
            noTint();
        };

    }else if(CurrentStoragePage == 'dishes'){

        //Display the current page
        textAlign(CENTER, CENTER)
        textSize(50);
        BetterText('Page: '+(DishesPages + 1)+ '/' + (int(dishesInventory.length/(LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY) + 1)), StorageMainFrameDetails.x + 235, StorageMainFrameDetails.y + 525);
        //Diplay the items
        StorageWindowDishes(StorageMainFrameDetails);

        //Display the left arrow if there are more pages
        if(DishesPages > 0){
            StorageLeftArrow.hovered(()=>{tint(190, 190, 59);});
            StorageLeftArrow.draw();
            noTint();
        };

        //Display the right arrow if there are more pages
        if(DishesPages + 1 < dishesInventory.length/(LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)){
            StorageRightArrow.hovered(()=>{tint(190, 190, 59);});
            StorageRightArrow.draw();
            noTint();
        };

    }else if(CurrentStoragePage == 'decoration'){

        //Display the current page
        textAlign(CENTER, CENTER)
        textSize(50);
        BetterText('Page: '+(DecorationPages + 1)+ '/' + (int(inventory.length/(LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY) + 1)), StorageMainFrameDetails.x + 235, StorageMainFrameDetails.y + 525);
        //Diplay the items
        StorageWindowDecoration(StorageMainFrameDetails);

        //Display the left arrow if there are more pages
        if(DecorationPages > 0){
            StorageLeftArrow.hovered(()=>{tint(190, 190, 59);});
            StorageLeftArrow.draw();
            noTint();
        };

        //Display the right arrow if there are more pages
        if(DecorationPages + 1 < inventory.length/(LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)){
            StorageRightArrow.hovered(()=>{tint(190, 190, 59);});
            StorageRightArrow.draw();
            noTint();
        };
    };
};

const StorageWindowIngredients = () =>{

    //Loop through the items and filter it by page
    for(let i = IngredientsPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i < (IngredientsPages + 1) * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i++){
        

        //Only show the item if it exists in the inventory
        if(i < ingredientsInventory.length){


            //Some painfull math
            let j = i - (IngredientsPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)); 
            let LocalCollumn = j - (int(j/LocalSlotInformation.slotLengthX) * LocalSlotInformation.slotLengthX);
            let LocalRow = int((j/LocalSlotInformation.slotLengthX));

            //Calculate the item display position
            let LocalDisplacementX = LocalCollumn * LocalSlotInformation.w;
            let LocalDisplacementY = LocalRow * LocalSlotInformation.h;

            //background of the item color
            if(mouseX > LocalSlotInformation.x + LocalDisplacementX && mouseX < LocalSlotInformation.x + LocalDisplacementX + LocalSlotInformation.w && mouseY > LocalSlotInformation.y + LocalDisplacementY && mouseY < LocalSlotInformation.y + LocalDisplacementY + LocalSlotInformation.h){
                fill(242, 255, 0, 150); 
            }else{
                fill( 0, 50);
            }

            //The background of each item
            rect(LocalSlotInformation.x + LocalDisplacementX, LocalSlotInformation.y + LocalDisplacementY, LocalSlotInformation.w, LocalSlotInformation.h);

            //The class of the displayed item
            let LocalItemClass = FilterIngredientsByID(ingredientsInventory[i].ingredient_id);

            //Image of the item
            image(LocalItemClass.image, LocalSlotInformation.x + LocalDisplacementX, LocalSlotInformation.y + LocalDisplacementY);

            //Display of the amount of that one specific item
            textSize(26);
            textAlign(RIGHT, BOTTOM)
            BetterText('' + ingredientsInventory[i].ingredient_amount + '', LocalSlotInformation.x + LocalDisplacementX + LocalSlotInformation.w, LocalSlotInformation.y + LocalDisplacementY + LocalSlotInformation.h);
            
        }



    };

    //ingredientsInventory  the ingredients array 
    for(let i = IngredientsPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i < (IngredientsPages + 1) * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i++){
        

        if(i < ingredientsInventory.length){

            let j = i - (IngredientsPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)); 
            let LocalCollumn = j - (int(j/LocalSlotInformation.slotLengthX) * LocalSlotInformation.slotLengthX);
            let LocalRow = int((j/LocalSlotInformation.slotLengthX));

            let LocalDisplacementX = LocalCollumn * LocalSlotInformation.w;
            let LocalDisplacementY = LocalRow * LocalSlotInformation.h;

            //Background square
            let LocalSlotHovered = false;
            if(mouseX > LocalSlotInformation.x + LocalDisplacementX && mouseX < LocalSlotInformation.x + LocalDisplacementX + LocalSlotInformation.w && mouseY > LocalSlotInformation.y + LocalDisplacementY && mouseY < LocalSlotInformation.y + LocalDisplacementY + LocalSlotInformation.h){
                LocalSlotHovered = true;
            }

            //The class
            let LocalItemClass = FilterIngredientsByID(ingredientsInventory[i].ingredient_id);
            
            if(LocalSlotHovered){
                UIinfo(LocalItemClass.name);
            }
        }

        

    };


};


const StorageWindowDishes = () =>{

    //Loop through the items and filter it by page
    for(let i = DishesPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i < (DishesPages + 1) * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i++){
        

        //Only show the item if it exists in the inventory
        if(i < dishesInventory.length){


            //Some painfull math
            let j = i - (DishesPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)); 
            let LocalCollumn = j - (int(j/LocalSlotInformation.slotLengthX) * LocalSlotInformation.slotLengthX);
            let LocalRow = int((j/LocalSlotInformation.slotLengthX));

            //Calculate the item display position
            let LocalDisplacementX = LocalCollumn * LocalSlotInformation.w;
            let LocalDisplacementY = LocalRow * LocalSlotInformation.h;

            //background of the item color
            if(mouseX > LocalSlotInformation.x + LocalDisplacementX && mouseX < LocalSlotInformation.x + LocalDisplacementX + LocalSlotInformation.w && mouseY > LocalSlotInformation.y + LocalDisplacementY && mouseY < LocalSlotInformation.y + LocalDisplacementY + LocalSlotInformation.h){
                fill(242, 255, 0, 150); 
            }else{
                fill( 0, 50);
            }

            //The background of each item
            rect(LocalSlotInformation.x + LocalDisplacementX, LocalSlotInformation.y + LocalDisplacementY, LocalSlotInformation.w, LocalSlotInformation.h);

            //The class of the displayed item
            let LocalItemClass = FilterDishesByID(dishesInventory[i].dish_id);

            //Image of the item
            image(LocalItemClass.image, LocalSlotInformation.x + LocalDisplacementX, LocalSlotInformation.y + LocalDisplacementY);

            //Display of the amount of that one specific item
            textSize(26);
            textAlign(RIGHT, BOTTOM)
            BetterText('' + dishesInventory[i].dishes_amount + '', LocalSlotInformation.x + LocalDisplacementX + LocalSlotInformation.w, LocalSlotInformation.y + LocalDisplacementY + LocalSlotInformation.h);
            
        }



    };

    //ingredientsInventory  the ingredients array 
    for(let i = DishesPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i < (DishesPages + 1) * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i++){
        

        if(i < dishesInventory.length){

            let j = i - (DishesPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)); 
            let LocalCollumn = j - (int(j/LocalSlotInformation.slotLengthX) * LocalSlotInformation.slotLengthX);
            let LocalRow = int((j/LocalSlotInformation.slotLengthX));

            let LocalDisplacementX = LocalCollumn * LocalSlotInformation.w;
            let LocalDisplacementY = LocalRow * LocalSlotInformation.h;

            //Background square
            let LocalSlotHovered = false;
            if(mouseX > LocalSlotInformation.x + LocalDisplacementX && mouseX < LocalSlotInformation.x + LocalDisplacementX + LocalSlotInformation.w && mouseY > LocalSlotInformation.y + LocalDisplacementY && mouseY < LocalSlotInformation.y + LocalDisplacementY + LocalSlotInformation.h){
                LocalSlotHovered = true;
            }

            //The class
            let LocalItemClass = FilterDishesByID(dishesInventory[i].dish_id);
            
            if(LocalSlotHovered){
                UIinfo(LocalItemClass.name);
            }
        }

        

    };
};




const StorageWindowDecoration = () =>{

 //Loop through the items and filter it by page
 for(let i = DecorationPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i < (DecorationPages + 1) * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i++){
        

    //Only show the item if it exists in the inventory
    if(i < inventory.length){


        //Some painfull math
        let j = i - (DecorationPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)); 
        let LocalCollumn = j - (int(j/LocalSlotInformation.slotLengthX) * LocalSlotInformation.slotLengthX);
        let LocalRow = int((j/LocalSlotInformation.slotLengthX));

        //Calculate the item display position
        let LocalDisplacementX = LocalCollumn * LocalSlotInformation.w;
        let LocalDisplacementY = LocalRow * LocalSlotInformation.h;

        //background of the item color
        if(mouseX > LocalSlotInformation.x + LocalDisplacementX && mouseX < LocalSlotInformation.x + LocalDisplacementX + LocalSlotInformation.w && mouseY > LocalSlotInformation.y + LocalDisplacementY && mouseY < LocalSlotInformation.y + LocalDisplacementY + LocalSlotInformation.h){
            fill(242, 255, 0, 150); 
        }else{
            fill( 0, 50);
        }

        //The background of each item
        rect(LocalSlotInformation.x + LocalDisplacementX, LocalSlotInformation.y + LocalDisplacementY, LocalSlotInformation.w, LocalSlotInformation.h);

        //The class of the displayed item
        let LocalItemClass = FilterFurnitureByID(inventory[i].item_id);

        //Image of the item
        image(LocalItemClass.image, LocalSlotInformation.x + LocalDisplacementX, LocalSlotInformation.y + LocalDisplacementY, 100, 100);

        //Display of the amount of that one specific item
        textSize(26);
        textAlign(RIGHT, BOTTOM)
        BetterText('' + inventory[i].item_amount + '', LocalSlotInformation.x + LocalDisplacementX + LocalSlotInformation.w, LocalSlotInformation.y + LocalDisplacementY + LocalSlotInformation.h);
        
    }



};

//ingredientsInventory  the decoration array 
for(let i = DecorationPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i < (DecorationPages + 1) * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY); i++){
    

    if(i < inventory.length){

        let j = i - (DecorationPages * (LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)); 
        let LocalCollumn = j - (int(j/LocalSlotInformation.slotLengthX) * LocalSlotInformation.slotLengthX);
        let LocalRow = int((j/LocalSlotInformation.slotLengthX));

        let LocalDisplacementX = LocalCollumn * LocalSlotInformation.w;
        let LocalDisplacementY = LocalRow * LocalSlotInformation.h;

        //Background square
        let LocalSlotHovered = false;
        if(mouseX > LocalSlotInformation.x + LocalDisplacementX && mouseX < LocalSlotInformation.x + LocalDisplacementX + LocalSlotInformation.w && mouseY > LocalSlotInformation.y + LocalDisplacementY && mouseY < LocalSlotInformation.y + LocalDisplacementY + LocalSlotInformation.h){
            LocalSlotHovered = true;
        }

        //The class
        let LocalItemClass = FilterFurnitureByID(inventory[i].item_id);
        
        if(LocalSlotHovered){
            UIinfo(LocalItemClass.name);
        }
    }

    

};

};

const StorageWindowHeader = StorageMainFrameDetails =>{

    //Main Image Background
    image(StorageFrame, StorageMainFrameDetails.x, StorageMainFrameDetails.y, 1000, 600);

    //Buttons\\

        //Text details\\
        textAlign(CENTER, CENTER);
        textSize(30)
        //-------------\\

    //

    //Closing mark
    CloseStorageWindow.x = StorageMainFrameDetails.x + 930;
    CloseStorageWindow.y = StorageMainFrameDetails.y + 20;
    CloseStorageWindow.w = 50; 
    CloseStorageWindow.h = 50;

    CloseStorageWindow.hovered(()=>{
        tint(150);
        CloseStorageWindow.x -= 5;
        CloseStorageWindow.y -= 5;
        CloseStorageWindow.w += 10;
        CloseStorageWindow.h += 10;

    });
    CloseStorageWindow.draw();
    noTint();

    //Ingredients
    let IngredientsTabIsHovered = false;
    IngredientsStorageTab.x = StorageMainFrameDetails.x;
    IngredientsStorageTab.y = StorageMainFrameDetails.y - 75;

    IngredientsStorageTab.hovered(()=>{
        IngredientsTabIsHovered = true;
    });

    if(!(CurrentStoragePage == 'ingredients')){
        tint(150);
    };

    IngredientsStorageTab.draw();
    noTint();
    if(CurrentStoragePage == 'ingredients' || IngredientsTabIsHovered){
        BetterText('Ingredients', StorageMainFrameDetails.x + 100, StorageMainFrameDetails.y - 37.5, {r: 255, g: 231, b: 100});
    }else{
        BetterText('Ingredients', StorageMainFrameDetails.x + 100, StorageMainFrameDetails.y - 37.5);
    };
    
    //Dishes 
    DishesStorageTab.x = StorageMainFrameDetails.x + 220;
    DishesStorageTab.y = StorageMainFrameDetails.y - 75;

    let DishesTabIsHovered = false;
    DishesStorageTab.hovered(()=>{
        DishesTabIsHovered = true;
    });

    if(!(CurrentStoragePage == 'dishes')){
        tint(150);
    };
    DishesStorageTab.draw();
    noTint();
    if(CurrentStoragePage == 'dishes' || DishesTabIsHovered){
        BetterText('Dishes', StorageMainFrameDetails.x + 320, StorageMainFrameDetails.y - 37.5, {r: 255, g: 231, b: 100});
    }else{
        BetterText('Dishes', StorageMainFrameDetails.x + 320, StorageMainFrameDetails.y - 37.5);
    };
    
    //Decoration
    DecorationStorageTab.x = StorageMainFrameDetails.x + 440;
    DecorationStorageTab.y = StorageMainFrameDetails.y - 75;

    let DecorationTabIsHovered = false;
    DecorationStorageTab.hovered(()=>{
        DecorationTabIsHovered = true;
    });
    if(!(CurrentStoragePage == 'decoration')){
        tint(150);
    };
    DecorationStorageTab.draw();
    noTint();
    if(CurrentStoragePage == 'decoration' || DecorationTabIsHovered){
        BetterText('Decoration', StorageMainFrameDetails.x + 540, StorageMainFrameDetails.y - 37.5, {r: 255, g: 231, b: 100});
    }else{
        BetterText('Decoration', StorageMainFrameDetails.x + 540, StorageMainFrameDetails.y - 37.5);
    };
    
    //--------\\

};

const StorageWindowMousePressed = () =>{

    //Tab Buttons\\
    IngredientsStorageTab.pressed(()=>{CurrentStoragePage = 'ingredients'});
    DishesStorageTab.pressed(()=>{CurrentStoragePage = 'dishes'});
    DecorationStorageTab.pressed(()=>{CurrentStoragePage = 'decoration'});
    CloseStorageWindow.pressed(()=>{StorageWindow = false});
    //------------\\
    
    //Arrow buttons\\


    //ingredients
    if(CurrentStoragePage == 'ingredients'){
        //Left arrow
        if(IngredientsPages > 0){
            StorageLeftArrow.pressed(()=>{IngredientsPages--});
        };
        //Right arrow
        if(IngredientsPages + 1 < ingredientsInventory.length/(LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)){
            
            StorageRightArrow.pressed(()=>{IngredientsPages++});
        };
    }else if(CurrentStoragePage == 'dishes'){
        //Left arrow
        if(DishesPages > 0){
            StorageLeftArrow.pressed(()=>{DishesPages--});
        };
        //Right arrow
        if(DishesPages + 1 < dishesInventory.length/(LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)){
            
            StorageRightArrow.pressed(()=>{DishesPages++});
        };
    }else if(CurrentStoragePage == 'decoration'){
        //Left arrow
        if(DecorationPages > 0){
            StorageLeftArrow.pressed(()=>{DecorationPages--});
        };
        //Right arrow
        if(DecorationPages + 1 < inventory.length/(LocalSlotInformation.slotLengthX * LocalSlotInformation.slotLengthY)){
            
            StorageRightArrow.pressed(()=>{DecorationPages++});
        };
    };
    //--------------\\

};