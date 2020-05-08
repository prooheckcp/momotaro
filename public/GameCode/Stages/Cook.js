const CookSetUp = () => {
    createCanvas(960,640);
                        //name, x, y, w, h, pr, wa
    tu = new ingredients("Tuna",(width/2 - 320),430,64,64,400,tu_Image, 4);
    sh = new ingredients("Shrimp",(width/2 - 246),430,64,64,455,sh_Image, 4);
    ca = new ingredients("Cacoa",(width/2 - 172),430,64,64,560,ca_Image, 4);
    ch = new ingredients("Cherry",(width/2 - 98),430,64,64,560,ch_Image, 4);
    eg = new ingredients("Eggs",(width/2 - 26),430,64,64,560,eg_Image, 4);
    pa = new ingredients("Pasta",(width/2 - 320),514,64,64,560,pa_Image, 4);
    
    ri = new ingredients("Rice",(width/2 - 246),514,64,64,560,ri_Image,4);
    wa = new ingredients("Water",(width/2 - 172),514,64,64,560,wa_Image, 4);
    ol_oi = new ingredients("Oliva Oil",(width/2 - 98),514,64,64,560,ol_oi_Image, 4);
    br = new ingredients("Bread",(width/2 - 26),514,64,64,560,br_Image, 4);
    fl = new ingredients("Flour",(width/2 - 320),598,64,64,560,fl_Image, 4);

    //comida já pronta ->name, rc1,rc2,rc3, pr, wa
            //abreviatura = 3 letras de cada palavra
    noo = new food("Noodles", 2000, noo_Image,0);
    bre_ome = new food("Bread Omelete", 2000, bre_ome_Image,0);
    tun_sus = new food("Tuna Sushi", 2000, tun_sus_Image,0);
    shi_sus = new food("Shimp Sushi", 2000, shi_sus_Image,0);
    
    cho_cak = new food("Chocolate Cake", 2000, cho_cak_Image,0);
    che_pie = new food("Cherry Pie", 2000, che_pie_Image,0);
    
};



const CookDraw = ()=>{
    background(45,45,45);
  //Cooking menu
  image(BottomFrame, windowWidth/2 - 420 , 190, 840, 520);
       
  //Boxes to fill with ingredients
  //ingredient 1
      fill(86, 255, 8);
      strokeWeight(2);
      rect((width/2 - 320),300,90,90);
      
  //ingredient 2
      rect((width/2 - 160),300,90,90);
  //ingredient 3
      rect((width/2),300,90,90);
  //result
      rect((width/2 +160),300,90,90);
  //caixa onde fica os ingredientes
      strokeWeight(4);
      rect((width/2 - 330),420,590,260);
  //receitas
      rect((width/2 + 50),430, 200,240);


    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 &&
        eg.x > (width/2 - 160) && eg.x < (width/2 - 70) && eg.y > 300 && eg.y < 390 &&
        pa.x > (width/2) && pa.x < (width/2 + 90) && pa.y > 300 && pa.y < 390){
            noo.show();
    }

    if (eg.x > (width/2 - 320) && eg.x < (width/2 - 230) && eg.y > 300 && eg.y < 390 &&
        ol_oi.x > (width/2 - 160) && ol_oi.x < (width/2 - 70) && ol_oi.y > 300 && ol_oi.y < 390 &&
        br.x > (width/2) && br.x < (width/2 + 90) && br.y > 300 && br.y < 390){
            bre_ome.show();
    }

    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 &&
        ri.x > (width/2 - 160) && ri.x < (width/2 - 70) && ri.y > 300 && ri.y < 390 &&
        tu.x > (width/2) && tu.x < (width/2 + 90) && tu.y > 300 && tu.y < 390){
            tun_sus.show();
    }

    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 &&
        ri.x > (width/2 - 160) && ri.x < (width/2 - 70) && ri.y > 300 && ri.y < 390 &&
        sh.x > (width/2) && sh.x < (width/2 + 90) && sh.y > 300 && sh.y < 390){
            shi_sus.show();
            
    }
   
    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 &&
        fl.x > (width/2 - 160) && fl.x < (width/2 - 70) && fl.y > 300 && fl.y < 390 &&
        ca.x > (width/2) && ca.x < (width/2 + 90) && ca.y > 300 && ca.y < 390){
            cho_cak.show();
    }

    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 &&
        fl.x > (width/2 - 160) && fl.x < (width/2 - 70) && fl.y > 300 && fl.y < 390 &&
        ch.x > (width/2) && ch.x < (width/2 + 90) && ch.y > 300 && ch.y < 390){
            che_pie.show();
    }
    
    Text();
    if (tu.amount > 0){
    tu.show();
    }
    if (sh.amount > 0){
    sh.show();
    }
    if (ca.amount > 0){
    ca.show();
    }
    if (ch.amount > 0){    
    ch.show();
    }
    if (eg.amount > 0){
    eg.show();
    }
    if (pa.amount > 0){
    pa.show();
    }
    if (ri.amount > 0){
    ri.show();
    }
    if (wa.amount > 0){
    wa.show();
    }
    if (ol_oi.amount > 0){
    ol_oi.show();
    }
    if (br.amount > 0){
    br.show();
    }
    if (fl.amount > 0){
    fl.show();
    }
}


