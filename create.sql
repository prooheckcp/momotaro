# DROP SCHEMA test123;
DROP SCHEMA IF EXISTS momotaro;
CREATE DATABASE IF NOT EXISTS momotaro;

USE momotaro;

CREATE TABLE users(
    user_id         	INT NOT NULL AUTO_INCREMENT,
    user_password     	VARCHAR(255) NOT NULL,
    user_name         	VARCHAR(40) UNIQUE NOT NULL,
    user_email 			VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

/*This are the tables related to the friends list*/

CREATE TABLE friend_list(
	user_id 			INT NOT NULL,
    friend_id 			INT NOT NULL,
    friendship_date 	date NOT NULL,
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
    user_id 	INT NOT NULL,
    res_name 	VARCHAR(40),
    res_money 	INT DEFAULT 0,
    res_level 	INT DEFAULT 1,
    res_exp 	INT DEFAULT 0,
    PRIMARY KEY(user_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE dec_market(
	item_id 	VARCHAR(8) NOT NULL,
	item_price 	INT DEFAULT 0 NOT NULL,
    PRIMARY KEY(item_id)
);

/*Here we write the decorations we want in the game*/
INSERT INTO dec_market(item_id, item_price) VALUES('ro_ta', 2000); #Add the round table with the set price of 100 yen
INSERT INTO dec_market(item_id, item_price) VALUES('ch_fr', 500); #Add a front chair
INSERT INTO dec_market(item_id, item_price) VALUES('ch_ba', 500); #Add a back chair
INSERT INTO dec_market(item_id, item_price) VALUES('cu_ch', 500); #Add a cushion chair
INSERT INTO dec_market(item_id, item_price) VALUES('mi_po', 1000); #Add an animated plant
INSERT INTO dec_market(item_id, item_price) VALUES('an_cr', 4000); #Add an animated crow
INSERT INTO dec_market(item_id, item_price) VALUES('an_cr2', 4000); #Add an animated crow2
INSERT INTO dec_market(item_id, item_price) VALUES('ma_ka', 3000); #Add a karaoke machine
INSERT INTO dec_market(item_id, item_price) VALUES('be_pl', 499); #Add a beje plant
INSERT INTO dec_market(item_id, item_price) VALUES('pu_pl', 499); #Add a purple plant
INSERT INTO dec_market(item_id, item_price) VALUES('ov', 1599); #Add an oven
INSERT INTO dec_market(item_id, item_price) VALUES('an_ca', 4999); #Add an animated cat
INSERT INTO dec_market(item_id, item_price) VALUES('ca_ma', 799); #Add a cardbox maid
INSERT INTO dec_market(item_id, item_price) VALUES('si_ta', 1900); #Add a heart table
INSERT INTO dec_market(item_id, item_price) VALUES('he', 899); #Add an heater
INSERT INTO dec_market(item_id, item_price) VALUES('ch_he', 389); #Add chocolates shaped heart
INSERT INTO dec_market(item_id, item_price) VALUES('st', 699); #Add a stanchion
INSERT INTO dec_market(item_id, item_price) VALUES('ch_fo', 1489); #Add a chocolate fountain

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
INSERT INTO recipes_types(recipe_id, recipe_level, recipe_name, dish_id, dish_price, exp_value) VALUES('rcp_3', 3, 'Shrimp Sushi', 'sh_su', 800, 6);
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
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('ol_oi', 119, 6); #Olivia oil
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('co', 77, 8); #Cocoa
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('ch', 39, 10); #Cherry
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('pa', 66, 12); #Water
INSERT INTO ingredients_market(ingredient_id, ingredient_price, ingredient_level) VALUES('sh', 137, 14); #Shrimp

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

/*---------------------------------------------------------------------------------------------------------------------------------*/
#Check if the player should level up and if yes level up

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

/*---------------------------------------------------------------------------------------------------------------------------------*/
#Send friend request
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
			
            SET @CheckIfFriends = (
            
				SELECT
					COUNT(1)
				FROM
					friend_list
                WHERE
					user_id = @GetUserID AND friend_id = inp_user_id
            );
            
			IF inp_user_id != @GetUserID AND @CheckIfInviteExists = 0 AND @CheckIfInviteReceived = 0 AND @CheckIfFriends = 0 THEN
			
				INSERT INTO friend_requests(user_id, other_user_id, sent_date)
				VALUES(inp_user_id, @GetUserID, CURDATE());
                
			ELSEIF @CheckIfFriends != 0 THEN
				SELECT user_id as 'You are already friends with this user!' FROM users WHERE user_id = inp_user_id;
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
/*---------------------------------------------------------------------------------------------------------------------------------*/
#Get a users friend list by ID
CREATE PROCEDURE GetFriendList(IN inp_user_id INT)
BEGIN

SELECT 
	f.friend_id as 'id', u.user_name as 'name', r.res_name as 'resname', res_money as 'money', res_level as 'level', res_exp as 'exp', TIMESTAMPDIFF(day, f.friendship_date, CURDATE()) as 'days' 
FROM 
	friend_list f
INNER JOIN
	restaurant r ON r.user_id = f.friend_id
INNER JOIN
	users u ON u.user_id = f.friend_id
WHERE 
	f.user_id = inp_user_id;
    
END$$
#Get a users received requests
CREATE PROCEDURE GetReceivedRequests(IN inp_user_id INT)
BEGIN

SELECT
	r.user_id as 'id', u.user_name as 'name',r.res_name as 'resname',r.res_money as 'money', r.res_level as 'level', r.res_exp as 'exp', TIMESTAMPDIFF(day, fr.sent_date, CURDATE()) as 'days'    
FROM
	friend_requests fr
INNER JOIN
	restaurant r ON r.user_id = fr.user_id
INNER JOIN
	users u ON u.user_id = fr.user_id
WHERE
	fr.other_user_id = inp_user_id;
    
END$$

#Get a users sent requests
CREATE PROCEDURE GetSentRequests(IN inp_user_id INT)
BEGIN
SELECT
	r.user_id as 'id',  u.user_name as 'name',r.res_name as 'resname',r.res_money as 'money', r.res_level as 'level', r.res_exp as 'exp', TIMESTAMPDIFF(day, fr.sent_date, CURDATE()) as 'days'  
FROM
	friend_requests fr
INNER JOIN
	restaurant r ON r.user_id = fr.other_user_id
INNER JOIN
	users u ON u.user_id = fr.other_user_id
WHERE
	fr.user_id = inp_user_id
ORDER BY
	r.res_level DESC;
END$$
/*---------------------------------------------------------------------------------------------------------------------------------*/

#Cancel a friend request that was sent
CREATE PROCEDURE CancelSentRequest(IN inp_user_id INT, IN inp_other_user_id INT)
BEGIN

SET @CheckIfRequestExists = (

SELECT
	COUNT(1)
FROM
	friend_requests
WHERE
	user_id = inp_user_id AND other_user_id = inp_other_user_id

);

IF @CheckIfRequestExists != 0 THEN

	DELETE FROM friend_requests 
	WHERE 
		user_id = inp_user_id AND other_user_id = inp_other_user_id;
		
	SELECT 'Deleted Friend request' as 'Output';
    
ELSE
	
    SELECT 'Error: did not find the user' as 'Output';

END IF;


END$$
/*---------------------------------------------------------------------------------------------------------------------------------*/

#Accept a friend request that was sent
CREATE PROCEDURE AcceptFriendRequest(IN inp_user_id INT, IN other_user_id INT)
BEGIN

SET @CheckIfFriends = (

SELECT
	COUNT(1)
FROM
	friend_list
WHERE
	(inp_user_id = user_id AND other_user_id = friend_id) OR (other_user_id = user_id AND inp_user_id = friend_id)

);

IF @CheckIfFriends = 0 THEN
	INSERT INTO friend_list(user_id, friend_id, friendship_date)
	VALUES(inp_user_id, other_user_id, CURDATE());

	INSERT INTO friend_list(user_id, friend_id, friendship_date)
	VALUES(other_user_id, inp_user_id, CURDATE());
		
	SELECT 'Added new friend' as 'Output';
        
ELSE

    SELECT 'Users are already friends' as 'Output';
    
END IF;

END$$
/*---------------------------------------------------------------------------------------------------------------------------------*/
#End a friendship
CREATE PROCEDURE EndFriendship(IN inp_user_id INT, IN other_user_id INT)
BEGIN

SET @CheckIfFriends = (

SELECT
	COUNT(1)
FROM
	friend_list
WHERE
	(inp_user_id = user_id AND other_user_id = friend_id) OR (other_user_id = user_id AND inp_user_id = friend_id)

);

IF @CheckIfFriends != 0 THEN
	
    DELETE FROM friend_list
    WHERE
		(friend_id = other_user_id AND user_id = inp_user_id) OR (friend_id = inp_user_id AND user_id = other_user_id);
    
    SELECT 'done' AS 'Output';
    
ELSE

	SELECT 'ERROR: Did not find friend' AS 'Output';

END IF;


END$$
/*---------------------------------------------------------------------------------------------------------------------------------*/
#Gets the name, restaurant name, level and exp of a certain user by ID
CREATE PROCEDURE getRestaurantData(IN inp_user_id INT)
BEGIN

SELECT
	u.user_name as 'name', r.res_name as 'resname', r.res_level as 'level', r.res_exp as 'exp'
FROM
	users u
INNER JOIN
	restaurant r ON r.user_id = u.user_id
WHERE
	u.user_id = inp_user_id;

END$$

#Gets the furniture of a restaurant by ID
CREATE PROCEDURE getRestaurantFurniture(IN inp_user_id INT)
BEGIN
SELECT
	*
FROM
	dec_in_restaurant
WHERE
	user_id = inp_user_id;


END$$
/*---------------------------------------------------------------------------------------------------------------------------------*/
#Creates a new account
CREATE PROCEDURE CreateAccount(IN inp_username VARCHAR(255), IN inp_email VARCHAR(255), IN inp_password VARCHAR(255))
BEGIN

SET @CheckIfUsernameExists = (

SELECT
	COUNT(1)
FROM
	users
WHERE
	user_name = inp_username

);

SET @CheckIfEmailExists = (

SELECT
	COUNT(1)
FROM
	users
WHERE
	user_email = inp_email

);

#First check if username already exists
IF @CheckIfUsernameExists > 0 THEN
	
    SELECT 'Username already exists!' as 'output';

#Check if the email already exists		
ELSEIF @CheckIfEmailExists > 0 THEN
		
	SELECT 'Email already exists!' as 'output';
    
ELSE
	
    #Add into the database
	INSERT INTO momotaro.users(user_password, user_name, user_email)
    VALUES(inp_password, inp_username, inp_email);
    SELECT 'done' as 'output', user_id as 'id'
    FROM users WHERE user_name = inp_username;
    
END IF;

END$$

/*---------------------------------------------------------------------------------------------------------------------------------*/
#Login the user into his account
CREATE PROCEDURE LoginAccount(IN inp_username VARCHAR(255), IN inp_password VARCHAR(255))
BEGIN

SET @CheckIfUsernameExists = (

SELECT
	COUNT(1)
FROM
	users
WHERE
	inp_username = user_name

);

SET @CheckIfPasswordCorrect = (

SELECT
	COUNT(1)
FROM
	users
WHERE
	inp_username = user_name AND inp_password = user_password

);

#Check if the user exists
IF @CheckIfUsernameExists = 0 THEN

SELECT 'Username not found!' AS 'output';

#Check if the password is correct
ELSEIF @CheckIfPasswordCorrect = 0 THEN

SELECT 'The password is incorrect!' AS 'output';

ELSE

SELECT user_id AS 'output'
FROM 
	users
WHERE
	inp_username = user_name AND inp_password = user_password;

END IF;

END$$

/*---------------------------------------------------------------------------------------------------------------------------------*/
#Get the top players sorted by level
CREATE PROCEDURE GetTopPlayers(IN inp_amount INT)
BEGIN

SELECT
	* 
FROM 
	restaurant 
GROUP BY 
	res_level, res_exp, res_name 
ORDER BY 
	res_level DESC LIMIT inp_amount;

END$$
/*---------------------------------------------------------------------------------------------------------------------------------*/
CREATE PROCEDURE GetRecipes()
BEGIN
	SELECT
		* 
	FROM 
		recipes_types;

END$$



CREATE PROCEDURE GetIngredients()
BEGIN

SELECT 
	* 
FROM 
	ingredients_market;

END$$

CREATE PROCEDURE GetDecoration()
BEGIN

SELECT
	* 
FROM 
	dec_market 
ORDER BY 
	item_price;

END$$

CREATE PROCEDURE GetUserHashPass(IN name_inp VARCHAR(255))
BEGIN

SELECT 
	user_password AS "pass", user_id AS "id" 
FROM 
	users 
WHERE 
	user_name = name_inp;

END$$

CREATE PROCEDURE CreateRestaurant(IN inp_userid INT, IN inp_resname VARCHAR(255))
BEGIN

INSERT INTO restaurant(user_id, res_name) 
VALUES(inp_userid, inp_resname);

END$$

#Check if the restaurant exists
CREATE PROCEDURE CheckIfRestaurant(IN inp_userid INT)
BEGIN

SET @CheckIfResExists = (
SELECT
	COUNT(1) 
FROM 
	restaurant 
WHERE 
	user_id = inp_userid
);

IF @CheckIfResExists > 0 THEN

SELECT 'yes' as 'status', res_name as 'res_name'
FROM
	restaurant
WHERE
	user_id = inp_userid;

ELSE

SELECT 'no' as 'status';

END IF;

END$$

#Get the player dishes by ID
CREATE PROCEDURE GetPlayerDishes(IN inp_userid INT)
BEGIN

SELECT 
	* 
FROM 
	dishes_inventory 
WHERE 
	user_id = inp_userid;

END$$

#Get the player recipes by ID
CREATE PROCEDURE GetPlayerRecipes(IN inp_userid INT)
BEGIN

SELECT 
	* 
FROM 
	recipes_inventory 
WHERE 
	user_id = inp_userid;

END$$

#Get the player ingredients inventory
CREATE PROCEDURE GetPlayerIngredients(IN inp_userid INT)
BEGIN

SELECT 
	* 
FROM 
	ingredients_inventory 
WHERE 
	user_id = inp_userid;

END$$

#Get the player inventory by ID
CREATE PROCEDURE GetPlayerInventory(IN inp_userid INT)
BEGIN

SELECT 
	* 
FROM 
	dec_in_inventory 
WHERE 
	user_id = inp_userid;

END$$

#Get the player placed furniture

#Get the recipes details
CREATE PROCEDURE GetRecipesTypes(IN inp_userid INT)
BEGIN

SELECT 
	recipes_types.recipe_id, recipe_level, recipe_name, recipes_inventory.dish_id 
FROM 
	recipes_types 
INNER JOIN recipes_inventory ON recipes_inventory.recipe_id = recipes_types.recipe_id 
WHERE 
	user_id = inp_userid;

END$$

#Get the restaurant stats
CREATE PROCEDURE LoadRestaurantStats(IN inp_userid INT)
BEGIN

SELECT
	res_money, res_level, res_exp
FROM
	restaurant
WHERE
	user_id = inp_userid;

END$$

#Buy ingredient(s)
CREATE PROCEDURE BuyIngredient(IN inp_userid INT, IN inp_price INT, IN ingrdt_id VARCHAR(8), IN purchaseAmount INT)
BEGIN

SET @CheckIfEnoughMoney = (

SELECT COUNT(1)
FROM restaurant
WHERE user_id = inp_userid AND inp_price <= res_money
    
);

#Check if the user has enough money
IF @CheckIfEnoughMoney > 0 THEN
	
	SET @CheckIfHasIngredient = (
    
    SELECT COUNT(1) 
    FROM ingredients_inventory 
    WHERE user_id = inp_userid AND ingredient_id = ingrdt_id
    
    );
	
    #Decrease the money
    UPDATE restaurant SET res_money = res_money - inp_price WHERE user_id = inp_userid;
    
    #Check if he has the ingredient
    IF @CheckIfHasIngredient > 0 THEN
		
        #Increase the amount
        UPDATE ingredients_inventory SET ingredient_amount = ingredient_amount + purchaseAmount 
        WHERE user_id = inp_userid AND ingredient_id = ingrdt_id;
        
        #Throw some feedback to the user
		SELECT CONCAT('You now have: ', ingredient_amount) AS 'output'
        FROM ingredients_inventory
        WHERE user_id = inp_userid AND ingredient_id = ingrdt_id;
	
    #In case he does not own the ingredient
	ELSE
    
		#Create the ingredient and add the amount
		INSERT INTO ingredients_inventory (user_id, ingredient_id, ingredient_amount) 
        VALUES (inp_userid, ingrdt_id, purchaseAmount);
        
        #Throw some feedback to the user
		SELECT CONCAT('You now have: ', ingredient_amount) AS 'output'
        FROM ingredients_inventory
        WHERE user_id = inp_userid AND ingredient_id = ingrdt_id;		
        
    END IF;
	
ELSE

	#In case the user doesnt have eneough money
	SELECT 'Not eneough money!' AS 'output';

END IF;

END$$




#Buy decoration(s)
CREATE PROCEDURE BuyDecoration(IN inp_userid INT, IN inp_price INT, IN dec_id VARCHAR(8), IN purchaseAmount INT)
BEGIN

SET @CheckIfEnoughMoney = (

SELECT COUNT(1)
FROM restaurant
WHERE user_id = inp_userid AND inp_price <= res_money
    
);

#Check if the user has enough money
IF @CheckIfEnoughMoney > 0 THEN
	
	SET @CheckIfHasDecoration = (
    
    SELECT COUNT(1) 
    FROM dec_in_inventory 
    WHERE user_id = inp_userid AND item_id = dec_id
    
    );
	
    #Decrease the money
    UPDATE restaurant SET res_money = res_money - inp_price WHERE user_id = inp_userid;
    
    #Check if he has the ingredient
    IF @CheckIfHasDecoration > 0 THEN
		
        #Increase the amount
        UPDATE dec_in_inventory SET item_amount = item_amount + purchaseAmount 
        WHERE user_id = inp_userid AND item_id = dec_id;
        
        #Throw some feedback to the user
		SELECT CONCAT('You now have: ', item_amount) AS 'output'
        FROM dec_in_inventory
        WHERE user_id = inp_userid AND item_id = dec_id;
	
    #In case he does not own the decoration
	ELSE
    
		#Create the ingredient and add the amount
		INSERT INTO dec_in_inventory (user_id, item_id, item_amount) 
        VALUES (inp_userid, dec_id, purchaseAmount);
        
        #Throw some feedback to the user
		SELECT CONCAT('You now have: ', item_amount) AS 'output'
        FROM dec_in_inventory
        WHERE user_id = inp_userid AND item_id = dec_id;		
        
    END IF;
	
ELSE

	#In case the user doesnt have eneough money
	SELECT 'Not eneough money!' AS 'output';

END IF;

END$$

#Give money to the player
CREATE PROCEDURE GiveMoneyPlayer(IN inp_money INT, IN inp_id INT)
BEGIN

UPDATE restaurant SET res_money = res_money + inp_money
WHERE user_id = inp_id;

SELECT CONCAT('Current money: ',res_money) AS 'output'
FROM restaurant
WHERE user_id = inp_id;

END$$

#Clean the player iventory
CREATE PROCEDURE CleanInventory(IN inp_userid INT)
BEGIN

DELETE FROM dec_in_restaurant
WHERE user_id = inp_userid;

DELETE FROM dec_in_inventory
WHERE user_id = inp_userid;

SELECT CONCAT('The inventory is now empty! ID:', inp_userid) as 'output';

END$$

#Add item into the restaurant
CREATE PROCEDURE PlaceInRestaurantItem(IN inp_itemid VARCHAR(8), IN inp_id INT, IN inp_itemx INT, IN inp_itemy INT)
BEGIN

INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES(inp_itemid, inp_id, inp_itemx, inp_itemy);

END$$

#Add item into inventory
CREATE PROCEDURE AddItemInventory(IN inp_itemid VARCHAR(8), IN inp_userid INT, IN inp_itemamount INT)
BEGIN

INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES(inp_itemid, inp_userid, inp_itemamount);

END$$ 

#Create a new dish
CREATE PROCEDURE AddAnewDish(IN inp_dishid VARCHAR(8), IN inp_userid INT)
BEGIN

SET @CheckIfDishExists = (
SELECT COUNT(1) 
FROM dishes_inventory
WHERE dish_id = inp_dishid AND user_id = inp_userid
);


IF @CheckIfDishExists > 0 THEN
#In case the dish already exists within the player inventory then add it

UPDATE dishes_inventory
SET dishes_amount = dishes_amount + 1
WHERE user_id = inp_userid AND dish_id = inp_dishid;

SELECT 'Succssefully added a new dish!' AS 'output';

ELSE
#In case the dish does not exist in the player inventory

INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(inp_userid, 1, inp_dishid);

SELECT 'Succssefully added a new dish!' AS 'output';

END IF;

END$$

CREATE PROCEDURE RemoveIngredient(IN inp_userid INT, IN inp_ingredientID VARCHAR(8))
BEGIN

UPDATE ingredients_inventory 
SET ingredient_amount = ingredient_amount - 1
WHERE user_id = inp_userid AND ingredient_id = inp_ingredientID;


SELECT 'Succssefully removed the ingredients!' AS 'output';

END$$

DELIMITER ;


