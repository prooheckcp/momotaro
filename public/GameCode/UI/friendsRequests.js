//Variables\\

    //Stores all the users to which you sent an invite but havent replied
    let friendRequests = [];

    //Current page being displayed
    let requestsCurrentPage = 0;
//----------\\


//UI elements\\

    //Arrows\\
    
        //Left arrow
        let friendRequestLeftArrow;

        //Right arrow
        let friendRequestRightArrow;
    //-------\\

//------------\\

const SetupRequestsList = () =>{

    //Arrows\\

        //Left arrow
        friendRequestLeftArrow = new NewButton(0, 0, 50, 100, LeftYellowArrow);

        //Right arrow
        friendRequestRightArrow = new NewButton(0, 0, 50, 100, RightYellowArrow); 
    //-------\\

};

const DrawRequestsList = () =>{

//Draw page background
fill(0, 50);
rect(LocalFriendListWindow.x + 100, LocalFriendListWindow.y + 75, 800, 400);
fill(255); 

//Text displaying current page
textAlign(CENTER, CENTER);
textSize(40);   
BetterText('Current Page: ' + (requestsCurrentPage + 1), LocalFriendListWindow.x + LocalFriendListWindow.w/2, LocalFriendListWindow.y + 40);

    //Arrows\\

        //Left Arrow
        if(requestsCurrentPage > 0){
            friendRequestLeftArrow.x = LocalFriendListWindow.x + 20;
            friendRequestLeftArrow.y = LocalFriendListWindow.y + 225;
            friendRequestLeftArrow.w = 50;
            friendRequestLeftArrow.h = 100;
            friendRequestLeftArrow.hovered(()=>{
                tint(150);
            });
            friendRequestLeftArrow.draw();
            noTint();
        };
        //Right Arrow
        if(requestsCurrentPage + 1 < (friendRequests.length/4)){
            friendRequestRightArrow.x = LocalFriendListWindow.x + LocalFriendListWindow.w - 70;
            friendRequestRightArrow.y = LocalFriendListWindow.y + 225;
            friendRequestRightArrow.w = 50;
            friendRequestRightArrow.h = 100;
            friendRequestRightArrow.hovered(()=>{
                tint(150);
            });
            friendRequestRightArrow.draw();
            noTint();
        }
    //-------\\

    //Draw the rows
    for(let i = requestsCurrentPage * 4; i < (requestsCurrentPage * 4) + 4; i++){

        //Variable to set up the tab position
        let LocalJ = i - requestsCurrentPage * 4;

        if(friendRequests[i] != undefined){

            //Tab background image
            image(LeaderboardTab, LocalFriendListWindow.x + 100, LocalFriendListWindow.y + 75 + (LocalJ * 100), 800, 100);

            //Texts\\

                //User Level
                textSize(18);
                textAlign(CENTER, CENTER);
                BetterText('Level: ' + friendRequests[i].level + '', LocalFriendListWindow.x + 500, LocalFriendListWindow.y + 90 + (LocalJ * 100));

                //Username
                textSize(24);
                textAlign(LEFT, CENTER);
                BetterText('Username: ' + friendRequests[i].name, LocalFriendListWindow.x + 110, LocalFriendListWindow.y + 110 + (LocalJ * 100));

                //Restaurant name
                textSize(24);
                textAlign(LEFT, CENTER);
                BetterText('Restaurant Name: ' + friendRequests[i].resname, LocalFriendListWindow.x + 110, LocalFriendListWindow.y + 150 + (LocalJ * 100));

                //Time pending
                textSize(24);
                textAlign(RIGHT, CENTER);
                BetterText('Pending for: ' + friendRequests[i].date +' days', LocalFriendListWindow.x + 890, LocalFriendListWindow.y + 100 + (LocalJ * 100));       

                //Cancel button\\
                    
                    let LocalCancelButton = friendRequests[i].button;

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
                //--------------\\

                //Accept button\\
                    
                let LocalAcceptButton = friendRequests[i].button2;

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
                BetterText('Accept', LocalFriendListWindow.x + 605, LocalFriendListWindow.y + 140 + (LocalJ * 100))
            //--------------\\

            //------\\            

        };
    };

};

const PressedRequestsList = () =>{


    //Cancel buttons
    for(let i = requestsCurrentPage * 4; i < (requestsCurrentPage * 4) + 4; i++){

        if(friendRequests[i] != undefined){
            friendRequests[i].button.pressed(()=>{

                //Cancel the invite here
                RemovePendingRequest(friendRequests[i].id, UserID);
            });
        };
    };

    //Accept buttons
    for(let i = requestsCurrentPage * 4; i < (requestsCurrentPage * 4) + 4; i++){

        if(friendRequests[i] != undefined){
            friendRequests[i].button2.pressed(()=>{

                //Accept the invite here
                AcceptFriendRequest(UserID,friendRequests[i].id);
            });
        };
    };

    //Left Arrow
    if(requestsCurrentPage > 0){
        friendRequestLeftArrow.pressed(()=>{
            requestsCurrentPage--;
        });
    };

    //Right Arrow
    if(requestsCurrentPage + 1 < (friendRequests.length/4)){
        friendRequestRightArrow.pressed(()=>{
            requestsCurrentPage++;
        });
    };
};