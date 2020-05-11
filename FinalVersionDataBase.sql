# DROP SCHEMA test123;
DROP SCHEMA IF EXISTS momotaro;
CREATE DATABASE IF NOT EXISTS momotaro;

USE momotaro;

CREATE TABLE users(
    user_id         INT NOT NULL AUTO_INCREMENT,
    user_password     	VARCHAR(40) NOT NULL,
    user_name         	VARCHAR(40) NOT NULL,
    user_email 			VARCHAR(40) NOT NULL,
    PRIMARY KEY (user_id)
);

/*This are the tables related to the friends list*/

CREATE TABLE friend_list(
	user_id INT NOT NULL,
    friend_id INT NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);


/*This are the tables related to the restaurant */

CREATE TABLE restaurant(
    user_id INT NOT NULL,
    res_name VARCHAR(40),
    res_money INT DEFAULT 0,
    res_level INT DEFAULT 1,
    res_exp INT DEFAULT 0,
    PRIMARY KEY(user_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE dec_market(
	item_id VARCHAR(8) NOT NULL,
	item_price INT DEFAULT 0 NOT NULL,
    PRIMARY KEY(item_id)
);
/*Here we write the decorations we want in the game*/
INSERT INTO dec_market(item_id, item_price) VALUES('ro_ta', 100); #Add the round table with the set price of 100 yen
INSERT INTO dec_market(item_id, item_price) VALUES('ch_fr', 100); #Add a front chair
INSERT INTO dec_market(item_id, item_price) VALUES('ch_ba', 100); #Add a back chair
INSERT INTO dec_market(item_id, item_price) VALUES('cu_ch', 200); #Add a cushion chair
INSERT INTO dec_market(item_id, item_price) VALUES('mi_po', 300); #Add an animated plant
INSERT INTO dec_market(item_id, item_price) VALUES('an_cr', 1000); #Add an animated crow
INSERT INTO dec_market(item_id, item_price) VALUES('an_cr2', 1000); #Add an animated crow2

CREATE TABLE dec_in_inventory(
    item_id VARCHAR(8) NOT NULL,
	user_id INT,
    item_amount INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES restaurant(user_id),
    FOREIGN KEY(item_id) REFERENCES dec_market(item_id)
);

CREATE TABLE dec_in_restaurant(
    item_id VARCHAR(8) NOT NULL,
	user_id INT NOT NULL,
    item_x INT NOT NULL,
    item_y INT NOT NULL,
	FOREIGN KEY(user_id) REFERENCES dec_in_inventory(user_id)
);




/* Food route stuff*/

CREATE TABLE recipes_types(
	recipe_id VARCHAR(8) NOT NULL,
    recipe_level INT NOT NULL DEFAULT 0,
    recipe_name VARCHAR(255),
    dish_id VARCHAR(8),
    PRIMARY KEY(recipe_id)
);
/* Add the recipes here */
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id) VALUES('rcp_1', 1, 'Bread Omelete', 'br_om');
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id) VALUES('rcp_2', 2, 'Tuna Sushi', 'tu_su');
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id) VALUES('rcp_3', 3, 'Shimp Sushi', 'sh_su');
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id) VALUES('rcp_4', 4, 'Chocolate Cake', 'ch_ca');
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id) VALUES('rcp_5', 5, 'Cherry Pie', 'ch_pi');
/*----------------------*/


CREATE TABLE recipes_inventory(
	dish_id VARCHAR(8) NOT NULL,
	user_id INT NOT NULL,
    recipe_id VARCHAR(8) NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(recipe_id) REFERENCES recipes_types(recipe_id)
);

CREATE TABLE dishes_inventory(
	user_id INT NOT NULL,
    dishes_amount INT NOT NULL,
    dish_id VARCHAR(8) NOT NULL UNIQUE,
    FOREIGN KEY(user_id) REFERENCES recipes_inventory(user_id)
);




CREATE TABLE ingredients_market(
	ingredient_id VARCHAR(8) NOT NULL,
    ingredient_price INT NOT NULL,
    ingredient_level INT NOT NULL,
    PRIMARY KEY(ingredient_id)
);

/* Write down the ingredients here */
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('tu', 50, 1); #Tuna
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('wa', 20, 1); #Water
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('ri', 50, 1); #Rice
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('br', 75, 1); #Bread
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('fl', 100, 2); #Flour
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('eg', 120, 4); #Eggs
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('ol_oi', 250, 6); #Olivia oil
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('co', 85, 8); #Cocoa
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('ch', 100, 10); #Cherry
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('pa', 200, 12); #Water
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('sh', 500, 14); #Shrimp

/*---------------------------------*/
CREATE TABLE ingredients_inventory(
	user_id INT NOT NULL,
    ingredient_id VARCHAR(8) NOT NULL UNIQUE,
    ingredient_amount INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(ingredient_id) REFERENCES ingredients_market(ingredient_id)
);

