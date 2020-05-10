//Variables\\
let ingredientsClasses = []; //The igredients classes with the info
let dishesClasses = []; //The dishes classes with the info

let ingredientsInventory = []; //The inventory of the player when it comes to ingredients


const CookSetUp = () => {

    /*The ingredients classes*/
    ingredientsClasses.push(new ingredients('tu' /*ID*/, tu_Image/*Image*/, 'Tuna'/*Name*/));
    ingredientsClasses.push(new ingredients('sh' /*ID*/, tu_Image/*Image*/, 'Shrimp'/*Name*/));
    ingredientsClasses.push(new ingredients('ca' /*ID*/, tu_Image/*Image*/, 'Cacoa'/*Name*/));
    ingredientsClasses.push(new ingredients('ch' /*ID*/, tu_Image/*Image*/, 'Cherry'/*Name*/));
    ingredientsClasses.push(new ingredients('eg' /*ID*/, tu_Image/*Image*/, 'Eggs'/*Name*/));
    ingredientsClasses.push(new ingredients('pa' /*ID*/, tu_Image/*Image*/, 'Pasta'/*Name*/));
    ingredientsClasses.push(new ingredients('ri' /*ID*/, tu_Image/*Image*/, 'Rice'/*Name*/));
    ingredientsClasses.push(new ingredients('wa' /*ID*/, tu_Image/*Image*/, 'Water'/*Name*/));
    ingredientsClasses.push(new ingredients('ol_oi' /*ID*/, tu_Image/*Image*/, 'Olivia oil'/*Name*/));
    ingredientsClasses.push(new ingredients('br' /*ID*/, tu_Image/*Image*/, 'Bread'/*Name*/));
    ingredientsClasses.push(new ingredients('fl' /*ID*/, tu_Image/*Image*/, 'Flour'/*Name*/));
    
    /*The dishes classes*/
    /*id, image, name, recipes (write the id of each igredient)*/
    dishesClasses.push(new dishes('no' /*id*/, noo_Image /* image*/, 'Noodles' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('br_om' /*id*/, bre_ome_Image /* image*/, 'Bread Omelete' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('tu_su' /*id*/, tun_sus_Image /* image*/, 'Tuna Sushi' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('sh_su' /*id*/, shi_sus_Image /* image*/, 'Shimp Sushi' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('ch_ca' /*id*/, cho_cak_Image /* image*/, 'Chocolate Cake' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    dishesClasses.push(new dishes('ch_pi' /*id*/, che_pie_Image /* image*/, 'Cherry Pie' /*Name*/, {ingredient1: 'wa', ingredient2: 'pa', ingredient3: 'ol_oi'} /*Recipes*/));  
    
};



const CookDraw = ()=>{
    //Frame background
    background(45);
    image(LeaderboardsFrame, windowWidth/2 - 500, windowHeight/2 - 300, 1000, 600);
    image(MarketButton, windowWidth/2 - 500, windowHeight/2 - 375, 200, 75);

    textSize(30);
    textAlign(CENTER, CENTER);
    BetterText('Cooking', windowWidth/2 - 400, windowHeight/2 - 337.5);


}


const CookMousePressed = () =>{

}

const CookMouseReleased = () =>{

}
