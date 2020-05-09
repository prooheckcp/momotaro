let img;
let npc1;
let move=true;
let mx;
let my;

let npcPath;

const SetUpNpc = () => {
  createCanvas(800, 600);
  npcPath = [createVector(0, 200), createVector(200, 200), createVector(100, 100), createVector(200, 300), createVector(350, 350)];
  
  npc1 = new npc(npcPath[0].x+350, npcPath[0].x+600);

}

const DrawNpc = () => {
  background(220);
  ///////////////////////////
    fill(100);
    npc1.draw_npc();
//dentro do restaurante E fora de uma mesa
  if(npc1.get_posX() > 200 && npc1.get_posX() < 700 && npc1.get_posY() >= 100 && npc1.get_posY() <= 500){
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
        if (npc1.get_posX() > ch.x &&  npc1.get_posX() < ch.x + ch.w &&  
            npc1.get_posY() > ch.y  &&  npc1.get_posY() < ch.y + ch.h){
          TimeToEat();
        }
      }
  }
  if(npc1.get_posY() >= 500 ) {
    
    go_up();
    
  }
  if(npc1.get_posY() <= 100 ) {
    
    go_down();
    
  }
  
  if(npc1.get_posX() <= 200 ) {
    
    go_rigth();
    
  }
  
  if(npc1.get_posX() >= 700 ) {
    
    go_left();
    
  }
  
  console.log(DishRequest[4]);
}
const mousePressed = () => {

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
    // Enviar o dinheiro para o database e - comida X
    httpPost('/post/NpcPay', {id : UserID, money: amount}, data =>{
      NpcGiveMoney();
    });
    httpPost('/post/NpcConsume', {id : UserID, dishes: amount}, data =>{
      NpcConsumeDish();
    });
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
