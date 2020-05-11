USE momotaro;

INSERT INTO users(user_password, user_name, user_email)
VALUES('123', 'prooheckcp', 'DummyEmail@gmail.com');

INSERT INTO users(user_password, user_name, user_email)
VALUES('123', 'Arthurlindo', 'DummyEmail@gmail.com');

INSERT INTO users(user_password, user_name, user_email)
VALUES('123', 'fortnite123', 'DummyEmail@gmail.com');

INSERT INTO users(user_password, user_name, user_email)
VALUES('123', 'mainkennen', 'DummyEmail@gmail.com');

INSERT INTO users(user_password, user_name, user_email)
VALUES('123', 'roblox', 'DummyEmail@gmail.com');

INSERT INTO users(user_password, user_name, user_email)
VALUES('123', 'neosaurs', 'DummyEmail@gmail.com');


INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES(1, 'vila franca de xira', 20000, 20, 50);

INSERT INTO restaurant(user_id, res_name)
VALUES(2, 'flockoloco');

INSERT INTO restaurant(user_id, res_name)
VALUES(3, 'epic');

INSERT INTO restaurant(user_id, res_name)
VALUES(4, 'maelstorm');

INSERT INTO restaurant(user_id, res_name)
VALUES(5, 'bloxycola');

INSERT INTO restaurant(user_id, res_name)
VALUES(6, 't-rex squad');


#Add data onto prooheckcp
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount) 
VALUES(1, 'ch', 1);

INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount) 
VALUES(1, 'pa', 1);

INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount) 
VALUES(1, 'wa', 3);



