//Music
let backgroundMusic;
let clickingSound;

//UI elements\\
let DefaultRedButton;
let Logo;
let backgroundImage;
let lake;
let FramePortrait;
let RightYellowArrow;
let LeftYellowArrow;
let middleFrame;
let StorageFrame;

let JapanMap;
let JapanCityRestaurant;
let JapanCityMarket;
let JapanCityFriends;
let CloseMark;
let MarketFrame;
let MarketButton;

let CircleButton;
let CircleButtonCheck;
let CircleButtonCooking;
let CircleButtonDecoration;
let CircleButtonGear;
let CircleButtonGeneral;
let CircleButtonLeaderboards;
let CircleButtonLogOut;
let CircleButtonMap;
let CircleButtonStorage;

let ReturnButtonCook;

let levelStar;
let MoneyFrame;
//Decoration Variables\\
let BottomFrame;
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
let animated_plant;
let animated_crow;
let animated_crow2;
//Ingredients Variables\\
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

//Food Variables\\
let noo_Image;
let bre_ome_Image;
let tun_sus_Image;
let shi_sus_Image;
let cho_cak_Image;
let che_pie_Image;

//Default restaurant parts\\
let woodFloorTile;
let brickWallTile;
let leftWallTile;
let rightWallTile;
let rightCornerTile;
let leftCornerTile;
let leftEntranceTile;
let rightEntranceTile;
let blueWallTile;

const SetupImages = () =>{

DefaultRedButton = loadImage('/get/image/buttonImage');
Logo = loadImage('get/image/logo');
lake = loadImage('get/image/lake');
FramePortrait = loadImage('get/image/frame');
middleFrame = loadImage('get/image/middleframe')


//Music\\
//backgorundMusic 
backgroundMusic = loadSound('/get/music/background_music');
//clicking sound
clickingSound = loadSound('/get/music/KnifeChoping');

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

//UI parts
BottomFrame = loadImage('get/images/bottom_frame');
RightYellowArrow = loadImage('get/images/right_yellow_arrow');
LeftYellowArrow = loadImage('get/images/left_yellow_arrow');
CircleButton = loadImage('/get/image/circlebutton');

CircleButtonCheck = loadImage('/get/image/circlebuttonCheck');
CircleButtonCooking = loadImage('/get/image/circlebuttonCooking');
CircleButtonDecoration = loadImage('/get/image/circlebuttonDecoration');
CircleButtonGear = loadImage('/get/image/circlebuttonGear');
CircleButtonGeneral = loadImage('/get/image/circlebuttonGeneral');
CircleButtonLeaderboards = loadImage('/get/image/circlebuttonLeaderboards');
CircleButtonLogOut = loadImage('/get/image/circlebuttonLogOut');
CircleButtonMap = loadImage('/get/image/circlebuttonMap');
CircleButtonStorage = loadImage('/get/image/circlebuttonStorage');
levelStar = loadImage('/get/image/levelstar');
MoneyFrame = loadImage('/get/image/MoneyDisplayer');
LeaderboardsFrame = loadImage('/get/image/LeaderboardsFrame');
LeaderboardTab = loadImage('get/image/LeaderboardTab');

JapanCityRestaurant = loadImage('/get/image/JapanCityRestaurant');
JapanMap = loadImage('/get/image/JapanMap');
JapanCityMarket = loadImage('/get/image/JapanCityMarket');
JapanCityFriends = loadImage('/get/image/JapanCityFriends');
CloseMark = loadImage('/get/image/CloseMarket');
MarketFrame = loadImage('/get/image/MarketFrame');
MarketButton = loadImage('/get/image/MarketButton');
StorageFrame = loadImage('/get/image/StorageFrame');

ReturnButtonCook = loadImage('/get/image/ReturnButtonCook');
};