//Variables\\

    //Stores all the users to which you sent an invite but havent replied
    let PendingRequests = [];

    //Current page being displayed
    let PendingCurrentPage = 0;
//----------\\


//UI elements\\

    //Arrows\\
    
        //Left arrow
        let friendPendingLeftArrow;

        //Right arrow
        let friendPendingRightArrow;
    //-------\\

//------------\\

const SetupPendingList = () =>{

    //Arrows\\

        //Left arrow
        friendPendingLeftArrow = new NewButton(0, 0, 50, 100, LeftYellowArrow);

        //Right arrow
        friendPendingRightArrow = new NewButton(0, 0, 50, 100, RightYellowArrow); 
    //-------\\

};

const DrawPendingList = () =>{


    //Draw page background
    fill(0, 50);
    rect(LocalFriendListWindow.x + 100, LocalFriendListWindow.y + 75, 800, 400);
    fill(255); 

    //Text displaying current page
    textAlign(CENTER, CENTER);
    textSize(40);   
    BetterText('Current Page: ' + (PendingCurrentPage + 1), LocalFriendListWindow.x + LocalFriendListWindow.w/2, LocalFriendListWindow.y + 40);

    //Arrows\\

        //Left Arrow
        if(PendingCurrentPage > 0){
            friendPendingLeftArrow.x = LocalFriendListWindow.x + 20;
            friendPendingLeftArrow.y = LocalFriendListWindow.y + 225;
            friendPendingLeftArrow.w = 50;
            friendPendingLeftArrow.h = 100;
            friendPendingLeftArrow.hovered(()=>{
                tint(150);
            });
            friendPendingLeftArrow.draw();
            noTint();
        };
        //Right Arrow
        if(PendingCurrentPage + 1 < (PendingRequests.length/4)){
            friendPendingRightArrow.x = LocalFriendListWindow.x + LocalFriendListWindow.w - 70;
            friendPendingRightArrow.y = LocalFriendListWindow.y + 225;
            friendPendingRightArrow.w = 50;
            friendPendingRightArrow.h = 100;
            friendPendingRightArrow.hovered(()=>{
                tint(150);
            });
            friendPendingRightArrow.draw();
            noTint();
        }
    //-------\\

    //Draw the rows
    for(let i = PendingCurrentPage * 4; i < (PendingCurrentPage * 4) + 4; i++){

        //Variable to set up the tab position
        let LocalJ = i - PendingCurrentPage * 4;

        if(PendingRequests[i] != undefined){

            //Tab background image
            image(LeaderboardTab, LocalFriendListWindow.x + 100, LocalFriendListWindow.y + 75 + (LocalJ * 100), 800, 100);

            //Texts\\

                //User Level
                textSize(18);
                textAlign(CENTER, CENTER);
                BetterText('Level: ' + PendingRequests[i].level + '', LocalFriendListWindow.x + 500, LocalFriendListWindow.y + 90 + (LocalJ * 100));

                //Username
                textSize(24);
                textAlign(LEFT, CENTER);
                BetterText('Username: ' + PendingRequests[i].name, LocalFriendListWindow.x + 110, LocalFriendListWindow.y + 110 + (LocalJ * 100));

                //Restaurant name
                textSize(24);
                textAlign(LEFT, CENTER);
                BetterText('Restaurant Name: ' + PendingRequests[i].resname, LocalFriendListWindow.x + 110, LocalFriendListWindow.y + 150 + (LocalJ * 100));

                //Time pending
                textSize(24);
                textAlign(RIGHT, CENTER);
                BetterText('Pending for: ' + PendingRequests[i].date +' days', LocalFriendListWindow.x + 890, LocalFriendListWindow.y + 100 + (LocalJ * 100));       

                //Cancel button\\
                    
                    let LocalCancelButton = PendingRequests[i].button;

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

            //------\\            

        };
    };
};

const PressedPendingList = () =>{

    //Cancel buttons
    for(let i = PendingCurrentPage * 4; i < (PendingCurrentPage * 4) + 4; i++){

        if(PendingRequests[i] != undefined){
            PendingRequests[i].button.pressed(()=>{

                //Cancel the invite here
                RemovePendingRequest(UserID ,PendingRequests[i].id);
            });
        };
    };

    //Left Arrow
    if(PendingCurrentPage > 0){
        friendPendingLeftArrow.pressed(()=>{
            PendingCurrentPage--;
        });
    };

    //Right Arrow
    if(PendingCurrentPage + 1 < (PendingRequests.length/4)){
        friendPendingRightArrow.pressed(()=>{
            PendingCurrentPage++;
        });
    };
};