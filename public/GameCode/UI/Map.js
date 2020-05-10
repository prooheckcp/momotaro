//Map buttons
let JapanCityFriendsButton;
let JapanCityMarketButton;
let JapanCityRestaurantButton;

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




//Mouse pressed function part
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