const CookMousePressed = () =>{
    tu.clicked();
    sh.clicked();
    ca.clicked();
    ch.clicked();
    eg.clicked();
    pa.clicked();
    ri.clicked();
    wa.clicked();
    ol_oi.clicked();
    br.clicked();
    fl.clicked();
}



const FoodMousePressed = () =>{

    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 && eg.x > (width/2 - 160) && eg.x < (width/2 - 70) && eg.y > 300 && eg.y < 390 && pa.x > (width/2) && pa.x < (width/2 + 90) && pa.y > 300 && pa.y < 390){
            noo.clicked();
            //Init PosX && PosY
                wa.x =(width/2 - 172);
                wa.y = 514;
                eg.x =(width/2 - 26);
                eg.y = 430;
                pa.x =(width/2 - 320);
                pa.y = 514;
            //Amount
                wa.amount -= 1
                eg.amount -= 1
                pa.amount -= 1
            //Screen Text
                setTimeout(() => {alert('ADDED'); }, 100);
            console.log(wa.pr + eg.pr + pa.pr);
            httpPost('/post/UpdateDishAm', {item : LocalF, id : UserID}, data =>{
                UpdateDish();
            });
    }

    if (eg.x > (width/2 - 320) && eg.x < (width/2 - 230) && eg.y > 300 && eg.y < 390 && ol_oi.x > (width/2 - 160) && ol_oi.x < (width/2 - 70) && ol_oi.y > 300 && ol_oi.y < 390 && br.x > (width/2) && br.x < (width/2 + 90) && br.y > 300 && br.y < 390){
            bre_ome.clicked();
            //Init PosX && PosY
                eg.x =(width/2 - 26);
                eg.y = 430;
                ol_oi.x =(width/2 - 98);
                ol_oi.y = 514;
                br.x =(width/2 - 26);
                br.y = 514;
            //Amount
                eg.amount -= 1
                ol_oi.amount -= 1
                br.amount -= 1
            //Screen Text
                setTimeout(() => {alert('ADDED'); }, 100);
            console.log(wa.pr + eg.pr + pa.pr);
            ///////////
            httpPost('/post/UpdateDishAm', {item : LocalF, id : UserID}, data =>{
                UpdateDish();
            });
    }

    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 && ri.x > (width/2 - 160) && ri.x < (width/2 - 70) && ri.y > 300 && ri.y < 390 && tu.x > (width/2) && tu.x < (width/2 + 90) && tu.y > 300 && tu.y < 390){
            tun_sus.clicked();
            //Init PosX && PosY
                wa.x =(width/2 - 172);
                wa.y = 514;
                ri.x =(width/2 - 246);
                ri.y = 514;
                tu.x =(width/2 - 320);
                tu.y = 430;
            //Amount
                wa.amount -= 1
                ri.amount -= 1
                tu.amount -= 1
            //Screen Text
                setTimeout(() => {alert('ADDED'); }, 100);
            console.log(wa.pr + ri.pr + tu.pr);
            ///////////
            httpPost('/post/UpdateDishAm', {item : LocalF, id : UserID}, data =>{
                UpdateDish();
            });
    }

    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 && ri.x > (width/2 - 160) && ri.x < (width/2 - 70) && ri.y > 300 && ri.y < 390 && sh.x > (width/2) && sh.x < (width/2 + 90) && sh.y > 300 && sh.y < 390){
            shi_sus.clicked();
            //Init PosX && PosY
                wa.x =(width/2 - 172);
                wa.y = 514;
                ri.x =(width/2 - 246);
                ri.y = 514;
                sh.x =(width/2 - 246);
                sh.y = 430;
            //Amount
            wa.amount -= 1
            ri.amount -= 1
            sh.amount -= 1
            //Screen Text
                setTimeout(() => {alert('ADDED'); }, 100);
            console.log(wa.pr + ri.pr + sh.pr);
            console.log(shi_sus.amount);
            ///////////
            httpPost('/post/UpdateDishAm', {item : LocalF, id : UserID}, data =>{
                UpdateDish();
            });
    }
   
    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 && fl.x > (width/2 - 160) && fl.x < (width/2 - 70) && fl.y > 300 && fl.y < 390 && ca.x > (width/2) && ca.x < (width/2 + 90) && ca.y > 300 && ca.y < 390){
            cho_cak.clicked();
            //Init PosX && PosY
                wa.x =(width/2 - 172);
                wa.y = 514;
                fl.x =(width/2 - 320);
                fl.y = 598;
                ca.x =(width/2 - 172);
                ca.y = 430;
            //Amount
                wa.amount -= 1
                fl.amount -= 1
                ca.amount -= 1
            //Screen Text
                setTimeout(() => {alert('ADDED'); }, 100);
            console.log(wa.pr + fl.pr + ca.pr);
            ///////////
            httpPost('/post/UpdateDishAm', {item : LocalF, id : UserID}, data =>{
                UpdateDish();
            });
    }

    if (wa.x > (width/2 - 320) && wa.x < (width/2 - 230) && wa.y > 300 && wa.y < 390 && fl.x > (width/2 - 160) && fl.x < (width/2 - 70) && fl.y > 300 && fl.y < 390 && ch.x > (width/2) && ch.x < (width/2 + 90) && ch.y > 300 && ch.y < 390){
            che_pie.clicked();
            //Init PosX && PosY
                wa.x =(width/2 - 172);
                wa.y = 514;
                eg.x =(width/2 - 26);
                eg.y = 430;
                pa.x =(width/2 - 230);
                pa.y = 514;
            //Amount
                wa.amount -= 1
                eg.amount -= 1
                pa.amount -= 1
            //Screen Text
                setTimeout(() => {alert('ADDED'); }, 100);
            console.log(wa.pr + eg.pr + pa.pr);  
            ///////////
            httpPost('/post/UpdateDishAm', {item : LocalF, id : UserID}, data =>{
                UpdateDish();
            });      
    }

}

const CookMouseReleased = () =>{
    tu.rele();
    sh.rele();
    ca.rele();
    ch.rele();
    eg.rele();
    pa.rele();
    ri.rele();
    wa.rele();
    ol_oi.rele();
    br.rele();
    fl.rele();
}

const Text = () => {
    textAlign(CENTER, CENTER);
    
    fill(0);
    textSize(40);

    text("+",(width/2 - 195),350);
    text("+",(width/2 - 35),350);
    text("=",(width/2 + 125),350);

    textSize(10);
    text("Water + Eggs + Pasta = Noodles", (width/2 + 145), 450);
    text("Egg + Oliva Oil + Bread = Omelete", (width/2 + 145), 470);
    text("Water + Rice + Tuna = Tuna Sushi", (width/2 + 145), 490);
    text("Water + Rice + Shrimp = Shrimp Sushi", (width/2 + 145),510);
    text("Water + Flour + Cacoa = Chocolate cake", (width/2 + 145), 530);
    text("Water + Flour + Cherry = Cherry pie", (width/2 + 145), 550);
}