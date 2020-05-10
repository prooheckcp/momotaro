/*/////////////////////////////////////////////////////////////////////
///////////////////////////////MAP\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

/////////////////////Arrays\\\\\\\\\\\\\\\\\\\\\
let DecorationList = []; //The list of items 
let LastSelectedDecoration = {}; //The last decoration item that you hovered


let IgredientsList = [];
let LastSelectedIngredient = {};
/////////////////////-------\\\\\\\\\\\\\\\\\\\\\

//Map buttons
let JapanCityFriendsButton;
let JapanCityMarketButton;
let JapanCityRestaurantButton;
let MarketButtonDecoration;
let MarketButtonIngredients;
let CloseTheMarketButton;

//DEC SECTION\\
let MarketWindowDecorationLeftArrow;
let MarketWindowDecorationRightArrow;
let MarketWindowDecorationPage = 0;

let MarketDecorationPurchaseAmount = 0;
let MarketDecorationPurchaseAdd;
let MarketDecorationPurchaseSub;
let MarketDecorationPurchaseButton;

//Ingredients SECTION
let MarketWindowIngredientsLeftArrow;
let MarketWindowIngredientsRightArrow;
let MarketWindowIngredientsPage = 0;


//Draws the map UI
const DrawMapUI = () =>{
    rect(0, 0, windowWidth, windowHeight);
    image(JapanMap, windowWidth/2 - 541/2, windowHeight/2 - 536/2, 541, 536);




    //The tokyo button that send you back to the restaurant
    let JapanCityRestaurantButtonIsBeingHovered = false;
    JapanCityRestaurantButton.x = windowWidth/2 + 50;
    JapanCityRestaurantButton.y = windowHeight/2 - 30;
    JapanCityRestaurantButton.w = 56;
    JapanCityRestaurantButton.h = 100;
    JapanCityRestaurantButton.hovered(()=>{
        JapanCityRestaurantButtonIsBeingHovered = true;
        JapanCityRestaurantButton.x -= 5;
        JapanCityRestaurantButton.y -= 5;
        JapanCityRestaurantButton.w += 10;
        JapanCityRestaurantButton.h += 10;
        tint(190, 190, 59);
    });
    JapanCityRestaurantButton.draw();
    noTint();
    //The saporro button that displays you the friends list
    let JapanCityFriendsButtonIsBeingHovered = false;
    JapanCityFriendsButton.x = windowWidth/2 + 55;
    JapanCityFriendsButton.y = windowHeight/2 - 230;
    JapanCityFriendsButton.w = 56;
    JapanCityFriendsButton.h = 100;
    JapanCityFriendsButton.hovered(()=>{
        JapanCityFriendsButtonIsBeingHovered = true;
        JapanCityFriendsButton.x -= 5;
        JapanCityFriendsButton.y -= 5;
        JapanCityFriendsButton.w += 10;
        JapanCityFriendsButton.h += 10;
        tint(190, 190, 59);
    });   
    JapanCityFriendsButton.draw();
    noTint();
    //The osaka button that displays the market window
    let JapanCityMarketButtonIsBeingHovered = false;
    JapanCityMarketButton.x = windowWidth/2 - 45;
    JapanCityMarketButton.y = windowHeight/2;
    JapanCityMarketButton.w = 56;
    JapanCityMarketButton.h = 100;
    JapanCityMarketButton.hovered(()=>{
        JapanCityMarketButtonIsBeingHovered = true;
        JapanCityMarketButton.x -= 5;
        JapanCityMarketButton.y -= 5;
        JapanCityMarketButton.w += 10;
        JapanCityMarketButton.h += 10;
        tint(190, 190, 59);
    }); 
    JapanCityMarketButton.draw();
    noTint();
    
    //Hovering messages
    if(JapanCityRestaurantButtonIsBeingHovered){
        UIinfo('Go back to the restaurant.');
    }
    if(JapanCityFriendsButtonIsBeingHovered){
        UIinfo('Open the friends menu.');
    }
    if(JapanCityMarketButtonIsBeingHovered){
        UIinfo('Open the market.');
    }


    //Call the market window
    if(MarketWindow){
        DrawMarketWindow();
    };
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
    BetterText('Decoration', windowWidth/2 - 400, windowHeight/2 - 337.5);


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
    BetterText('Ingredients', windowWidth/2 - 180, windowHeight/2 - 337.5);

    noTint();



    //Items displayed
    if(MarketWindowSection){

        //image(MarketFrame, windowWidth/2 - 500, windowHeight/2 - 300, 1000, 600);
        

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

    };



};


const UImapMousePressed = () =>{

    //Take you back to the restaurant
    if(!MarketWindow){
        JapanCityRestaurantButton.pressed(()=>{Stage = 'Default'});
        JapanCityMarketButton.pressed(()=>{MarketWindow = true;
            //Update the shop items

            //Update the decoration
            UpdateDecorationMarketPlace();
        });
    }else{
        if(MarketWindowSection){
            //Decoration part

            if(MarketWindowDecorationPage > 0){
                //left arrow
                MarketWindowDecorationLeftArrow.pressed(()=>{MarketWindowDecorationPage--});
            }

            if(DecorationList.length > (MarketWindowDecorationPage + 1) * 6){
                //Right arrow
                MarketWindowDecorationRightArrow.pressed(()=>{MarketWindowDecorationPage++});
                
            }


            if(LastSelectedDecoration.item_id != null){
                MarketDecorationPurchaseButton.pressed(()=>{
                    if(MarketDecorationPurchaseAmount <= 0){
                        alert('You need to select at least 1!');
                    }else{
                        httpPost('/post/buyDecoration', {amount: MarketDecorationPurchaseAmount, price: LastSelectedDecoration.item_price * MarketDecorationPurchaseAmount, id: UserID, itemid: LastSelectedDecoration.item_id}, data =>{
                            
                            let LocalData = eval(data)[0];
                            
                            alert(LocalData.status);

                            UpdateRestaurantStats();
                            UpdateInventoryRequest();
                        })
                    }
                });
            };
            MarketDecorationPurchaseAdd.pressed(()=>{MarketDecorationPurchaseAmount++});
            MarketDecorationPurchaseSub.pressed(() =>{
                if(MarketDecorationPurchaseAmount > 0){
                MarketDecorationPurchaseAmount--}
            });
        }else{
            //Ingrediants part
        };

        CloseTheMarketButton.pressed(()=>{MarketWindow = false})
        MarketButtonIngredients.pressed(()=>{MarketWindowSection = false;});
        MarketButtonDecoration.pressed(()=>{MarketWindowSection = true;});
    };
};