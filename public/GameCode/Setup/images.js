// Login/Signup art\\

let Logo;
let lake;
let FramePortrait;
let LoginSignupButton;
//------------------\\


//NPCs Art\\

//Standing up
let npcUp;

//Sitting
let npcSit;

//Chat ballon for the required dish
let ChatBalloon;
//---------\\

//Music\\

//Background music
let backgroundMusic;

//Choping sound
let ChopingSound;

//Cooking sound
let ClickingSound;

//money sound
let NpcPaySound;

//
//------\\

//Restaurant parts\\

let woodFloorTile;
let brickWallTile;
let leftWallTile;
let rightWallTile;
let rightCornerTile;
let leftCornerTile;
let rightEntranceTile;
let leftEntranceTile;
let blueWallTile;
//-----------------\\

//Decoration Variables\\

let animated_crow2;
let animated_crow;
let animated_plant;
let bar_left_Image;
let bar_mid_Image;
let bar_rig_Image;
let bej_pla_Image;
let pur_pla_Image;
let cha_bac_Image;
let cha_fro_Image;

let cha_cus_Image;
let lon_tab_Image;
let sim_tab_Image;
let rou_tab_Image;
let tel_pla_Image;
let tel_cor_Image;
let mac_kar_Image;
let oven_Image;
//---------------------\\

//Food Variables\\

let tu_Image;
let sh_Image;
let ca_Image;
let ch_Image;
let eg_Image;
let pa_Image;
let ri_Image;
let wa_Image;
let ol_oi_Image;
let br_Image;
let fl_Image;
let noo_Image;
let bre_ome_Image;
let tun_sus_Image;
let shi_sus_Image;
let cho_cak_Image;
let che_pie_Image;
//---------------\\


//Main UI buttons\\

let CircleButtonCheck;
let CircleButtonCooking;
let CircleButtonDecoration;
let CircleButtonGear;
let CircleButtonGeneral;
let CircleButtonLeaderboards;
let CircleButtonLogOut;
let CircleButtonMap;
let CircleButtonStorage;
//----------------\\

//UI elements\\

let DenyButtonImage;
let NotificationFrame;
let BottomFrame;
let RightYellowArrow;
let LeftYellowArrow;
let CircleButton;
let levelStar;
let MoneyFrame;
let LeaderboardsFrame;
let CloseMark;
let MarketFrame;
let MarketButton;
let StorageFrame;
let LeaderboardTab;
let ReturnButtonCook;
let middleFrame;
let DefaultRedButton;
//------------\\

//Map elements\\

let JapanCityRestaurant;
let JapanMap;
let JapanCityMarket;
let JapanCityFriends;
//-------------\\

