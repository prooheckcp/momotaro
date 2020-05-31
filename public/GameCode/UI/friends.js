//Variables\\

    //Wether this window is open or not
    let FriendsWindow = true;

    //The friends list window details
    let LocalFriendListWindow;

    //Current tab
    let FriendsWindowTab = 'friends';
//----------\\

//UI elements\\

    //Close button
    let FriendsWindowCloseButton;

    //Friend list tab
    let FriendsTab;

    //Requests tab
    let RequestsTab;

    //Pending tab
    let PendingTab;

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

};

const DrawFriendsWindow = () => {

    //Friends window details\\

        LocalFriendListWindow = {
            x: windowWidth/2 - 500,
            y: windowHeight/2 - 300,
            w: 1000,
            h: 600
        };    
    //-----------------------\\

    //Background image
    image(StorageFrame, LocalFriendListWindow.x, LocalFriendListWindow.y, LocalFriendListWindow.w, LocalFriendListWindow.h);
    
    //Draw the closing X mark\\
    FriendsWindowCloseButton.x = LocalFriendListWindow.x;
    FriendsWindowCloseButton.y = LocalFriendListWindow.y;
    FriendsWindowCloseButton.draw();

    FriendsWindowCloseButton.draw();
    //------------------------\\

    //Draw the tabs\\

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

};

const DrawFriendList = () =>{

};

const DrawRequestsList = () =>{

};

const DrawPendingList = () =>{

};

const FriendsWindowPressed = () =>{

};