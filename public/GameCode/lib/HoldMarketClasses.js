const MarketIngredientsClasses = () =>{

    //The ingredients classes\\
        ingredientsClasses.push(new ingredients('tu' /*ID*/, tu_Image/*Image*/, 'Tuna'/*Name*/));
        ingredientsClasses.push(new ingredients('sh' /*ID*/, sh_Image/*Image*/, 'Shrimp'/*Name*/));
        ingredientsClasses.push(new ingredients('co' /*ID*/, ca_Image/*Image*/, 'Cocoa'/*Name*/));
        ingredientsClasses.push(new ingredients('ch' /*ID*/, ch_Image/*Image*/, 'Cherry'/*Name*/));
        ingredientsClasses.push(new ingredients('eg' /*ID*/, eg_Image/*Image*/, 'Eggs'/*Name*/));
        ingredientsClasses.push(new ingredients('pa' /*ID*/, pa_Image/*Image*/, 'Pasta'/*Name*/));
        ingredientsClasses.push(new ingredients('ri' /*ID*/, ri_Image/*Image*/, 'Rice'/*Name*/));
        ingredientsClasses.push(new ingredients('wa' /*ID*/, wa_Image/*Image*/, 'Water'/*Name*/));
        ingredientsClasses.push(new ingredients('ol_oi' /*ID*/, ol_oi_Image/*Image*/, 'Olivia Oil'/*Name*/));
        ingredientsClasses.push(new ingredients('br' /*ID*/, br_Image/*Image*/, 'Bread'/*Name*/));
        ingredientsClasses.push(new ingredients('fl' /*ID*/, fl_Image/*Image*/, 'Flour'/*Name*/));
    //------------------------\\
};

const MarketDishesClasses = () =>{

    //The dishes classes\\
        dishesClasses.push(new dishes('no' /*id*/, noo_Image /* image*/, 'Noodles' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
        dishesClasses.push(new dishes('br_om' /*id*/, bre_ome_Image /* image*/, 'Bread Omelete' /*Name*/, {ingredient1: 'eg', ingredient2: 'br', ingredient3: ''} /*Recipes*/));  
        dishesClasses.push(new dishes('tu_su' /*id*/, tun_sus_Image /* image*/, 'Tuna Sushi' /*Name*/, {ingredient1: 'tu', ingredient2: 'ri', ingredient3: 'wa'} /*Recipes*/));  
        dishesClasses.push(new dishes('sh_su' /*id*/, shi_sus_Image /* image*/, 'Shrimp Sushi' /*Name*/, {ingredient1: 'sh', ingredient2: 'ri', ingredient3: 'wa'} /*Recipes*/));  
        dishesClasses.push(new dishes('ch_ca' /*id*/, cho_cak_Image /* image*/, 'Chocolate Cake' /*Name*/, {ingredient1: 'co', ingredient2: 'fl', ingredient3: 'eg'} /*Recipes*/));  
        dishesClasses.push(new dishes('ch_pi' /*id*/, che_pie_Image /* image*/, 'Cherry Pie' /*Name*/, {ingredient1: 'ch', ingredient2: 'fl', ingredient3: 'wa'} /*Recipes*/));  
    //-------------------\\

};

const MarketFurnitureClasses = () =>{

    //The furniture classes\\

        furniture.push(new NewFurniture('ro_ta' /*ID*/, rou_tab_Image /*Img*/, 10 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 69/*price*/, 'Round Table' /*name*/));
        furniture.push(new NewFurniture('ch_fr' /*ID*/, cha_fro_Image /*Img*/, 10 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 100/*price*/, 'Front Chair' /*name*/));
        furniture.push(new NewFurniture('ch_ba' /*ID*/, cha_bac_Image /*Img*/, 10 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 100/*price*/, 'Back Chair' /*name*/));
        furniture.push(new NewFurniture('cu_ch' /*ID*/, cha_cus_Image /*Img*/, 20 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 200/*price*/, 'Cushion Chair' /*name*/));
        furniture.push(new NewFurniture('mi_po' /*ID*/, animated_plant /*Img*/, 30 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 300/*price*/, 'Potted Plant' /*name*/));
        furniture.push(new NewFurniture('an_cr' /*ID*/, animated_crow /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Crow' /*name*/));
        furniture.push(new NewFurniture('an_cr2' /*ID*/, animated_crow2 /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Sitting Crow' /*name*/));

        furniture.push(new NewFurniture('ma_ka' /*ID*/, tel_pla_Image /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Karaoke\n Machine' /*name*/));
        furniture.push(new NewFurniture('be_pl' /*ID*/, bej_pla_Image /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Beje Plant' /*name*/));
        furniture.push(new NewFurniture('pu_pl' /*ID*/, pur_pla_Image /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Purple Plant' /*name*/));
        furniture.push(new NewFurniture('ov' /*ID*/, oven_Image /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Oven' /*name*/));
        furniture.push(new NewFurniture('an_ca' /*ID*/, animated_cat /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Cat' /*name*/));
        furniture.push(new NewFurniture('ca_ma' /*ID*/, cardbox_maid /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Cardbox\n Maid' /*name*/));
        furniture.push(new NewFurniture('si_ta' /*ID*/, sim_tab_Image /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Heart\n Table' /*name*/));
        furniture.push(new NewFurniture('he' /*ID*/, heater /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Heater' /*name*/));
        furniture.push(new NewFurniture('ch_he' /*ID*/, ChocolateHeart /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Heart Shapped\n Chocolates' /*name*/));
        furniture.push(new NewFurniture('st' /*ID*/, Stanchion /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Stanchion' /*name*/));
        furniture.push(new NewFurniture('ch_fo' /*ID*/, ChocolateFountain /*Img*/, 100 /*rep*/, 1 /*sizeX*/, 1 /*sizeY*/, 1000/*price*/, 'Chocolate\n Fountain' /*name*/));
    //----------------------\\
};