const SetupImages = () =>{


// Login/Signup art\\

    Logo = loadImage('get/image/logo');
    lake = loadImage('get/image/lake');
    FramePortrait = loadImage('get/image/frame');
    LoginSignupButton = loadImage('/get/image/LoginSignupButton');
//------------------\\


//NPCs Art\\

    //NPC 1
    NPCsArt.push({
        sit: loadImage('/get/image/npcFemalebakerSit'),
        wait: loadImage('/get/image/npcFemalebakerUP')
    });

    //NPC 2
    NPCsArt.push({
        sit: loadImage('/get/image/npcBusinessManSit'),
        wait: loadImage('/get/image/npcBusinessManUP')
    });

    //NPC 3
    NPCsArt.push({
        sit: loadImage('/get/image/npcOldBusinessManSit'),
        wait: loadImage('/get/image/npcOldBusinessManUP')
    });

    //NPC 4
    NPCsArt.push({
        sit: loadImage('/get/image/npcMaleStudentSit'),
        wait: loadImage('/get/image/npcMaleStudentUP')
    });

    //NPC 5
    NPCsArt.push({
        sit: loadImage('/get/image/npcMalePunkSit'),
        wait: loadImage('/get/image/npcMalePunktUP')
    });

    //NPC 6
    NPCsArt.push({
        sit: loadImage('/get/image/npcMaleCasualSit'),
        wait: loadImage('/get/image/npcMaleCasualUP')
    });

    //NPC 7
    NPCsArt.push({
        sit: loadImage('/get/image/npcFemaleYouthSit'),
        wait: loadImage('/get/image/npcFemaleYouthUP')
    });

    //NPC 8
    NPCsArt.push({
        sit: loadImage('/get/image/npcFemaleTrendySit'),
        wait: loadImage('/get/image/npcFemaleTrendyUP')
    });

    //NPC 9
    NPCsArt.push({
        sit: loadImage('/get/image/npcFemaleStudentSit'),
        wait: loadImage('/get/image/npcFemaleStudentUP')
    });

    //Chat ballon for the required dish
    ChatBalloon = loadImage('/get/image/ChatBalloon');
//---------\\

//Music\\

    //Background music
    backgroundMusic = loadSound('/get/music/background_music');
    //Cooking sound
    Choping = loadSound('/get/music/KnifeChoping');
    //Cooking sound
    ClickingSound = loadSound('/get/music/click');
    //money sound
    NpcPaySound = loadSound('/get/music/money');


//------\\

//Restaurant parts\\

    woodFloorTile = loadImage('get/image/floor_tile');
    brickWallTile = loadImage('get/image/wall_tile');
    leftWallTile = loadImage('get/image/left_wall_tile');
    rightWallTile = loadImage('get/image/right_wall_tile');
    rightCornerTile = loadImage('get/image/right_corner_tile');
    leftCornerTile = loadImage('get/image/left_corner_tile');
    rightEntranceTile = loadImage('get/image/right_entrance_tile');
    leftEntranceTile = loadImage('get/image/left_entrance_tile');
    blueWallTile = loadImage('get/image/blue_wall_tile');
//-----------------\\

//Decoration Variables\\


    animated_crow2 = loadImage('get/image/AnimatedCrow2');
    animated_crow = loadImage('get/image/AnimatedCrow');
    animated_plant = loadImage('get/image/AnimatedPlant');
    bar_left_Image = loadImage('get/image/Bar_Left');
    bar_mid_Image  = loadImage('get/image/Bar_Middle');
    bar_rig_Image  = loadImage('get/image/Bar_Right');
    bej_pla_Image  = loadImage('get/image/Beje_Plant');
    pur_pla_Image  = loadImage('get/image/Purple_Plant');
    cha_bac_Image  = loadImage('get/image/Chair_Back');
    cha_fro_Image  = loadImage('get/image/Chair_Front');

    cha_cus_Image  = loadImage('get/image/Cushion_Chair');
    lon_tab_Image  = loadImage('get/image/Long_Table');
    sim_tab_Image  = loadImage('get/image/Simple_Table');
    rou_tab_Image  = loadImage('get/image/Round_Table');
    tel_pla_Image  = loadImage('get/image/Machine_Karaoke');
    tel_cor_Image  = loadImage('get/image/Television');
    mac_kar_Image  = loadImage('get/image/Television_Corner');
    oven_Image     = loadImage('get/image/Oven');
    animated_cat = loadImage('get/image/AnimatedCat');
    cardbox_maid = loadImage('get/image/CardboxMaid');
    heater = loadImage('get/image/Heater');
    ChocolateHeart = loadImage('get/image/ChocolateHeart');
    Stanchion = loadImage('get/image/Stanchion');
    ChocolateFountain = loadImage('get/image/ChocolateFountain');
//---------------------\\

//Food Variables\\

    tu_Image = loadImage('get/image/Tuna');
    sh_Image = loadImage('get/image/Shrimp');
    ca_Image = loadImage('get/image/Cacoa');
    ch_Image = loadImage('get/image/Cherry');
    eg_Image = loadImage('get/image/Eggs');
    pa_Image = loadImage('get/image/Pasta');
    ri_Image = loadImage('get/image/Rice');
    wa_Image = loadImage('get/image/Water');
    ol_oi_Image = loadImage('get/image/Oliva_Oil');
    br_Image = loadImage('get/image/Bread');
    fl_Image = loadImage('get/image/Flour');
    noo_Image  = loadImage('get/image/Noodles');
    bre_ome_Image = loadImage('get/image/Bread_Omelet');
    tun_sus_Image = loadImage('get/image/Tuna_Sushi');
    shi_sus_Image = loadImage('get/image/Shrimp_Sushi');
    cho_cak_Image = loadImage('get/image/Chocolate_Cake');
    che_pie_Image = loadImage('get/image/Cherry_Pie');
//---------------\\


//Main UI buttons\\

    CircleButtonCheck = loadImage('/get/image/circlebuttonCheck');
    CircleButtonCooking = loadImage('/get/image/circlebuttonCooking');
    CircleButtonDecoration = loadImage('/get/image/circlebuttonDecoration');
    CircleButtonGear = loadImage('/get/image/circlebuttonGear');
    CircleButtonGeneral = loadImage('/get/image/circlebuttonGeneral');
    CircleButtonLeaderboards = loadImage('/get/image/circlebuttonLeaderboards');
    CircleButtonLogOut = loadImage('/get/image/circlebuttonLogOut');
    CircleButtonMap = loadImage('/get/image/circlebuttonMap');
    CircleButtonStorage = loadImage('/get/image/circlebuttonStorage');
//----------------\\

//UI elements\\

    DenyButtonImage = loadImage('get/image/acceptbutton');
    NotificationFrame = loadImage('get/image/notificationFrame');
    BottomFrame = loadImage('get/image/bottom_frame');
    RightYellowArrow = loadImage('get/image/right_yellow_arrow');
    LeftYellowArrow = loadImage('get/image/left_yellow_arrow');
    CircleButton = loadImage('/get/image/circlebutton');
    levelStar = loadImage('/get/image/levelstar');
    LevelPortal = loadImage('/get/image/LevelPortal');
    MoneyFrame = loadImage('/get/image/MoneyDisplayer');
    LeaderboardsFrame = loadImage('/get/image/LeaderboardsFrame');
    CloseMark = loadImage('/get/image/CloseMarket');
    MarketFrame = loadImage('/get/image/MarketFrame');
    MarketButton = loadImage('/get/image/MarketButton');
    StorageFrame = loadImage('/get/image/StorageFrame');
    LeaderboardTab = loadImage('get/image/LeaderboardTab');
    ReturnButtonCook = loadImage('/get/image/ReturnButtonCook');
    middleFrame = loadImage('get/image/middleframe');
    DefaultRedButton = loadImage('/get/image/buttonImage');
    ConfigFrame = loadImage('get/image/ConfigFrame');
    SoundOn = loadImage('get/image/SoundOn');
    SoundOff = loadImage('get/image/SoundOff');
    Invisible = loadImage('get/image/Invisible');

//------------\\

//Map elements\\

    JapanCityRestaurant = loadImage('/get/image/JapanCityRestaurant');
    JapanMap = loadImage('/get/image/JapanMap');
    JapanCityMarket = loadImage('/get/image/JapanCityMarket');
    JapanCityFriends = loadImage('/get/image/JapanCityFriends');
//-------------\\



};