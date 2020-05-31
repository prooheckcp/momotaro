//Variables\\

    //Wether this window is open or not
    let FriendsWindow = true;

    //Wether this window is open or not
    let AddFriendWindow = true;

    //The friends list window details
    let LocalFriendListWindow;

    //Current tab
    let FriendsWindowTab = 'friends';
//----------\\

//UI elements\\

    //Close button
    let FriendsWindowCloseButton;

    //Close button add friend
    let AddFriendWindowCloseButton;

    //Add friend button
    let FriendsWindowAddFriend;

    //Send friend request button
    let SendFriendRequestButton;

    //Friend list tab
    let FriendsTab;

    //Requests tab
    let RequestsTab;

    //Pending tab
    let PendingTab;

    //Add friend input
    let AddFriendInput;
    let AddFriendCurrentInput = '';
//------------\\

const SetupFriendsWindow = () =>{

    //Window tab buttons\\

        //Friends tab
        FriendsTab = new NewButton(0, 0, 200, 75, MarketButton);

        //Requests tab
        RequestsTab = new NewButton(0, 0, 200, 75, MarketButton);

        //Pending tab
        PendingTab = new NewButton(0, 0, 200, 75, MarketButton);

    //-------------------\\

    //Closing the window button
    FriendsWindowCloseButton = new NewButton(0, 0, 50, 50, CloseMark);

    //Closing the add friend window button
    AddFriendWindowCloseButton = new NewButton(0, 0, 30, 30, CloseMark);

    //Add Friend button
    FriendsWindowAddFriend = new NewButton(0, 0, 200, 50, DefaultRedButton);

    //Send Friend request button
    SendFriendRequestButton = new NewButton(0, 0, 200, 50, DefaultRedButton);

};

const DrawFriendsWindow = () => {

    //Friends window details\\

        LocalFriendListWindow = {
            x: windowWidth/2 - 500,
            y: windowHeight/2 - 300,
            w: 1000,
            h: 600
        };    

        //Text details
        textAlign(CENTER, CENTER);
        textSize(30);
    //-----------------------\\
    
    //Background image
    image(StorageFrame, LocalFriendListWindow.x, LocalFriendListWindow.y, LocalFriendListWindow.w, LocalFriendListWindow.h);
    
    //Draw the closing X mark\\
        FriendsWindowCloseButton.x = LocalFriendListWindow.x + LocalFriendListWindow.w - 70;
        FriendsWindowCloseButton.y = LocalFriendListWindow.y + 20;
        FriendsWindowCloseButton.w = 50; 
        FriendsWindowCloseButton.h = 50
        FriendsWindowCloseButton.draw();
        FriendsWindowCloseButton.hovered(()=>{
            tint(150);
            FriendsWindowCloseButton.x -= 5;
            FriendsWindowCloseButton.y -= 5;
            FriendsWindowCloseButton.w += 10;
            FriendsWindowCloseButton.h += 10;

        });
        FriendsWindowCloseButton.draw();
        noTint();
    //------------------------\\

    //Draw the add friend button\\

    FriendsWindowAddFriend.x = LocalFriendListWindow.x;
    FriendsWindowAddFriend.y = LocalFriendListWindow.y;
    FriendsWindowAddFriend.w = 200;
    FriendsWindowAddFriend.h = 50;
    FriendsWindowAddFriend.draw();
    //---------------------------\\

    //Draw the tabs\\

        //Friends tab
        IsFriendsTabHovered = false;
        FriendsTab.x = LocalFriendListWindow.x;
        FriendsTab.y = LocalFriendListWindow.y - 75;
        FriendsTab.hovered(()=>{

            IsFriendsTabHovered = true;
        });

        if(!(FriendsWindowTab == 'friends')){
            tint(150);
        };

        FriendsTab.draw();
        noTint();

        if(IsFriendsTabHovered){
            BetterText('Friends', LocalFriendListWindow.x + FriendsTab.w/2, LocalFriendListWindow.y - 75 + FriendsTab.h/2, {r: 255, g: 231, b: 100});
        }else{
            BetterText('Friends', LocalFriendListWindow.x + FriendsTab.w/2, LocalFriendListWindow.y - 75 + FriendsTab.h/2);
        };

        //Requests tab
        IsRequestsTabHovered = false;
        RequestsTab.x = LocalFriendListWindow.x + 220;
        RequestsTab.y = LocalFriendListWindow.y - 75;
        RequestsTab.hovered(()=>{
            IsRequestsTabHovered = true;
        });

        if(!(FriendsWindowTab == 'requests')){
            tint(150);
        };

        RequestsTab.draw();
        noTint();
        if(IsRequestsTabHovered){
            BetterText('Requests', RequestsTab.x + RequestsTab.w/2, RequestsTab.y + RequestsTab.h/2, {r: 255, g: 231, b: 100});
        }else{
            BetterText('Requests', RequestsTab.x + RequestsTab.w/2, RequestsTab.y + RequestsTab.h/2);
        }

        //Pending tab
        IsPendingTabHovered = false;
        PendingTab.x = LocalFriendListWindow.x + 440;
        PendingTab.y = LocalFriendListWindow.y - 75;
        PendingTab.hovered(()=>{
            IsPendingTabHovered = true;
        });
        if(!(FriendsWindowTab == 'pending')){
            tint(150);
        };

        PendingTab.draw();
        noTint();
        if(IsPendingTabHovered){
            BetterText('Pending', PendingTab.x + PendingTab.w/2, PendingTab.y + PendingTab.h/2, {r: 255, g: 231, b: 100});
        }else{
            BetterText('Pending', PendingTab.x + PendingTab.w/2, PendingTab.y + PendingTab.h/2); 
        }     
    //--------------\\

    //Choose the current tab\\

        if(FriendsWindowTab == 'friends'){

            //Draw the friend list
            DrawFriendList();
        }else if(FriendsWindowTab == 'pending'){

            //Draw the pending list
            DrawPendingList();
        }else if(FriendsWindowTab == 'requests'){

            //Draw the requests list
            DrawRequestsList();
        };
    //-----------------------\\
    
    //If the window is open then display it
    if(AddFriendWindow){
        

        if(AddFriendInput == undefined){

            //Create the input box
            AddFriendInput = createInput('Insert username');
            AddFriendInput.input(UpdateAddFriendInput);
            AddFriendInput.size(500, 50);
            AddFriendInput.style('font-size', '40px');
            AddFriendInput.style('background-color', 'rgba(0,0,0,0.1)');
            AddFriendInput.style('color', 'white');
        };

        //Display the window
        DrawAddFriend();

    }else if(AddFriendInput != undefined){

        //Destroy the input box
        AddFriendInput.remove();
        AddFriendInput = undefined;
    };
};

