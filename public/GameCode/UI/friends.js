//Variables\\

    //Wether this window is open or not
    let FriendsWindow = false;

    //The friends list window details
    let LocalFriendListWindow;
//----------\\



const SetupFriendsWindow = () =>{

    LocalFriendListWindow = {
        x: windowWidth/2 - 500,
        y: windowHeight/2 - 300,
        w: 1000,
        h: 600
    };

};

const DrawFriendsWindow = () => {

    //Background image
    image(MarketFrame, LocalFriendListWindow.x, LocalFriendListWindow.y, LocalFriendListWindow.w, LocalFriendListWindow.h);

};

const FriendsWindowPressed = () =>{


};