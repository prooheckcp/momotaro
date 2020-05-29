//Map buttons
let JapanCityFriendsButton;
let JapanCityMarketButton;
let JapanCityRestaurantButton;

const SetupMapUI = () =>{
    //Map buttons
    CloseTheMarketButton = new NewButton(0, 0, 0, 0, CloseMark);
    JapanCityFriendsButton = new NewButton(0, 0, 0, 0, JapanCityFriends);
    JapanCityMarketButton = new NewButton(0, 0, 0, 0, JapanCityMarket);
    JapanCityRestaurantButton = new NewButton(0, 0, 0, 0, JapanCityRestaurant);
    MarketButtonDecoration = new NewButton(0, 0, 0, 0, MarketButton);
    MarketButtonIngredients = new NewButton(0, 0, 0, 0, MarketButton);
};

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

    //Call the friends window
    if(FriendsWindow){
        DrawFriendsWindow();
    };

};




//Mouse pressed function part
const UImapMousePressed = () =>{

    
    if(!MarketWindow && !FriendsWindow){

        //Take you back to the restaurant
        JapanCityRestaurantButton.pressed(()=>{Stage = 'Default'
        });

        //Open the market window
        JapanCityMarketButton.pressed(()=>{MarketWindow = true;
            //Update the shop items

            //Update the decoration
            UpdateDecorationMarketPlace();
            UpdateIngredientsMarketPlace();
        });

        //Open your friends window
        JapanCityFriendsButton.pressed(()=>{
            FriendsWindow = true;
        
        })

    }else if(MarketWindow){
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
            if(MarketWindowIngredientsPage > 0){
                //left arrow
                MarketWindowIngredientsLeftArrow.pressed(()=>{MarketWindowIngredientsPage--});
            };

            if(IgredientsList.length > (MarketWindowIngredientsPage + 1) * 6){
                //Right arrow
                MarketWindowIngredientsRightArrow.pressed(()=>{MarketWindowIngredientsPage++});  
            };


            if(LastSelectedIngredient.ingredient_id != null){

                MarketIngredientPurchaseButton.pressed(()=>{
                    if(MarketIngredientPurchaseAmount <= 0){
                        alert('You need to select at least 1!');
                    }else{
                        httpPost('/post/buyIngredient', {amount: MarketIngredientPurchaseAmount, price: LastSelectedIngredient.ingredient_price * MarketIngredientPurchaseAmount, id: UserID, itemid: LastSelectedIngredient.ingredient_id}, data =>{
                            
                            alert(data);

                            UpdateRestaurantStats();
                            UpdateInventoryRequest();
                            UpdateIngredientsInventory();
                        });
                    };
                });
            };
            
            //Add and sub the amount
            MarketIngredientPurchaseAdd.pressed(()=>{MarketIngredientPurchaseAmount++});
            MarketIngredientPurchaseSub.pressed(() =>{
                if(MarketIngredientPurchaseAmount > 0){MarketIngredientPurchaseAmount--}
            });
        };



        //Main buttons
        CloseTheMarketButton.pressed(()=>{MarketWindow = false})
        MarketButtonIngredients.pressed(()=>{MarketWindowSection = false;});
        MarketButtonDecoration.pressed(()=>{MarketWindowSection = true;});
    }else if(FriendsWindow){
        FriendsWindowPressed();
    };
};
