# DROP SCHEMA test123;
DROP SCHEMA IF EXISTS momotaro;
CREATE DATABASE IF NOT EXISTS momotaro;

USE momotaro;

CREATE TABLE users(
    user_id         INT NOT NULL AUTO_INCREMENT,
    user_password     	VARCHAR(40) NOT NULL,
    user_name         	VARCHAR(40) NOT NULL,
    user_email 			VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

/*This are the tables related to the friends list*/

CREATE TABLE friend_list(
	user_id INT NOT NULL,
    friend_id INT NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE friend_requests(
	user_id INT NOT NULL,
    other_user_id INT NOT NULL,
    sent_date DATE,
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
INSERT INTO dec_market(item_id, item_price) VALUES('ro_ta', 2000); #Add the round table with the set price of 100 yen
INSERT INTO dec_market(item_id, item_price) VALUES('ch_fr', 500); #Add a front chair
INSERT INTO dec_market(item_id, item_price) VALUES('ch_ba', 500); #Add a back chair
INSERT INTO dec_market(item_id, item_price) VALUES('cu_ch', 800); #Add a cushion chair
INSERT INTO dec_market(item_id, item_price) VALUES('mi_po', 1500); #Add an animated plant
INSERT INTO dec_market(item_id, item_price) VALUES('an_cr', 5000); #Add an animated crow
INSERT INTO dec_market(item_id, item_price) VALUES('an_cr2', 5000); #Add an animated crow2

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
    dish_price INT,
    exp_value INT,
    PRIMARY KEY(recipe_id)
);

/* Add the recipes here */
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id, dish_price, exp_value) VALUES('rcp_1', 1, 'Bread Omelete', 'br_om', 450, 2);
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id, dish_price, exp_value) VALUES('rcp_2', 2, 'Tuna Sushi', 'tu_su', 650, 4);
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id, dish_price, exp_value) VALUES('rcp_3', 3, 'Shimp Sushi', 'sh_su', 800, 6);
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id, dish_price, exp_value) VALUES('rcp_4', 4, 'Chocolate Cake', 'ch_ca', 497, 8);
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id, dish_price, exp_value) VALUES('rcp_5', 5, 'Cherry Pie', 'ch_pi', 490, 10);
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id, dish_price, exp_value) VALUES('rcp_6', 6, 'Noodles', 'no', 698, 10);
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
    dish_id VARCHAR(8) NOT NULL,
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
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('ri', 56, 1); #Rice
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('br', 21, 1); #Bread
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('fl', 15, 2); #Flour
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('eg', 78, 4); #Eggs
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('ol_oi', 220, 6); #Olivia oil
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('co', 77, 8); #Cocoa
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('ch', 39, 10); #Cherry
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('pa', 66, 12); #Water
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('sh', 280, 14); #Shrimp

/*---------------------------------*/
CREATE TABLE ingredients_inventory(
	user_id INT NOT NULL,
    ingredient_id VARCHAR(8) NOT NULL,
    ingredient_amount INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(ingredient_id) REFERENCES ingredients_market(ingredient_id)
);


/*Triggers*/
DELIMITER $$

CREATE TRIGGER add_default_recipes
AFTER INSERT ON restaurant
FOR EACH ROW
BEGIN

	INSERT INTO recipes_inventory(dish_id, user_id, recipe_id)
    VALUES('br_om', new.user_id, 'rcp_1');
	
    #Give the player a starting chair
    INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
    VALUES('ch_fr', new.user_id, 1);
    
    #Give the player a starting round table
    INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
    VALUES('ro_ta', new.user_id, 1);
    
    #Give some eggs
    INSERT INTO ingredients_inventory(ingredient_id, user_id, ingredient_amount)
    VALUES('eg', new.user_id, 3);

    #Give some bread
    INSERT INTO ingredients_inventory(ingredient_id, user_id, ingredient_amount)
    VALUES('br', new.user_id, 3);
    
END$$



/*Procedures*/

/*---------------------------------------------------------------------------------------------------------------------------------*/
#Add a dish into the player inventory
CREATE PROCEDURE purchaseDish(IN input_dish_id VARCHAR(8), IN input_id INT)
BEGIN
	
	SET @AmoutOfCash = (
		SELECT 
			dish_price 
		FROM
			recipes_types
		WHERE
			dish_id = input_dish_id
    );

	SET @AmountOfEXP = (
		SELECT
			exp_value
		FROM
			recipes_types
		WHERE
			dish_id = input_dish_id
    );

	SET @AmountOfDishes = (
		SELECT
			dishes_amount
		FROM
			dishes_inventory
		WHERE 
			user_id = input_id AND dish_id = input_dish_id
    );

IF @AmountOfDishes > 0 THEN
	UPDATE restaurant 
    SET
		res_money = res_money + @AmoutOfCash,
        res_exp = res_exp + @AmountOfEXP
    WHERE 
		user_id = input_id;
    
    UPDATE dishes_inventory
    SET 
		dishes_amount = dishes_amount - 1
    WHERE
		user_id = input_id;
        
        
	SELECT user_id AS ID, res_money AS money, res_exp AS EXP
    FROM restaurant WHERE
    user_id = input_id;
END IF;

END$$

DELIMITER ; 
/*---------------------------------------------------------------------------------------------------------------------------------*/
#Check if the player should level up and if yes level up
DELIMITER $$

