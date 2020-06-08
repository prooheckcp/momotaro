//UI elements\\

    let JapanCityFriendsButton;
    let JapanCityMarketButton;
    let JapanCityRestaurantButton;
//------------\\

const SetupMapUI = () =>{

    //Map buttons\\
    
        JapanCityFriendsButton = new NewButton(0, 0, 0, 0, JapanCityFriends);
        JapanCityMarketButton = new NewButton(0, 0, 0, 0, JapanCityMarket);
        JapanCityRestaurantButton = new NewButton(0, 0, 0, 0, JapanCityRestaurant);
    //------------\\
};

//Draws the map UI
const DrawMapUI = () =>{

    //Draws the japanese flag with the country in pixel art
        rect(0, 0, windowWidth, windowHeight);
        image(JapanMap, windowWidth/2 - 541/2, windowHeight/2 - 536/2, 541, 536);

        //Choose the window to be displayed\\
        
            //Call the market window
            if(MarketWindow){
                DrawMarketWindow();
                return;
            };

            //Call the friends window
            if(FriendsWindow){
                DrawFriendsWindow();
                return;
            };
    //----------------------------------\\

    //The tokyo button that sends you back to the restaurant
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
    
    //Hovering messages\\

        //Go back to the restaurant
        if(JapanCityRestaurantButtonIsBeingHovered){
            UIinfo('Go back to the restaurant.');
        };

        //Open the firends list
        if(JapanCityFriendsButtonIsBeingHovered){
            UIinfo('Open the friends menu.');
        };

        //Open the market
        if(JapanCityMarketButtonIsBeingHovered){
            UIinfo('Open the market.');
        };
    //------------------\\

};




//Mouse pressed event
const UImapMousePressed = () =>{

    //If the user is on the map and not in one of the windows
    if(!MarketWindow && !FriendsWindow){

        //Take you back to the restaurant
        JapanCityRestaurantButton.pressed(()=>{
            
            //Get back to the main restaurant scene
            Stage = 'Default';
        });

        //Open the market window
        JapanCityMarketButton.pressed(()=>{
        
            //Update the decoration
            UpdateDecorationMarketPlace();

            //Update the ingredients
            UpdateIngredientsMarketPlace();

            //Open the market window
            MarketWindow = true;

        });

        //Open your friends window
        JapanCityFriendsButton.pressed(()=>{

            FriendsWindow = true;

            //Call the back end
            UpdateFriendsData();
            
        });

    }else if(MarketWindow){

        if(MarketWindowSection){

            //Decoration part\\
            
                if(MarketWindowDecorationPage > 0){

                    //left arrow
                    MarketWindowDecorationLeftArrow.pressed(()=>{MarketWindowDecorationPage--});
                };

                if(DecorationList.length > (MarketWindowDecorationPage + 1) * 6){

                    //Right arrow
                    MarketWindowDecorationRightArrow.pressed(()=>{MarketWindowDecorationPage++});
                    
                };
            

                
                if(LastSelectedDecoration.item_id != null){

                    MarketDecorationPurchaseButton.pressed(()=>{

                        //Check if the user has at least 1 to be purchased
                        if(MarketDecorationPurchaseAmount <= 0){

                            BetterAlert('You need to select at least 1!');

                        }else{

                            //Send the purchase request
                            httpPost('/post/buyDecoration', {amount: MarketDecorationPurchaseAmount, price: LastSelectedDecoration.item_price * MarketDecorationPurchaseAmount, id: UserID, itemid: LastSelectedDecoration.item_id}, data =>{
                                
                                
                                BetterAlert(data);

                                UpdateRestaurantStats();
                                UpdateInventoryRequest();
                            })
                        }
                    });
                };


                MarketDecorationPurchaseAdd.pressed(()=>{

                    //Add one to the amount to purchase
                    MarketDecorationPurchaseAmount++;
                });

                MarketDecorationPurchaseSub.pressed(() =>{

                    //Check if the amount is not already 0
                    if(MarketDecorationPurchaseAmount > 0){

                        //Subtract one to the amount of purchase
                        MarketDecorationPurchaseAmount--;
                    };
                });
            //----------------\\

        }else{

            //Ingrediants part\\

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

                        //Check if you have at least one on the purchase amount
                        if(MarketIngredientPurchaseAmount <= 0){

                            BetterAlert('You need to select at least 1!');

                        }else{

                            //Purchase the ingredient(s)
                            httpPost('/post/buyIngredient', {amount: MarketIngredientPurchaseAmount, price: LastSelectedIngredient.ingredient_price * MarketIngredientPurchaseAmount, id: UserID, itemid: LastSelectedIngredient.ingredient_id}, data =>{
                                
                                BetterAlert(data);

                                UpdateRestaurantStats();
                                UpdateInventoryRequest();
                                UpdateIngredientsInventory();
                            });
                        };
                    });
                };
                
                
                MarketIngredientPurchaseAdd.pressed(()=>{

                    //Add one to the amount of purchase
                    MarketIngredientPurchaseAmount++;
                });


                MarketIngredientPurchaseSub.pressed(() =>{

                    //Check if the purchase amount is above 0
                    if(MarketIngredientPurchaseAmount > 0){
                        //Subtract one to the amount of purchase
                        MarketIngredientPurchaseAmount--;
                    };
                });

            //-----------------\\

        };



        //Main buttons\\

            //Close the market window
            CloseTheMarketButton.pressed(()=>{MarketWindow = false});

            //Pressed ingredients tab
            MarketButtonIngredients.pressed(()=>{MarketWindowSection = false;});

            //Pressed decoration tab
            MarketButtonDecoration.pressed(()=>{MarketWindowSection = true;});
        //-------------\\

    }else if(FriendsWindow){

        //Pressed event for the friends window
        FriendsWindowPressed();
    };
};
