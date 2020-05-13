let move=true;
let mx;
let my;

let npcPath;


function Npcsetup() {
  createCanvas(800, 600);
  npcPath = [createVector(0, 200), createVector(200, 200), createVector(100, 100), createVector(200, 300), createVector(350, 350)];
  npc1 = new npc(npcPath[0].x+800, npcPath[0].x+400);

}

function DrawNpc() {

    npc1.draw_npc();

    //TESTE\\
/*
   NpcOnTile();
    for(let i = 0;  i < RestaurantDefaultData.TilesX ;i++){
      for(let j = 0; j < RestaurantDefaultData.TilesY; j++){
        
        let NpcPositions = CalculateRestaurantTile(i, j);
        //console.log(npc1.get_posX()/100, npc1.get_posY()/100);
        if ( i == npc1.get_posX()/103.29 && j == npc1.get_posY()/132.2){

          rect(NpcPositions.x, NpcPositions.y, 64,64)

        }
      }
    }

*/

    //FUNCIONANDO 
//dentro do restaurante E fora de uma mesa
      //if(npc1.get_posX() > 200 && npc1.get_posX() < 700 && npc1.get_posY() >= 100 && npc1.get_posY() <= 500){
          if(move){
            if (npc1.get_posX() < mx) {
                npc1.moveX(1);
            }
            if (npc1.get_posY() < my) {
                npc1.moveY(1);
            }
            if (npc1.get_posX() > mx) {
                npc1.moveX(-1);
            }
            if (npc1.get_posY() > my) {
                npc1.moveY(-1);
            }
            // if (npc1.get_posX() > ch.x &&  npc1.get_posX() < ch.x + ch.w &&  
              //npc1.get_posY() > ch.y  &&  npc1.get_posY() < ch.y + ch.h){
              //TimeToEat();
            //}
          }
      


  if(npc1.get_posY() >= 180 ) {
    go_up();
  }
  if(npc1.get_posY() <= 700 ) {
    go_down();
  }
  
  if(npc1.get_posX() <=  width/2 - 416 ) {
    go_rigth();
  }
  
  if(npc1.get_posX() >=  width/2 + 426 ) {
    go_left();
  }
  
  //console.log(npc1.get_posX());
}

const NpcOnTile = () => {

  let LocalNpcOnTile = false;

  for(let i = 0;  i < RestaurantDefaultData.TilesX ;i++){
    for(let j = 0; j < RestaurantDefaultData.TilesY; j++){

     let LocalTilePos = CalculateRestaurantTile(i, j)

    if(npc1.get_posX() > LocalTilePos.x && npc1.get_posX() < LocalTilePos.x + RestaurantDefaultData.TilesSize && npc1.get_posY() > LocalTilePos.y && mouseY < LocalTilePos.y + RestaurantDefaultData.TilesSize){
      MouseOnTile.x = i;
      MouseOnTile.y = j;
      LocalNpcOnTile = true;
    }

    };
  };

  if(!LocalNpcOnTile){
    mx = null;
    my = null;
  };


};



function NpcPressed(){

  mov=true;
  mx=mouseX;
  my=mouseY;

}



function TimeToEat(){
  
var counter = 0;
var timer = setInterval(function() {
  if( counter >= 10 ) {
    clearInterval(timer);
  }
  leave();

}, 5000);

}


function leave(){
    npc1.posX = -50;
    npc1.posY = -50;
  
    // Enviar o dinheiro para o database e - comida X
    NpcConsume();
    GiveExp();
    GiveMoney();
}

function go_up (){
    npc1.posY = npc1.posY - 2 ;
}

function go_down (){
    npc1.posY = npc1.posY + 2 ;
}

function go_rigth (){
    npc1.posX = npc1.posX + 2 ;
}

function go_left (){
    npc1.posX = npc1.posX - 2 ;
}