CREATE PROCEDURE CheckLevel(IN inp_user_id INT)
BEGIN


SET @restaurantLevel = (
SELECT 
	res_level
FROM
	restaurant
WHERE
	user_id = inp_user_id
);

#In case the guy levels up he needs this variables
SET @recipeID = (
SELECT
	recipe_id
FROM
	recipes_types
WHERE
	recipe_level = (@restaurantLevel + 1)
);

SET @recipeDishID = (
SELECT
	dish_id
FROM
	recipes_types
WHERE
	recipe_level = (@restaurantLevel + 1)	
);



SET @restaurantExp = (
SELECT
	res_exp
FROM
	restaurant
WHERE
	user_id = inp_user_id
);

SET @ReqEXP = 0;

IF @restaurantLevel = 1 THEN

	SET @ReqEXP = 10 * @restaurantLevel;

ELSE

	SET @ReqEXP = 10 + (10 * @restaurantLevel) + (10 * (@restaurantLevel - 1));

END IF;


IF @ReqEXP <= @restaurantExp THEN
	
	SELECT @restaurantLevel + 1 AS "yes";
	UPDATE restaurant SET res_level = res_level + 1 WHERE user_id = inp_user_id;
    UPDATE restaurant SET res_exp = res_exp - @ReqEXP WHERE user_id = inp_user_id;
    
    IF @recipeID IS NOT NULL THEN
		INSERT INTO recipes_inventory(dish_id, user_id, recipe_id)VALUES(@recipeDishID, inp_user_id, @recipeID);
    END IF;
    
ELSE

	SELECT @restaurantLevel AS "no";

END IF;

END$$

DELIMITER ;
/*---------------------------------------------------------------------------------------------------------------------------------*/
#Send friend request
DELIMITER $$

CREATE PROCEDURE CreateRequestInvite(IN inp_user_id INT, IN invited_user_name VARCHAR(255))
BEGIN
	
    #invited_user_id
    
    SET @GetUserID = (
		SELECT
			user_id
		FROM
			users
		WHERE
			user_name = invited_user_name
    );
    
    SET @GetUserExists = (
		SELECT
			COUNT(1)
		FROM
			users
		WHERE
			user_name = invited_user_name
    );
    
    IF @GetUserExists > 0 THEN
		
			SET @CheckIfInviteExists = (
				SELECT 
					COUNT(1)
				FROM 
					friend_requests 
				WHERE (user_id = inp_user_id AND other_user_id = @GetUserID)
			);
			
			SET @CheckIfInviteReceived = (
				SELECT 
					COUNT(1)
				FROM 
					friend_requests 
				WHERE (user_id = @GetUserID AND other_user_id = inp_user_id)
			);
			
			IF inp_user_id != @GetUserID AND @CheckIfInviteExists = 0 AND @CheckIfInviteReceived = 0 THEN
			
				INSERT INTO friend_requests(user_id, other_user_id, sent_date)
				VALUES(inp_user_id, @GetUserID, CURDATE());
				
			ELSEIF @CheckIfInviteExists > 0 THEN
				SELECT user_id as 'Already sent the invite!' FROM users WHERE user_id = inp_user_id;
			ELSEIF @CheckIfInviteExists = 0 AND @CheckIfInviteReceived = 0 THEN
				SELECT user_id as 'Cannot Send friend request to yourself' FROM users WHERE user_id = inp_user_id;
			ELSE    
				SELECT user_id as 'You already have a pendent invite from this user' FROM users WHERE user_id = inp_user_id;
			END IF;
        
    ELSE
    
		SELECT user_id as 'User not found' FROM users WHERE user_id = inp_user_id;
    
    END IF;
    
	
    
END$$

DELIMITER ;

/*---------------------------------------------------------------------------------------------------------------------------------*/
#Get a users friend list by ID
DELIMITER $$
CREATE PROCEDURE GetFriendList(IN inp_user_id INT)
BEGIN

SELECT 
	f.friend_id as 'id', r.res_name as 'resname', res_money as 'money', res_level as 'level', res_exp as 'exp'
FROM 
	friend_list f
INNER JOIN
		restaurant r ON r.user_id = f.friend_id
WHERE 
	f.user_id = inp_user_id;
    
END$$
DELIMITER ;

#Get a users received requests
DELIMITER $$
CREATE PROCEDURE GetReceivedRequests(IN inp_user_id INT)
BEGIN

SELECT
	r.user_id as 'id', r.res_name as 'resname',r.res_money as 'money', r.res_level as 'level', r.res_exp as 'exp'  
FROM
	friend_requests fr
INNER JOIN
	restaurant r ON r.user_id = fr.user_id
WHERE
	fr.other_user_id = inp_user_id;
    
END$$
DELIMITER ;

#Get a users sent requests
DELIMITER $$
CREATE PROCEDURE GetSentRequests(IN inp_user_id INT)
BEGIN
SELECT
	r.user_id as 'id',  u.user_name,r.res_name as 'resname',r.res_money as 'money', r.res_level as 'level', r.res_exp as 'exp', TIMESTAMPDIFF(day, fr.sent_date, CURDATE()) as 'days'  
FROM
	friend_requests fr
INNER JOIN
	restaurant r ON r.user_id = fr.other_user_id
INNER JOIN
	users u ON u.user_id = fr.other_user_id
WHERE
	fr.user_id = 2;
END$$
DELIMITER ;

