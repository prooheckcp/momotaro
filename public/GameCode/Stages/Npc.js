let img;
let npc1;
let move = true;
let mx;
let my;
let NpcTileX;
let NpcTileY;


let npcPath;
let RandomFood = 6;

const Npcsetup = () => {
  createCanvas(800, 600);
  npcPath = [createVector(0, 200), createVector(200, 200), createVector(100, 100), createVector(200, 300), createVector(350, 350)];
  npc1 = new npc(npcPath[0].x+600, npcPath[0].x+900);
}

const DrawNpc = () => {

    fill(255);
    npc1.draw_npc();
  
    //SE NPC = DO TILE DA CADEIRA ENTÃO ELE SE MOVE

    mouseOnTileFun();
    for(let i = 0;  i < RestaurantDefaultData.TilesX ;i++){
      for(let j = 0; j < RestaurantDefaultData.TilesY; j++){

        let LocalPositions = CalculateRestaurantTile(i, j);

        if(i == npc1.get_posX() && j == npc1.get_posY()){
          TimeToEat();
          console.log(1);
        }else if(move){
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
        };
      };
    };
  
/*
    if(npc1.get_posX() < Itemx && npc1.get_posX() > itemx+1 && npc1.get_posY() < Itemy && npc1.get_posY() > Itemy+1 ){
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
        }
      }
      if (npc1.get_posX() >= furniture[1].x &&  npc1.get_posX() < furniture[1].x + 64 && npc1.get_posY() > furniture[1].y  &&  npc1.get_posY() < furniture[1].y + 64){
          TimeToEat();
          console.log(1);
        }
        if (npc1.get_posX() >= furniture[2].x &&  npc1.get_posX() < furniture[2].x + 64 && npc1.get_posY() > furniture[2].y  &&  npc1.get_posY() < furniture[2].y + 64){
          TimeToEat();
          console.log(2);
        }
        if (npc1.get_posX() >= furniture[3].x &&  npc1.get_posX() < furniture[3].x + 64 && npc1.get_posY() > furniture[3].y  &&  npc1.get_posY() < furniture[3].y + 64){
          TimeToEat();
          console.log(1);
        }
*/

  if(npc1.get_posY() >= 181 ) {
    go_up();
  }
  if(npc1.get_posY() <= 692 ) {
    go_down();
  }
  
  if(npc1.get_posX() <=  width/2 - 416 ) {
    go_rigth();
  }
  
  if(npc1.get_posX() >=  width/2 + 426 ) {
    go_left();
  }
  
}

const NpcPressed = () => {
    mov = true;
    mx = mouseX;
    my = mouseY;
}

const TimeToEat = () => {
  
    var counter = 0;
    var timer = setInterval(function() {
    if( counter >= 10 ) {
        clearInterval(timer);
    }
    leave();

    }, 5000);

}

const leave = () => {
    npc1.posX = -50;
    npc1.posY = -50; 
    
    // Enviar o dinheiro, xp, e -1 comida para o database e - comida X
    NpcConsume();
}

const go_up = () => {
    npc1.posY = npc1.posY - 2 ;
}

const go_down = () => {
    npc1.posY = npc1.posY + 2 ;
}

const go_rigth = () => {
    npc1.posX = npc1.posX + 2 ;
}

const go_left = () => {
    npc1.posX = npc1.posX - 2 ;
}