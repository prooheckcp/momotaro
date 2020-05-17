/////////////////////Arrays\\\\\\\\\\\\\\\\\\\\\
let DecorationList = []; //This is the decoration market items
let LastSelectedDecoration = {}; //The last decoration item that you hovered


let IgredientsList = []; //This is the ingredients market items
let LastSelectedIngredient = {};
/////////////////////-------\\\\\\\\\\\\\\\\\\\\\

//Ingredients SECTION\\

//Variables
let MarketIngredientPurchaseAmount = 0;
let MarketWindowIngredientsPage = 0;
//Buttons
let MarketWindowIngredientsLeftArrow;
let MarketWindowIngredientsRightArrow;
let MarketIngredientPurchaseAdd;
let MarketIngredientPurchaseSub;
let MarketIngredientPurchaseButton;
//--------------------\\



//DEC SECTION\\

//Variables
let MarketDecorationPurchaseAmount = 0;
let MarketWindowDecorationPage = 0;
//Buttons
let MarketWindowDecorationLeftArrow;
let MarketWindowDecorationRightArrow;
let MarketDecorationPurchaseAdd;
let MarketDecorationPurchaseSub;
let MarketDecorationPurchaseButton;
//------------\\

//Market Main window buttons\\
let MarketButtonDecoration;
let MarketButtonIngredients;
let CloseTheMarketButton;
//---------------\\

const setupMarketUI = () =>{

    //Decoration UI
    MarketDecorationPurchaseButton = new NewButton(0, 0, 0, 0);
    MarketDecorationPurchaseAdd = new NewButton(0, 0, 0, 0);
    MarketDecorationPurchaseSub = new NewButton(0, 0, 0, 0);
    MarketIngredientPurchaseSub = new NewButton(0, 0, 0, 0);
    MarketWindowDecorationLeftArrow = new NewButton(0, 0, 0, 0, LeftYellowArrow);
    MarketWindowDecorationRightArrow = new NewButton(0, 0, 0, 0, RightYellowArrow);

    //Ingredients UI
    MarketIngredientPurchaseAdd = new NewButton(0, 0, 0, 0);
    MarketIngredientPurchaseSub = new NewButton(0, 0, 0, 0);
    MarketIngredientPurchaseButton = new NewButton(0, 0, 0, 0);
    MarketWindowIngredientsLeftArrow = new NewButton(0, 0, 0, 0, LeftYellowArrow);
    MarketWindowIngredientsRightArrow = new NewButton(0, 0, 0, 0, RightYellowArrow);
};


