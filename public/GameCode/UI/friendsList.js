//Variables\\

    //Stores all the users to which you sent an invite but havent replied
    let friendlist = [];

    //Current page being displayed
    let FriendListCurrentPage = 0;
//----------\\

//UI elements\\

    //Arrows\\
    
        //Left arrow
        let friendListLeftArrow;

        //Right arrow
        let friendListRightArrow;
    //-------\\

//------------\\

const SetupFriendList = () =>{
    //Arrows\\

        //Left arrow
        friendListLeftArrow = new NewButton(0, 0, 50, 100, LeftYellowArrow);

        //Right arrow
        friendListRightArrow = new NewButton(0, 0, 50, 100, RightYellowArrow); 
    //-------\\

};


const DrawFriendList = () =>{

    //Draw page background
    fill(0, 50);
    rect(LocalFriendListWindow.x + 100, LocalFriendListWindow.y + 75, 800, 400);
    fill(255); 

    //Text displaying current page
    textAlign(CENTER, CENTER);
    textSize(40);   
    BetterText('Current Page: ' + (FriendListCurrentPage + 1), LocalFriendListWindow.x + LocalFriendListWindow.w/2, LocalFriendListWindow.y + 40);

    //Arrows\\

        //Left Arrow
        if(FriendListCurrentPage > 0){
            friendListLeftArrow.x = LocalFriendListWindow.x + 20;
            friendListLeftArrow.y = LocalFriendListWindow.y + 225;
            friendListLeftArrow.w = 50;
            friendListLeftArrow.h = 100;
            friendListLeftArrow.hovered(()=>{
                tint(150);
            });
            friendListLeftArrow.draw();
            noTint();
        };
        //Right Arrow
        if(FriendListCurrentPage + 1 < (friendlist.length/4)){
            friendListRightArrow.x = LocalFriendListWindow.x + LocalFriendListWindow.w - 70;
            friendListRightArrow.y = LocalFriendListWindow.y + 225;
            friendListRightArrow.w = 50;
            friendListRightArrow.h = 100;
            friendListRightArrow.hovered(()=>{
                tint(150);
            });
            friendListRightArrow.draw();
            noTint();
        }
    //-------\\

 //Draw the rows
 for(let i = FriendListCurrentPage * 4; i < (FriendListCurrentPage * 4) + 4; i++){

    //Variable to set up the tab position
    let LocalJ = i - FriendListCurrentPage * 4;

    if(friendlist[i] != undefined){

        //Tab background image
        image(LeaderboardTab, LocalFriendListWindow.x + 100, LocalFriendListWindow.y + 75 + (LocalJ * 100), 800, 100);

        //Texts\\

            //User Level
            textSize(18);
            textAlign(CENTER, CENTER);
            BetterText('Level: ' + friendlist[i].level + '', LocalFriendListWindow.x + 500, LocalFriendListWindow.y + 90 + (LocalJ * 100));

            //Username
            textSize(24);
            textAlign(LEFT, CENTER);
            BetterText('Username: ' + friendlist[i].name, LocalFriendListWindow.x + 110, LocalFriendListWindow.y + 110 + (LocalJ * 100));

            //Restaurant name
            textSize(24);
            textAlign(LEFT, CENTER);
            BetterText('Restaurant Name: ' + friendlist[i].resname, LocalFriendListWindow.x + 110, LocalFriendListWindow.y + 150 + (LocalJ * 100));

            //Time pending
            textSize(24);
            textAlign(RIGHT, CENTER);
            BetterText('Friends for: ' + friendlist[i].date +' days', LocalFriendListWindow.x + 890, LocalFriendListWindow.y + 100 + (LocalJ * 100));       

            //Remove friendship button\\
                
                let LocalCancelButton = friendlist[i].button;

                LocalCancelButton.x = LocalFriendListWindow.x + 700;
                LocalCancelButton.y = LocalFriendListWindow.y + 120 + (LocalJ * 100);
                LocalCancelButton.w = 160;
                LocalCancelButton.h = 40;
                LocalCancelButton.hovered(()=>{
                    LocalCancelButton.x -= 2.5;
                    LocalCancelButton.y -= 2.5;
                    LocalCancelButton.w += 5;
                    LocalCancelButton.h += 5;
                    tint(150);
                });
                LocalCancelButton.draw();
                noTint();

                textAlign(CENTER, CENTER);
                textSize(25);
                BetterText('Cancel', LocalFriendListWindow.x + 780, LocalFriendListWindow.y + 140 + (LocalJ * 100))
            //-------------------------\\

            //Accept friendship button\\
                    
                let LocalAcceptButton = friendlist[i].button2;

                LocalAcceptButton.x = LocalFriendListWindow.x + 525;
                LocalAcceptButton.y = LocalFriendListWindow.y + 120 + (LocalJ * 100);
                LocalAcceptButton.w = 160;
                LocalAcceptButton.h = 40;
                LocalAcceptButton.hovered(()=>{
                    LocalAcceptButton.x -= 2.5;
                    LocalAcceptButton.y -= 2.5;
                    LocalAcceptButton.w += 5;
                    LocalAcceptButton.h += 5;
                    tint(150);
                });
                LocalAcceptButton.draw();
                noTint();

                textAlign(CENTER, CENTER);
                textSize(25);
                BetterText('Visit', LocalFriendListWindow.x + 605, LocalFriendListWindow.y + 140 + (LocalJ * 100))
            //-------------------------\\

        //------\\            

    };
};

};


const PressedFriendList = () =>{
    //End friendship buttons
    for(let i = FriendListCurrentPage * 4; i < (FriendListCurrentPage * 4) + 4; i++){

        if(friendlist[i] != undefined){
            friendlist[i].button.pressed(()=>{

                //End the friendship here
                //RemovePendingRequest(friendlist[i].id, UserID);
                EndFriendShip(UserID, friendlist[i].id);
            });
        };
    };

    //Visit Friend buttons
    for(let i = FriendListCurrentPage * 4; i < (FriendListCurrentPage * 4) + 4; i++){

        if(friendlist[i] != undefined){
            friendlist[i].button2.pressed(()=>{

                //Move you to the scene with the friend restaurant
                Stage = 'friendRestaurant';
                FriendID = friendlist[i].id;
                GetFriendRestaurant(friendlist[i].id);
            });
        };
    };


    //Left Arrow
    if(FriendListCurrentPage > 0){
        friendListLeftArrow.pressed(()=>{
            FriendListCurrentPage--;
        });
    };

    //Right Arrow
    if(FriendListCurrentPage + 1 < (friendlist.length/4)){
        friendListRightArrow.pressed(()=>{
            FriendListCurrentPage++;
        });
    };

};