//Update the variable string
function UpdateAddFriendInput(){
    
    AddFriendCurrentInput = this.value();

};

const DrawAddFriend = () =>{

    //Background
    image(middleFrame, windowWidth/2 - 300, windowHeight/2 - 100, 600, 200);

    //Main text
    textSize(40);
    textAlign(CENTER, TOP);
    BetterText('Add friend', windowWidth/2, windowHeight/2 - 80);

    //Name input box
    AddFriendInput.position(windowWidth/2 - 250, windowHeight/2 - 25);

    //Closing mark\\

        AddFriendWindowCloseButton.x = windowWidth/2 + 230;
        AddFriendWindowCloseButton.y = windowHeight/2 - 80;
        AddFriendWindowCloseButton.w = 40;
        AddFriendWindowCloseButton.h = 40;

        AddFriendWindowCloseButton.hovered(()=>{
            tint(150);
            AddFriendWindowCloseButton.x -= 5;
            AddFriendWindowCloseButton.y -= 5;
            AddFriendWindowCloseButton.w += 10;
            AddFriendWindowCloseButton.h += 10;       
        });

        AddFriendWindowCloseButton.draw();
        noTint();
    //-------------\\

    //Send friend request button\\
    
        SendFriendRequestButton.x = windowWidth/2 - 100;
        SendFriendRequestButton.y = windowHeight/2 + 37.5;
        SendFriendRequestButton.w = 200;
        SendFriendRequestButton.h = 50;
        SendFriendRequestButton.hovered(()=>{
            tint(150);
        });
        SendFriendRequestButton.draw();
        noTint();

        textAlign(CENTER, CENTER);
        textSize(20);
        BetterText('Send', SendFriendRequestButton.x + SendFriendRequestButton.w/2, SendFriendRequestButton.y + SendFriendRequestButton.h/2);
    //---------------------------\\

};

const FriendsWindowPressed = () =>{

    //Closing window button
    FriendsWindowCloseButton.pressed(()=>{

        FriendsWindow = false;

        //Destroy the input box in case it exists
        if(AddFriendInput != undefined){
            AddFriendInput.remove();
            AddFriendInput = undefined;
        };

    });

    //Close the add friend window
    if(AddFriendWindow){
        AddFriendWindowCloseButton.pressed(()=>{
            AddFriendWindow = false;
        });
    };

    //Swap to friends tab
    FriendsTab.pressed(()=>{
        FriendsWindowTab = 'friends';
    });

    //Swap to requests tab
    RequestsTab.pressed(()=>{
        FriendsWindowTab = 'requests';
    });

    //Swap to pending tab
    PendingTab.pressed(()=>{
        FriendsWindowTab = 'pending';
    });

    FriendsWindowAddFriend.pressed(()=>{
        AddFriendWindow = !AddFriendWindow;
    });

};