const DrawMarketWindow = () =>{
    
    //The main frame
    image(MarketFrame, windowWidth/2 - 500, windowHeight/2 - 300, 1000, 600);


    //Display the amount of money u own
    YenDisplayer.draw();
    //CloseMark
    CloseTheMarketButton.x = windowWidth/2 + 430;
    CloseTheMarketButton.y = windowHeight/2 - 280;
    CloseTheMarketButton.w = 50;
    CloseTheMarketButton.h = 50;

    CloseTheMarketButton.hovered(()=>{
        tint(190, 190, 59);
    });

    CloseTheMarketButton.draw();
    noTint();
    //Market button for the decoration tab\\
    MarketButtonDecoration.x = windowWidth/2 - 500;
    MarketButtonDecoration.y = windowHeight/2 - 375;
    MarketButtonDecoration.w = 200;
    MarketButtonDecoration.h = 75;

    MarketButtonDecoration.hovered(()=>{
        tint(190, 190, 59);
    });

    MarketButtonDecoration.draw();
    noTint();

    textSize(30);
    textAlign(CENTER, CENTER);

    if(MarketWindowSection){
      BetterText('Decoration', windowWidth/2 - 400, windowHeight/2 - 337.5, {r: 255, g: 231, b: 100});
    }else{
        BetterText('Decoration', windowWidth/2 - 400, windowHeight/2 - 337.5);
    };

    //Market button for the ingredients\\
    MarketButtonIngredients.x = windowWidth/2 - 280;
    MarketButtonIngredients.y = windowHeight/2 - 375;
    MarketButtonIngredients.w = 200;
    MarketButtonIngredients.h = 75;

    MarketButtonIngredients.hovered(()=>{
        tint(190, 190, 59);
    });

    MarketButtonIngredients.draw();

    textSize(30);
    textAlign(CENTER, CENTER);

    if(!MarketWindowSection){
        BetterText('Ingredients', windowWidth/2 - 180, windowHeight/2 - 337.5, {r: 255, g: 231, b: 100});
    }else{
        BetterText('Ingredients', windowWidth/2 - 180, windowHeight/2 - 337.5);
    };

    noTint();



    //Items displayed
    if(MarketWindowSection){
        
        //Displayed item
        if(LastSelectedDecoration.item_id != null){
            let LocalFurniture = FilterFurnitureByID(LastSelectedDecoration.item_id);
            fill(0, 50);
            let LocalItemDisplayX = windowWidth/2 - 20;
            let LocalItemDisplayY = windowHeight/2 - 250;

            //Main frame
            rect(LocalItemDisplayX, LocalItemDisplayY, 425, 500);
            
            //Main image

            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    image(woodFloorTile, LocalItemDisplayX + i * 64, LocalItemDisplayY + j * 64)
                }
            }

            //The item
            image(LocalFurniture.image, LocalItemDisplayX + 64, LocalItemDisplayY + 64)

            textAlign(CENTER, TOP);
            textSize(35);
            //Name of the item
            BetterText(LocalFurniture.name, LocalItemDisplayX + 308.5, LocalItemDisplayY + 25);
            textSize(20);
            //Reputation points of the item
            BetterText('Reputation \nPoints: ' + LocalFurniture.reputation, LocalItemDisplayX + 308.5, LocalItemDisplayY + 80);
            //Select the amount wanted 


            //Sub
            MarketDecorationPurchaseSub.x = LocalItemDisplayX;
            MarketDecorationPurchaseSub.y = LocalItemDisplayY + 250;
            MarketDecorationPurchaseSub.w = 212.5;
            MarketDecorationPurchaseSub.h = 50;
            fill(0, 50);
            MarketDecorationPurchaseSub.hovered(()=>{fill(207, 207, 0, 50)});
            MarketDecorationPurchaseSub.draw()
            textSize(50);
            textAlign(CENTER, CENTER)
            BetterText('-', LocalItemDisplayX + 106.25, LocalItemDisplayY + 275);
            //Add
            MarketDecorationPurchaseAdd.x = LocalItemDisplayX + 212.5;
            MarketDecorationPurchaseAdd.y = LocalItemDisplayY + 250;
            MarketDecorationPurchaseAdd.w = 212.5;
            MarketDecorationPurchaseAdd.h = 50;
            fill(0, 50);
            MarketDecorationPurchaseAdd.hovered(()=>{fill(207, 207, 0, 50)});
            MarketDecorationPurchaseAdd.draw()
            textSize(50);
            textAlign(CENTER, CENTER)
            BetterText('+', LocalItemDisplayX + 106.25 + 212.5, LocalItemDisplayY + 275);

            fill(0, 50);
            rect(LocalItemDisplayX, LocalItemDisplayY + 300, 425, 50);
            textSize(30);
            BetterText('Amount: ' + MarketDecorationPurchaseAmount + '', LocalItemDisplayX + 212.5, LocalItemDisplayY + 325);
            //The total price
            fill(0, 50);
            rect(LocalItemDisplayX, LocalItemDisplayY + 350, 425, 50);
            BetterText('Total price: ' + numberWithCommas(LastSelectedDecoration.item_price * MarketDecorationPurchaseAmount) + ' ¥', LocalItemDisplayX + 212.5, LocalItemDisplayY + 375);

            MarketDecorationPurchaseButton.x = LocalItemDisplayX;
            MarketDecorationPurchaseButton.y = LocalItemDisplayY + 400;
            MarketDecorationPurchaseButton.w = 425;
            MarketDecorationPurchaseButton.h = 100;
            fill(0, 50);
            MarketDecorationPurchaseButton.hovered(()=>{fill(207, 207, 0, 50)});
            MarketDecorationPurchaseButton.draw();
            textAlign(CENTER, CENTER);
            textSize(40);
            BetterText('Purchase', LocalItemDisplayX + 212.5, LocalItemDisplayY + 450);
            


        }

        //Draw the items slots
        if(typeof(DecorationList) == typeof([])){

            for(let i = MarketWindowDecorationPage * 6; i < (MarketWindowDecorationPage + 1) * 6; i++){
                let LocalJ = i - MarketWindowDecorationPage * 6;
                
                if(typeof(DecorationList[i]) == typeof({})){

                    let LocalFurniture = FilterFurnitureByID(DecorationList[i].item_id);
                    let LocalX = windowWidth/2 - 480;
                    let LocalY = (windowHeight/2 - 300 + 20) + 85 * LocalJ;

                    if(mouseX > LocalX && mouseX < LocalX + 400 && mouseY > LocalY && mouseY < LocalY + 75){
                        fill(207, 207, 0, 200);
                        LastSelectedDecoration = DecorationList[i];
                    }else{
                        fill(0, 100);   
                    };
                    rect(LocalX, LocalY, 400, 75, 10);
                    textAlign(LEFT, CENTER);
                    textSize(20);
                    BetterText(' ' + LocalFurniture.name + ' - ' + numberWithCommas(DecorationList[i].item_price) + '¥', LocalX, LocalY + 37.5) 
                    image(LocalFurniture.image, LocalX + 325, LocalY, 75, 75);
                };
            };  

        };

        //Arrows
        MarketWindowDecorationLeftArrow.x = windowWidth/2 - 450;
        MarketWindowDecorationLeftArrow.y = windowHeight/2 + 230;
        MarketWindowDecorationLeftArrow.w = 25;
        MarketWindowDecorationLeftArrow.h = 50;
        
        MarketWindowDecorationLeftArrow.hovered(()=>{tint(190, 190, 59);})
        if(MarketWindowDecorationPage > 0){
            MarketWindowDecorationLeftArrow.draw();
        }
        noTint();
        MarketWindowDecorationRightArrow.x = windowWidth/2 - 135;
        MarketWindowDecorationRightArrow.y = windowHeight/2 + 230;
        MarketWindowDecorationRightArrow.w = 25;
        MarketWindowDecorationRightArrow.h = 50;

        MarketWindowDecorationRightArrow.hovered(()=>{tint(190, 190, 59);})
        if(DecorationList.length > (MarketWindowDecorationPage + 1) * 6){
            MarketWindowDecorationRightArrow.draw();
            
        }
        noTint();
        //Page number
        textAlign(CENTER, CENTER);
        textSize(25);
        BetterText('Page: ' + (MarketWindowDecorationPage + 1) + '/' + (int(DecorationList.length/6 + 1)) , windowWidth/2 - 280, windowHeight/2 + 230 + 25);

    }else{


       

        //This is where the ingredients tab starts


                //Displayed item
                if(LastSelectedIngredient.ingredient_id != null){
                    
                    

                    let LocalIngredient = FilterIngredientsByID(LastSelectedIngredient.ingredient_id);
                    fill(0, 50);
                    let LocalItemDisplayX = windowWidth/2 - 20;
                    let LocalItemDisplayY = windowHeight/2 - 250;
        
                    //Main frame
                    rect(LocalItemDisplayX, LocalItemDisplayY, 425, 500);
                    
                    //Main image
        
                    for(let i = 0; i < 3; i++){
                        for(let j = 0; j < 3; j++){
                            image(woodFloorTile, LocalItemDisplayX + i * 64, LocalItemDisplayY + j * 64)
                        }
                    }
        
                    //The item
                    image(LocalIngredient.image, LocalItemDisplayX + 64, LocalItemDisplayY + 64)
        
                    textAlign(CENTER, TOP);
                    textSize(35);
                    //Name of the item
                    BetterText(LocalIngredient.name, LocalItemDisplayX + 308.5, LocalItemDisplayY + 25);
                    textSize(20);
                    
                    
                    //Sub
                    MarketIngredientPurchaseSub.x = LocalItemDisplayX;
                    MarketIngredientPurchaseSub.y = LocalItemDisplayY + 250;
                    MarketIngredientPurchaseSub.w = 212.5;
                    MarketIngredientPurchaseSub.h = 50;
                    fill(0, 50);
                    MarketIngredientPurchaseSub.hovered(()=>{fill(207, 207, 0, 50)});
                    MarketIngredientPurchaseSub.draw()
                    textSize(50);
                    textAlign(CENTER, CENTER)
                    BetterText('-', LocalItemDisplayX + 106.25, LocalItemDisplayY + 275);
                    //Add
                    MarketIngredientPurchaseAdd.x = LocalItemDisplayX + 212.5;
                    MarketIngredientPurchaseAdd.y = LocalItemDisplayY + 250;
                    MarketIngredientPurchaseAdd.w = 212.5;
                    MarketIngredientPurchaseAdd.h = 50;
                    fill(0, 50);
                    MarketIngredientPurchaseAdd.hovered(()=>{fill(207, 207, 0, 50)});
                    MarketIngredientPurchaseAdd.draw()
                    textSize(50);
                    textAlign(CENTER, CENTER)
                    BetterText('+', LocalItemDisplayX + 106.25 + 212.5, LocalItemDisplayY + 275);
        
                    fill(0, 50);
                    rect(LocalItemDisplayX, LocalItemDisplayY + 300, 425, 50);
                    textSize(30);
                    BetterText('Amount: ' + MarketIngredientPurchaseAmount + '', LocalItemDisplayX + 212.5, LocalItemDisplayY + 325);
                    //The total price
                    fill(0, 50);
                    rect(LocalItemDisplayX, LocalItemDisplayY + 350, 425, 50);
                    BetterText('Total price: ' + numberWithCommas(LastSelectedIngredient.ingredient_price * MarketIngredientPurchaseAmount) + ' ¥', LocalItemDisplayX + 212.5, LocalItemDisplayY + 375);
        
                    MarketIngredientPurchaseButton.x = LocalItemDisplayX;
                    MarketIngredientPurchaseButton.y = LocalItemDisplayY + 400;
                    MarketIngredientPurchaseButton.w = 425;
                    MarketIngredientPurchaseButton.h = 100;
                    fill(0, 50);
                    MarketIngredientPurchaseButton.hovered(()=>{fill(207, 207, 0, 50)});
                    MarketIngredientPurchaseButton.draw();
                    textAlign(CENTER, CENTER);
                    textSize(40);
                    BetterText('Purchase', LocalItemDisplayX + 212.5, LocalItemDisplayY + 450);
                    
        
        
                }
        
                //Draw the items slots
                if(typeof(IgredientsList) == typeof([])){
        
                    for(let i = MarketWindowIngredientsPage * 6; i < (MarketWindowIngredientsPage + 1) * 6; i++){
                        let LocalJ = i - MarketWindowIngredientsPage * 6;
                        
                        if(typeof(IgredientsList[i]) == typeof({})){
        
                            let LocalFurniture = FilterIngredientsByID(IgredientsList[i].ingredient_id);
                            let LocalX = windowWidth/2 - 480;
                            let LocalY = (windowHeight/2 - 300 + 20) + 85 * LocalJ;
        
                            if(mouseX > LocalX && mouseX < LocalX + 400 && mouseY > LocalY && mouseY < LocalY + 75){
                                fill(207, 207, 0, 200);
                                
                                LastSelectedIngredient = IgredientsList[i];
                            
                            }else{
                                fill(0, 100);   
                            };
                            
                            rect(LocalX, LocalY, 400, 75, 10);
                            textAlign(LEFT, CENTER);
                            textSize(20);
                            BetterText(' ' + LocalFurniture.name + ' - ' + numberWithCommas(IgredientsList[i].ingredient_price) + '¥', LocalX, LocalY + 37.5) 
                            image(LocalFurniture.image, LocalX + 325, LocalY, 75, 75);
                        };
                    };  
        
                };
        
                //Arrows
                MarketWindowIngredientsLeftArrow.x = windowWidth/2 - 450;
                MarketWindowIngredientsLeftArrow.y = windowHeight/2 + 230;
                MarketWindowIngredientsLeftArrow.w = 25;
                MarketWindowIngredientsLeftArrow.h = 50;
                
                MarketWindowIngredientsLeftArrow.hovered(()=>{tint(190, 190, 59);})
                if(MarketWindowIngredientsPage > 0){
                    MarketWindowIngredientsLeftArrow.draw();
                }
                noTint();
                MarketWindowIngredientsRightArrow.x = windowWidth/2 - 135;
                MarketWindowIngredientsRightArrow.y = windowHeight/2 + 230;
                MarketWindowIngredientsRightArrow.w = 25;
                MarketWindowIngredientsRightArrow.h = 50;
        
                MarketWindowIngredientsRightArrow.hovered(()=>{tint(190, 190, 59);})
                if(DecorationList.length > (MarketWindowIngredientsPage + 1) * 6){
                    MarketWindowIngredientsRightArrow.draw();
                    
                }
                noTint();
                //Page number
                textAlign(CENTER, CENTER);
                textSize(25);
                BetterText('Page: ' + (MarketWindowIngredientsPage + 1) + '/' + (int(IgredientsList.length/6 + 1)) , windowWidth/2 - 280, windowHeight/2 + 230 + 25);
    };



};