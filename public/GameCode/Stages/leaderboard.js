//Variables\\
    //The current leaderboard page
    let LeaderboardPage = 0;
    //The array of the top 50 players
    let TopLevelPlayers = [];
//----------\\

//UI buttons\\
    let leaderboardRightArrow;
    let leaderboardLeftArrow;
    let CloseLeaderBoard;
//-----------\\

const setupLeaderboard = () =>{

    //UI buttons\\
        leaderboardRightArrow = new NewButton(0, 0, 0, 0, RightYellowArrow);
        leaderboardLeftArrow = new NewButton(0, 0, 0, 0, LeftYellowArrow);
        CloseLeaderBoard = new NewButton(0, 0, 0, 0, CloseMark);
    //-----------\\

};

const DrawLeaderboardsWindow = () =>{

    
    //Calculate the leaderboard window position
    let LocalLeaderboardX = windowWidth/2 - 500;
    let LocalLeaderboardY = windowHeight/2 - 300;

    //Draw the leaderboard background 
    image(LeaderboardsFrame, LocalLeaderboardX, LocalLeaderboardY, 1000, 600);

    //Draw the leaderboard tab button
    image(MarketButton, LocalLeaderboardX, LocalLeaderboardY - 75);
    
    //Text of the tab button
    textSize(30);
    textAlign(CENTER, CENTER)
    BetterText('Top Levels', LocalLeaderboardX + 100, LocalLeaderboardY - 37.5, {r: 255, g: 231, b: 100});


    if(LeaderboardPage > 0){

        //Left arrow
        leaderboardLeftArrow.x = LocalLeaderboardX + 50;
        leaderboardLeftArrow.y = LocalLeaderboardY + 275;
        leaderboardLeftArrow.w = 50;
        leaderboardLeftArrow.h = 100;
        leaderboardLeftArrow.hovered(() =>{tint(190, 190, 59);});
        leaderboardLeftArrow.draw();
        noTint();

    };
    

    
    if((LeaderboardPage + 1) * 5 < TopLevelPlayers.length){

        //Right arrow
        leaderboardRightArrow.x = LocalLeaderboardX + 900;
        leaderboardRightArrow.y = LocalLeaderboardY + 275;
        leaderboardRightArrow.w = 50;
        leaderboardRightArrow.h = 100;
        leaderboardRightArrow.hovered(() =>{tint(190, 190, 59);}); 
        leaderboardRightArrow.draw();
        noTint();

    };
    

    //Page background
    fill(0, 120);
    rect(LocalLeaderboardX + 100, LocalLeaderboardY + 75, 800, 500);

    //Leaderboard tittle ressembling the page number
    textAlign(CENTER, CENTER);
    textSize(50);
    BetterText('Current Page: ' + (LeaderboardPage + 1) + '', LocalLeaderboardX + 500, LocalLeaderboardY + 37.5);

    //The closing window button
    CloseLeaderBoard.x = LocalLeaderboardX + 925;
    CloseLeaderBoard.y = LocalLeaderboardY + 25;
    CloseLeaderBoard.w = 50;
    CloseLeaderBoard.h = 50;

    CloseLeaderBoard.hovered(()=>{
        tint(190, 190, 59);
    });

    CloseLeaderBoard.draw();
    noTint();

    //Draw leaderboard stats\\
        for(let i = 5 * LeaderboardPage; i <  LeaderboardPage * 5 + 5 ;i++){
            let LocalJ = i - 5 * LeaderboardPage;
        
            if(i < TopLevelPlayers.length){
            
            textAlign(CENTER, CENTER);
            textSize(20);
            image(LeaderboardTab, LocalLeaderboardX + 100, LocalLeaderboardY + 75 + (LocalJ * 100), 800, 100);
            BetterText('Level: ' + TopLevelPlayers[i].res_level, LocalLeaderboardX + 500, LocalLeaderboardY + 75 + 14 + (LocalJ * 100));
            textSize(25);
            textAlign(LEFT, CENTER);
            BetterText('Restaurant: ' + TopLevelPlayers[i].res_name, LocalLeaderboardX + 120, LocalLeaderboardY + 150 + (LocalJ * 100));
            textSize(40);
            textAlign(LEFT, CENTER);
            BetterText('# ' + (i + 1), LocalLeaderboardX + 800, LocalLeaderboardY + 150 + (LocalJ * 100));
            fill(186, 7, 222, 200);
            noStroke();
            rect(LocalLeaderboardX + 113, LocalLeaderboardY + 75 + (LocalJ * 100) + 92, (TopLevelPlayers[i].res_exp * 774)/CalculateRequiredEXP(TopLevelPlayers[i].level), 5);
            //Default
            stroke(0);
            strokeWeight(1);
            };
        };
    //-----------------------\\   
};

const LeaderboardsMousePressed = () =>{

    //Close the leaderboard
    CloseLeaderBoard.pressed(()=>{
        LeaderboardsWindow = false;
    });

    //Move to the previous page
    if(LeaderboardPage > 0){
        leaderboardLeftArrow.pressed(()=>{LeaderboardPage--});
    };

    //Move to the next page
    if((LeaderboardPage + 1) * 5 < TopLevelPlayers.length){
        leaderboardRightArrow.pressed(()=>{LeaderboardPage++});
    };
    
};
