USE momotaro;

#User with the ID: 1
#Unhashed Password: 123randomrr
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$0Q/ARI.ZVuNCOs5JNWRYi.JabTEqMkHtW0DDV1p9RaYykZsYmCYZK', 'printerMLG', 'MLGprinter@hotmail.com');

#Create the restaurant for: printerMLG
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 1, 'berlin', 26045, 63, 169);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(1, 'ol_oi', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(1, 5, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(1, 5, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 1, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 1, 8, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 1, 8, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(1, 134, '2019-09-6');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(1, 134, '2019-08-8');

/*-----------------------------------------------------------------------------*/

#User with the ID: 2
#Unhashed Password: 123linuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$.LBqQRgwCrEJi1HxYXyyxuv1NS8nzgDatbu171.cDt.uos4POxolu', 'MLGprojekt', 'projektMLG@yahoo.com');

#Create the restaurant for: MLGprojekt
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 2, 'faro', 12723, 32, 354);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(2, 'co', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(2, 6, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(2, 7, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 2, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 2, 7, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 2, 7, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(2, 161, '2019-00-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(2, 161, '2019-03-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 3
#Unhashed Password: lampPassword
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$CgSkRDKAGDLvpnHiCchsaubVXwHU8kdPG./p88dCnnDuVBieXAgpi', 'denierbears', 'bearsdenier@outlook.com');

#Create the restaurant for: denierbears
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 3, 'new york', 10778, 6, 43);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(3, 'wa', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(3, 2, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(3, 5, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 3, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 3, 8, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 3, 8, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(3, 184, '2019-08-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(3, 184, '2019-07-15');

/*-----------------------------------------------------------------------------*/

#User with the ID: 4
#Unhashed Password: mycatburst
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$hqrzp9TE8R1iweakugjNAusQX/4jgyfjevq1nq35VxJSGgodtOoae', 'epicnoodles', 'noodlesepic@gmail.com');

#Create the restaurant for: epicnoodles
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 4, 'porto', 13656, 23, 353);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(4, 'ri', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(4, 1, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(4, 6, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 4, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 4, 7, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 4, 7, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(4, 94, '2019-01-12');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(4, 94, '2019-04-3');

/*-----------------------------------------------------------------------------*/

#User with the ID: 5
#Unhashed Password: bearubuntu
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$HaDr8p5yD0kH3uRHdmwCfuZ.4nlPeaIUN2iUGuX/wL2C4Vu90f1zO', 'trashcar', 'cartrash@yandex.com');

#Create the restaurant for: trashcar
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 5, 'lisboa', 17227, 91, 577);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(5, 'ch', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(5, 1, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(5, 4, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 5, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 5, 7, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 5, 7, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(5, 192, '2019-09-13');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(5, 192, '2019-09-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 6
#Unhashed Password: linuxuserbirds
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$0Eqpgf3IMEymzTyaX0Ptwu/Ln8krLkk8UeqwbPOdvKV6f8CwxctGS', 'xxxreward', 'rewardxxx@outlook.com');

#Create the restaurant for: xxxreward
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 6, 'new york', 20189, 80, 91);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(6, 'ch', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(6, 4, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(6, 10, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 6, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 6, 1, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 6, 1, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(6, 142, '2019-03-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(6, 142, '2019-07-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 7
#Unhashed Password: burst123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$.9WB/19.BPbSsfpLAdU/COQ90LgOE3ath2.rXQ9TFtdV1R9gPwdjW', 'simpledenier', 'deniersimple@yahoo.com');

#Create the restaurant for: simpledenier
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 7, 'new york', 27972, 11, 130);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(7, 'co', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(7, 2, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(7, 10, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 7, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 7, 4, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 7, 4, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(7, 161, '2019-04-4');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(7, 161, '2019-03-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 8
#Unhashed Password: adminbear
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$kcNUcurzBgbOvfMNHK18S.mxX02lGbVCVwShFPAoppdEBGPXM/nx6', 'knifeprooheckcp', 'prooheckcpknife@hotmail.com');

#Create the restaurant for: knifeprooheckcp
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 8, 'amoreira', 12069, 17, 83);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(8, 'pa', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(8, 6, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(8, 4, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 8, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 8, 11, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 8, 11, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(8, 182, '2019-06-16');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(8, 182, '2019-05-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 9
#Unhashed Password: mybirthdaypass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$LWuGZcH4RprWjLLig8Mxhek/YiQUwKtB64jN6VbHFA25ENQufzUS.', 'bearsfork', 'forkbears@zoho.com');

#Create the restaurant for: bearsfork
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 9, 'arcos', 6114, 76, 478);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(9, 'pa', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(9, 10, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(9, 7, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 9, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 9, 4, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 9, 4, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(9, 143, '2019-09-12');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(9, 143, '2019-06-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 10
#Unhashed Password: cute1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$fTUbO9eEW0Psvh11aceL3.nBxOKpNGoHei49AX2.G7PerH2/QQv5q', 'vodkatrain', 'trainvodka@aol.com');

#Create the restaurant for: vodkatrain
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 10, 'lisboa', 21333, 50, 694);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(10, 'wa', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(10, 8, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(10, 1, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 10, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 10, 5, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 10, 5, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(10, 66, '2019-09-8');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(10, 66, '2019-08-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 11
#Unhashed Password: linuxuserubuntu
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$41BSrJYQBO3/zBCcB5nF3.x6YWKsNVpkng82xN3/kpeAy4Mgcwx6S', 'noodlesvaccum', 'vaccumnoodles@outlook.com');

#Create the restaurant for: noodlesvaccum
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 11, 'new york', 18109, 38, 386);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(11, 'wa', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(11, 4, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(11, 4, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 11, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 11, 8, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 11, 8, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(11, 80, '2019-07-14');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(11, 80, '2019-05-1');

/*-----------------------------------------------------------------------------*/

#User with the ID: 12
#Unhashed Password: notApasslinuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Vs/uaa.qdSPbWoyrCahhu.jbtmV4FfQTUd0fFnMRB.ryAkCsmHoP.', 'rainprevent', 'preventrain@zoho.com');

#Create the restaurant for: rainprevent
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 12, 'faro', 20971, 83, 238);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(12, 'sh', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(12, 9, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(12, 4, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 12, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 12, 11, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 12, 11, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(12, 182, '2019-08-19');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(12, 182, '2019-06-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 13
#Unhashed Password: shiversilent
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$SjnbbZ0Zfx.f8.yAX.LYCeqaCGkydvdMFepQZmICYirGjBXfvFZWO', 'vaccumprinterswag', 'printervaccum@zoho.com');

#Create the restaurant for: vaccumprinter
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 13, 'new york', 21445, 78, 1538);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(13, 'sh', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(13, 5, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(13, 8, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 13, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 13, 5, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 13, 5, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(13, 71, '2019-00-8');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(13, 71, '2019-06-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 14
#Unhashed Password: roof123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$SGMmo2UWXvzopWLmCAhAoupumCoAC3jf8IqCxXfnSApiwWWY9uLhu', 'KennyStrain', 'trainKennyS@yandex.com');

#Create the restaurant for: KennyStrain
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 14, 'faro', 15328, 43, 559);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(14, 'pa', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(14, 8, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(14, 9, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 14, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 14, 7, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 14, 7, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(14, 185, '2019-02-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(14, 185, '2019-07-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 15
#Unhashed Password: burstlettuce
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$1XP8VDDX1xuVt8NamyuCye/ACS6HvkrRZEYxz7L1rKUMnv3RW3Yna', 'trashKennyS', 'KennyStrash@outlook.com');

#Create the restaurant for: trashKennyS
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 15, 'amoreira', 12242, 45, 289);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(15, 'co', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(15, 3, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(15, 8, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 15, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 15, 2, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 15, 2, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(15, 118, '2019-01-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(15, 118, '2019-07-16');

/*-----------------------------------------------------------------------------*/

#User with the ID: 16
#Unhashed Password: wowrkburst
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$fwoAxlhgBQFuAut7/fTJuuxB6XQusBrTJoGxhVmOlaqFUA0.Moaba', 'noodlesfaker', 'fakernoodles@gmail.com');

#Create the restaurant for: noodlesfaker
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 16, 'arcos', 18620, 43, 383);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(16, 'tu', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(16, 0, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(16, 0, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 16, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 16, 13, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 16, 13, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(16, 80, '2019-07-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(16, 80, '2019-04-13');

/*-----------------------------------------------------------------------------*/

#User with the ID: 17
#Unhashed Password: randomrrwowrk
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$1DPO4gDlWS4aYh/8h0jyUuY7sEjEC5LshQ1AqviGJHgPCszbeeY.6', 'magazineKennyS', 'KennySmagazine@outlook.com');

#Create the restaurant for: magazineKennyS
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 17, 'washington', 4383, 100, 865);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(17, 'co', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(17, 5, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(17, 2, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 17, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 17, 1, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 17, 1, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(17, 15, '2019-01-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(17, 15, '2019-07-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 18
#Unhashed Password: cutexxx
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$adRcwTuP53JAkB6esgp3oezr8dJ/ukNBSBThjCz27V2TjU3V89u9G', 'printersmarthphone', 'smarthphoneprinter@yahoo.com');

#Create the restaurant for: printersmarthphone
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 18, 'arcos', 2143, 81, 1024);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(18, 'fl', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(18, 8, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(18, 3, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 18, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 18, 11, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 18, 11, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(18, 3, '2019-03-16');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(18, 3, '2019-00-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 19
#Unhashed Password: lampwindows
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$o3//LGX.50acoXtDpAVCZ.Pc/p1UMU1YLkULObx6Mt3x7fbXwfQ7O', 'trivagofaker', 'fakertrivago@yahoo.com');

#Create the restaurant for: trivagofaker
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 19, 'washington', 11345, 56, 412);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(19, 'ri', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(19, 5, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(19, 4, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 19, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 19, 10, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 19, 10, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(19, 56, '2019-03-13');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(19, 56, '2019-08-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 20
#Unhashed Password: lettuceroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$un9Ft2T5hx47pCSmLl8IIuSBMXYd/zkoEW.6.hCm1OpauddZjrq46', 'awperroblox', 'robloxawper@yahoo.com');

#Create the restaurant for: awperroblox
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 20, 'porto', 8982, 22, 26);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(20, 'wa', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(20, 3, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(20, 3, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 20, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 20, 5, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 20, 5, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(20, 150, '2019-06-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(20, 150, '2019-02-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 21
#Unhashed Password: lamplinuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$//woZb923DFTt/Eih3FTbuiZA7Ds6cISdewFCdabOttNbntVuO5ma', 'trashhoover', 'hoovertrash@yahoo.com');

#Create the restaurant for: trashhoover
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 21, 'lisboa', 13602, 58, 453);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(21, 'ol_oi', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(21, 3, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(21, 4, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 21, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 21, 0, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 21, 0, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(21, 60, '2019-07-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(21, 60, '2019-01-1');

/*-----------------------------------------------------------------------------*/

#User with the ID: 22
#Unhashed Password: wowrkvacation
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$zKAdMDttGWoQUmZisHfhS.xks99wijv7gibcWvX2es9VFI.Yp/qsW', 'bearsspoon', 'spoonbears@zoho.com');

#Create the restaurant for: bearsspoon
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 22, 'berlin', 18104, 11, 16);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(22, 'pa', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(22, 10, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(22, 3, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 22, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 22, 10, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 22, 10, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(22, 16, '2019-06-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(22, 16, '2019-00-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 23
#Unhashed Password: vacationpass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$7GZmTUVuPaYVb9mEDupL6.gH7CFjDEYAzczqJSFmHwwfkQ.bPE3dS', 'rewardnoodles', 'noodlesreward@yandex.com');

#Create the restaurant for: rewardnoodles
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 23, 'new york', 2179, 45, 170);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(23, 'tu', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(23, 1, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(23, 4, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 23, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 23, 7, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 23, 7, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(23, 87, '2019-01-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(23, 87, '2019-03-17');

/*-----------------------------------------------------------------------------*/

#User with the ID: 24
#Unhashed Password: shiverlamp
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$/aW3BY6qD4jOQRmHxywiY.ptNSnBzzSjAT.a2qFMhAUedLo5LLOCW', 'noodlesvsauce', 'vsaucenoodles@yandex.com');

#Create the restaurant for: noodlesvsauce
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 24, 'porto', 6613, 96, 742);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(24, 'fl', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(24, 9, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(24, 8, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 24, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 24, 2, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 24, 2, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(24, 94, '2019-09-5');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(24, 94, '2019-00-5');

/*-----------------------------------------------------------------------------*/

#User with the ID: 25
#Unhashed Password: shivermiguel
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$gf.iP60x/0G91LNtfVRjsOpqAC0R3TKMJwcoM1eE1rKi1fLBlpIEe', 'MLGxxx', 'xxxMLG@yandex.com');

#Create the restaurant for: MLGxxx
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 25, 'faro', 28174, 89, 1421);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(25, 'co', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(25, 2, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(25, 9, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 25, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 25, 10, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 25, 10, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(25, 132, '2019-00-20');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(25, 132, '2019-06-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 26
#Unhashed Password: Passwordroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$XL3k0e6kUBFovN5CTc8Vheg9umgkMgBn6Hcec/ti1N7OsyKYgnnYi', 'routersimple', 'simplerouter@outlook.com');

#Create the restaurant for: routersimple
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 26, 'amoreira', 15695, 48, 369);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(26, 'wa', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(26, 7, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(26, 1, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 26, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 26, 13, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 26, 13, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(26, 82, '2019-05-12');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(26, 82, '2019-07-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 27
#Unhashed Password: ubuntushiver
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$j0Y1qNDdyjgul9qIxP9Yuea3i1KbISMmG8SSsY5Bh/lm.CYwdW//6', 'keyboardpineapple', 'pineapplekeyboard@zoho.com');

#Create the restaurant for: keyboardpineapple
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 27, 'porto', 11696, 78, 1120);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(27, 'tu', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(27, 5, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(27, 0, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 27, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 27, 4, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 27, 4, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(27, 21, '2019-07-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(27, 21, '2019-05-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 28
#Unhashed Password: shivermycat
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$mrzau.8tI4shnyoreT11MeSldPmtokyX50rXGWVnpXawbm/TipH1.', 'hotelcharger', 'chargerhotel@outlook.com');

#Create the restaurant for: hotelcharger
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 28, 'lisboa', 1053, 1, 8);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(28, 'pa', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(28, 7, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(28, 10, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 28, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 28, 10, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 28, 10, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(28, 89, '2019-00-12');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(28, 89, '2019-05-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 29
#Unhashed Password: plodcute
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$zd/NHnkS2xu1Lj8h.425XuRH1AuqZOIPDd.WuyXWZvWrO93COuWy2', 'spoonhoover', 'hooverspoon@zoho.com');

#Create the restaurant for: spoonhoover
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 29, 'amoreira', 19026, 58, 353);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(29, 'ol_oi', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(29, 0, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(29, 3, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 29, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 29, 2, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 29, 2, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(29, 62, '2019-04-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(29, 62, '2019-00-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 30
#Unhashed Password: 1234xxx
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$n7Mw5nmBVhqIfXN5bEm88OPkG9zGsjH9b4sGCu7ciVxbeADIm42vG', 'spoonnoodles', 'noodlesspoon@yandex.com');

#Create the restaurant for: spoonnoodles
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 30, 'amoreira', 26448, 92, 1807);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(30, 'wa', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(30, 6, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(30, 5, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 30, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 30, 13, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 30, 13, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(30, 102, '2019-04-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(30, 102, '2019-06-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 31
#Unhashed Password: wowrkcute
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$qAyI1xL2DaXNvRtkJmOBM.hlwU0hYTtcChiVvZaiNravrRmklug0O', 'preventmouse', 'mouseprevent@yandex.com');

#Create the restaurant for: preventmouse
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 31, 'amoreira', 21471, 1, 18);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(31, 'ri', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(31, 10, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(31, 1, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 31, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 31, 1, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 31, 1, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(31, 198, '2019-08-20');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(31, 198, '2019-04-15');

/*-----------------------------------------------------------------------------*/

#User with the ID: 32
#Unhashed Password: soggylamp
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$VOSrtdiV1wW9xCAEaOAMF.fTAFIjSsRR0PHirLS335gcOsO4BIKjK', 'rewardsmarthphone', 'smarthphonereward@yahoo.com');

#Create the restaurant for: rewardsmarthphone
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 32, 'porto', 20877, 46, 414);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(32, 'tu', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(32, 2, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(32, 4, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 32, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 32, 1, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 32, 1, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(32, 29, '2019-06-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(32, 29, '2019-02-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 33
#Unhashed Password: vacation1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$srv7L7fnkEkqZdtqE.9gTeIVSJgA7GuiYZAp3SO5tluGEvPp7OEdm', 'preventshell', 'shellprevent@outlook.com');

#Create the restaurant for: preventshell
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 33, 'lisboa', 28144, 54, 920);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(33, 'ol_oi', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(33, 1, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(33, 7, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 33, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 33, 4, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 33, 4, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(33, 8, '2019-03-10');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(33, 8, '2019-01-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 34
#Unhashed Password: vacation1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$ucQM28RF1CTL77wSUvmWA.WPwMLVkFS2BW3Vqj6dZcbZ7bISEEQ7W', 'MLGvaccum', 'vaccumMLG@zoho.com');

#Create the restaurant for: MLGvaccum
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 34, 'arcos', 3454, 44, 660);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(34, 'tu', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(34, 9, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(34, 4, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 34, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 34, 3, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 34, 3, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(34, 149, '2019-05-5');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(34, 149, '2019-02-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 35
#Unhashed Password: mycatubuntu
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$zUkfLhrbYJFWNi0oCbyCieD8ATmCac0otiXJv5meUbhHJVJj9lNbm', 'trainknife', 'knifetrain@yandex.com');

#Create the restaurant for: trainknife
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 35, 'faro', 9125, 5, 84);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(35, 'sh', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(35, 4, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(35, 4, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 35, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 35, 1, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 35, 1, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(35, 154, '2019-08-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(35, 154, '2019-08-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 36
#Unhashed Password: linuxuserxxx
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$t28dLw4wUJpTClk8u9rZfeGeL51ekXLzD.byNmfZ/WsO29MW/u8oq', 'forkprevent', 'preventfork@outlook.com');

#Create the restaurant for: forkprevent
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 36, 'tokyo', 3191, 96, 402);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(36, 'sh', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(36, 3, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(36, 5, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 36, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 36, 12, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 36, 12, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(36, 65, '2019-08-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(36, 65, '2019-02-5');

/*-----------------------------------------------------------------------------*/

#User with the ID: 37
#Unhashed Password: miguelroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$.KIj3F71NapzoGgbMdCVzuKQewOe.Fo7YEmx69dxX7SvvNKaGL.O2', 'vsaucegamer', 'gamervsauce@hotmail.com');

#Create the restaurant for: vsaucegamer
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 37, 'washington', 13364, 15, 194);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(37, 'fl', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(37, 4, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(37, 9, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 37, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 37, 9, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 37, 9, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(37, 29, '2019-08-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(37, 29, '2019-04-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 38
#Unhashed Password: lamp1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$d9LHmgSUN8S0BUvHNf1tEuWImfdTVILORvvmyXeT./kZWJ03iYb5K', 'vaccummagazine', 'magazinevaccum@yandex.com');

#Create the restaurant for: vaccummagazine
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 38, 'tokyo', 9018, 35, 419);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(38, 'wa', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(38, 2, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(38, 0, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 38, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 38, 2, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 38, 2, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(38, 123, '2019-07-20');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(38, 123, '2019-01-6');

/*-----------------------------------------------------------------------------*/

#User with the ID: 39
#Unhashed Password: cuteplod
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$epWX5ZVncPOpcVQaGjqVJesvvvyLgRXMiplgicQuG/Jtn/E/EetX2', 'vaccumMLG', 'MLGvaccum@gmail.com');

#Create the restaurant for: vaccumMLG
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 39, 'arcos', 1665, 73, 264);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(39, 'ch', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(39, 7, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(39, 8, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 39, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 39, 8, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 39, 8, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(39, 47, '2019-05-10');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(39, 47, '2019-04-8');

/*-----------------------------------------------------------------------------*/

#User with the ID: 40
#Unhashed Password: wowrkroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$WaHOoCYVf2Up2bIpnh0YIu2SvpVHSWAjujySDzdOXk38pqrJ4qFBu', 'rewardrain', 'rainreward@zoho.com');

#Create the restaurant for: rewardrain
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 40, 'faro', 24766, 36, 41);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(40, 'sh', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(40, 6, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(40, 10, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 40, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 40, 1, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 40, 1, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(40, 136, '2019-09-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(40, 136, '2019-02-15');

/*-----------------------------------------------------------------------------*/

#User with the ID: 41
#Unhashed Password: silentxxx
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$S8SMFzqzZ/Ozcc9bV8ulS.ViESOdc.tRjUV/sRGK8XIjKOlzHNBjO', 'otakuknife', 'knifeotaku@zoho.com');

#Create the restaurant for: otakuknife
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 41, 'amoreira', 27443, 6, 97);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(41, 'fl', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(41, 8, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(41, 2, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 41, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 41, 13, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 41, 13, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(41, 101, '2019-00-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(41, 101, '2019-09-12');

/*-----------------------------------------------------------------------------*/

#User with the ID: 42
#Unhashed Password: notApassrandomrr
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$I9u66.S3mBRtXlHqYGEBXu3/jRMjEWvzO1oXw6HTkKbeBs.avmnPG', 'robloxbears', 'bearsroblox@aol.com');

#Create the restaurant for: robloxbears
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 42, 'porto', 9378, 2, 18);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(42, 'ol_oi', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(42, 2, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(42, 8, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 42, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 42, 9, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 42, 9, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(42, 163, '2019-06-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(42, 163, '2019-09-1');

/*-----------------------------------------------------------------------------*/

#User with the ID: 43
#Unhashed Password: mycatroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Bq4Nm71CKb8b2t42XRdXjO0GQDOy10XhclJFPCEYjDmZwk4qd3jkq', 'MLGbanana', 'bananaMLG@zoho.com');

#Create the restaurant for: MLGbanana
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 43, 'amoreira', 19403, 78, 39);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(43, 'pa', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(43, 10, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(43, 5, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 43, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 43, 2, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 43, 2, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(43, 52, '2019-00-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(43, 52, '2019-02-5');

/*-----------------------------------------------------------------------------*/

#User with the ID: 44
#Unhashed Password: Passwordadmin
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$WHCl4nJSm.IUaHpHPiNLA.Y3/cVKDTDwWk0cxdhZF9VVefcsYw.YC', 'hotelmouse', 'mousehotel@gmail.com');

#Create the restaurant for: hotelmouse
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 44, 'lisboa', 16197, 44, 555);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(44, 'fl', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(44, 10, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(44, 2, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 44, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 44, 7, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 44, 7, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(44, 102, '2019-06-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(44, 102, '2019-02-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 45
#Unhashed Password: notApasspassword
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$uN7IN1CXUNPILwqXlvhp0OV.dA5dzSNGf6tn8zoNttvhQlOM9T3mK', 'bananareward', 'rewardbanana@yahoo.com');

#Create the restaurant for: bananareward
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 45, 'arcos', 25093, 71, 80);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(45, 'pa', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(45, 8, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(45, 8, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 45, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 45, 5, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 45, 5, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(45, 165, '2019-00-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(45, 165, '2019-01-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 46
#Unhashed Password: miguelplod
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$dQqIP43Ymxc4vWl6OtAM7eJhVC1KjnMLdxUHK1zp/7a45vq5vRBKO', 'vaccumprinter', 'printervaccum@yahoo.com');

#Create the restaurant for: vaccumprinter
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 46, 'washington', 1534, 38, 104);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(46, 'ch', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(46, 2, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(46, 8, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 46, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 46, 8, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 46, 8, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(46, 199, '2019-09-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(46, 199, '2019-09-3');

/*-----------------------------------------------------------------------------*/

#User with the ID: 47
#Unhashed Password: plod1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$lXlypjW20t9gwMFk.v/ILO6YzhXGr0G32qHBW6JB7JBQSnzUV2Vxm', 'shotgunvodka', 'vodkashotgun@yandex.com');

#Create the restaurant for: shotgunvodka
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 47, 'washington', 4449, 65, 264);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(47, 'fl', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(47, 9, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(47, 7, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 47, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 47, 6, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 47, 6, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(47, 92, '2019-07-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(47, 92, '2019-00-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 48
#Unhashed Password: soggy123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$0yGf3uNfxVjAhE4H184YteNDzeSrozBrkfq6X9eINY4lseq/SW9ya', 'weebmouse', 'mouseweeb@yahoo.com');

#Create the restaurant for: weebmouse
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 48, 'arcos', 14451, 48, 274);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(48, 'wa', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(48, 7, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(48, 5, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 48, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 48, 1, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 48, 1, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(48, 24, '2019-09-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(48, 24, '2019-00-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 49
#Unhashed Password: windowsplod
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$qztn/ESCNtfzaHsYrHpvO.TH3vkZmWNgMSlWHC7Uuy1PA.d4zbpGu', 'carboat', 'boatcar@yandex.com');

#Create the restaurant for: carboat
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 49, 'amoreira', 13770, 61, 935);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(49, 'ol_oi', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(49, 4, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(49, 10, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 49, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 49, 7, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 49, 7, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(49, 80, '2019-07-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(49, 80, '2019-04-4');

/*-----------------------------------------------------------------------------*/

#User with the ID: 50
#Unhashed Password: ubuntuwowrk
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$FZI6MTV8tJw920Yv7p/9FudVF6JraYx2hPF9ZotAUMZyes6JthNGO', 'rainmagazine', 'magazinerain@yandex.com');

#Create the restaurant for: rainmagazine
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 50, 'washington', 22917, 98, 65);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(50, 'fl', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(50, 5, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(50, 2, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 50, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 50, 0, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 50, 0, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(50, 30, '2019-05-19');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(50, 30, '2019-02-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 51
#Unhashed Password: Passwordpassword
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$R.xhEmAoKRV0JtguM9g4E.Sdf6y77vrWjQy2aXVzCJpUO/937tOpq', 'noscopetrash', 'trashnoscope@yandex.com');

#Create the restaurant for: noscopetrash
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 51, 'new york', 20485, 22, 426);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(51, 'tu', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(51, 7, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(51, 0, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 51, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 51, 13, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 51, 13, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(51, 88, '2019-05-7');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(51, 88, '2019-04-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 52
#Unhashed Password: passwordsilent
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$6zVw8gv186WFRgUXGg7ISuj7i9Sr7sIeo305W/5Dn54//SiflgI5.', 'otakuboombox', 'boomboxotaku@aol.com');

#Create the restaurant for: otakuboombox
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 52, 'washington', 5184, 58, 941);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(52, 'pa', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(52, 5, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(52, 4, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 52, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 52, 1, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 52, 1, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(52, 161, '2019-07-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(52, 161, '2019-08-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 53
#Unhashed Password: birdsroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$wVD5EKgKwapKmG4gWpe5E.fA/ODFJ3/B45y/g.NJvXV7Op6.TbAp2', 'noscopebanana', 'banananoscope@yahoo.com');

#Create the restaurant for: noscopebanana
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 53, 'tokyo', 17239, 42, 229);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(53, 'ri', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(53, 3, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(53, 9, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 53, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 53, 12, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 53, 12, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(53, 135, '2019-09-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(53, 135, '2019-09-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 54
#Unhashed Password: mycatrandomrr
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Y2Nm38d0j9DFgyw7dZaQfuOObDyNSeANoJr7kXDdoM0mAl8GNv3p.', 'bottlebears', 'bearsbottle@zoho.com');

#Create the restaurant for: bottlebears
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 54, 'berlin', 21664, 26, 299);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(54, 'fl', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(54, 2, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(54, 10, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 54, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 54, 0, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 54, 0, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(54, 19, '2019-08-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(54, 19, '2019-01-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 55
#Unhashed Password: xxxmycat
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$jXeszx/JvrUlnJiHIHhSOOZ5A6MiFJB5u.R6tWcb7DxKiuxJ1B3fi', 'fakerprevent', 'preventfaker@yahoo.com');

#Create the restaurant for: fakerprevent
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 55, 'new york', 28646, 64, 226);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(55, 'wa', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(55, 2, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(55, 5, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 55, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 55, 2, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 55, 2, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(55, 23, '2019-05-5');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(55, 23, '2019-01-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 56
#Unhashed Password: windowscute
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$rN5fKki/yr.KEd6jH1KVKezpxveNv5yOfTfeb4zWIhEtU6ShviLZ.', 'knifecar', 'carknife@hotmail.com');

#Create the restaurant for: knifecar
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 56, 'new york', 27819, 81, 925);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(56, 'pa', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(56, 8, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(56, 6, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 56, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 56, 6, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 56, 6, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(56, 111, '2019-06-8');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(56, 111, '2019-02-3');

/*-----------------------------------------------------------------------------*/

#User with the ID: 57
#Unhashed Password: silentshiver
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$kdhC3VHcbLMfcNC83KsaeuSnNQmwSg1QhPW1Pnr2VrGVQrEpYbjFG', 'lamptrivago', 'trivagolamp@gmail.com');

#Create the restaurant for: lamptrivago
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 57, 'new york', 14135, 71, 1128);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(57, 'ch', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(57, 4, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(57, 2, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 57, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 57, 4, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 57, 4, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(57, 29, '2019-05-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(57, 29, '2019-06-5');

/*-----------------------------------------------------------------------------*/

#User with the ID: 58
#Unhashed Password: plodvacation
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$aAeJs.clkFD79r/lZgPy/eu/qoo2NqOK1I7ILuhjhBfbp9G60hyae', 'bananaprinter', 'printerbanana@yandex.com');

#Create the restaurant for: bananaprinter
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 58, 'arcos', 7922, 15, 70);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(58, 'pa', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(58, 3, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(58, 3, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 58, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 58, 11, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 58, 11, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(58, 199, '2019-04-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(58, 199, '2019-06-4');

/*-----------------------------------------------------------------------------*/

#User with the ID: 59
#Unhashed Password: miguelmybirthday
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$RaCyCIO40OH66NSyF5ioOuWWcAGpjG4/SaMWyuy9Cq9r5R6ufoHCa', 'trashboombox', 'boomboxtrash@aol.com');

#Create the restaurant for: trashboombox
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 59, 'porto', 20485, 100, 605);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(59, 'tu', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(59, 1, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(59, 0, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 59, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 59, 8, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 59, 8, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(59, 172, '2019-06-19');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(59, 172, '2019-05-12');

/*-----------------------------------------------------------------------------*/

#User with the ID: 60
#Unhashed Password: vacationplod
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$NdGKBKTujeTL4bRfX75hHefmfQeMN1cxXPfmgEqNHdOD4EVG6v/8q', 'lampkeyboard', 'keyboardlamp@yandex.com');

#Create the restaurant for: lampkeyboard
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 60, 'amoreira', 23370, 87, 912);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(60, 'ch', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(60, 5, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(60, 2, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 60, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 60, 3, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 60, 3, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(60, 93, '2019-05-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(60, 93, '2019-06-4');

/*-----------------------------------------------------------------------------*/

#User with the ID: 61
#Unhashed Password: ubuntuPassword
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$A42pFauwSB.IP0yiRcg16O4jgbnIz8SBVlNXhzqsk3t25HF75VW0i', 'MLGshotgun', 'shotgunMLG@yandex.com');

#Create the restaurant for: MLGshotgun
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 61, 'berlin', 19728, 42, 309);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(61, 'ol_oi', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(61, 3, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(61, 7, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 61, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 61, 9, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 61, 9, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(61, 143, '2019-01-13');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(61, 143, '2019-08-17');

/*-----------------------------------------------------------------------------*/

#User with the ID: 62
#Unhashed Password: notApassbear
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$SUhODnuuJqYNk2xgnnifaO7qjQqiUfg1qzFuNDJMeIQkzp7KIFqh6', 'printervsauce', 'vsauceprinter@aol.com');

#Create the restaurant for: printervsauce
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 62, 'new york', 14235, 42, 29);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(62, 'sh', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(62, 10, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(62, 0, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 62, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 62, 9, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 62, 9, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(62, 114, '2019-02-8');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(62, 114, '2019-06-1');

/*-----------------------------------------------------------------------------*/

#User with the ID: 63
#Unhashed Password: miguelrandomrr
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$UY2vRXAE6RCfFE7bjRYpCe9JWM.cDXif4cxz5MSNUdOCQb6srJyX2', 'chargertrain', 'traincharger@yandex.com');

#Create the restaurant for: chargertrain
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 63, 'lisboa', 17312, 32, 440);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(63, 'wa', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(63, 0, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(63, 5, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 63, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 63, 1, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 63, 1, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(63, 18, '2019-00-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(63, 18, '2019-09-1');

/*-----------------------------------------------------------------------------*/

#User with the ID: 64
#Unhashed Password: linuxuserbirds
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$xn.m1gMqTaBW4MS.K/AA5.FhlOiki2poCm4QlpbAI1/TYnMDQFA2i', 'hotelroblox', 'robloxhotel@yandex.com');

#Create the restaurant for: hotelroblox
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 64, 'amoreira', 22785, 60, 828);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(64, 'co', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(64, 0, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(64, 7, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 64, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 64, 3, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 64, 3, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(64, 125, '2019-09-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(64, 125, '2019-07-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 65
#Unhashed Password: xxxroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$zlEmJweANgV6HRLVp87fjOIwdBk7Of2TAbBVFxHPk/u13Vhwya60O', 'printerknife', 'knifeprinter@hotmail.com');

#Create the restaurant for: printerknife
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 65, 'new york', 3208, 18, 281);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(65, 'ol_oi', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(65, 3, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(65, 2, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 65, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 65, 11, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 65, 11, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(65, 142, '2019-06-19');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(65, 142, '2019-07-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 66
#Unhashed Password: silentharm
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$X6iuC84gSMxPOmGro8vuAuV2IomzzVS.oN62SgJ3gWfavTsny1ZY6', 'noodlesprooheckcp', 'prooheckcpnoodles@yandex.com');

#Create the restaurant for: noodlesprooheckcp
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 66, 'tokyo', 5781, 57, 713);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(66, 'wa', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(66, 3, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(66, 4, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 66, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 66, 3, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 66, 3, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(66, 45, '2019-05-6');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(66, 45, '2019-09-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 67
#Unhashed Password: mybirthdayshiver
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$xka.2orVurDEBfdjoUpj/egVnar3WmCTYqQOz1cGJ4EZ1LtEDXzw6', 'forkspoon', 'spoonfork@aol.com');

#Create the restaurant for: forkspoon
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 67, 'new york', 14997, 82, 312);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(67, 'co', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(67, 2, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(67, 6, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 67, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 67, 1, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 67, 1, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(67, 132, '2019-02-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(67, 132, '2019-04-13');

/*-----------------------------------------------------------------------------*/

#User with the ID: 68
#Unhashed Password: shivervacation
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$DuezWeLxuSgKcyCoMgZ8qe2OEUm1bVFv1du9sNX8youFdJF6sf/Ai', 'mousegamer', 'gamermouse@outlook.com');

#Create the restaurant for: mousegamer
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 68, 'amoreira', 19719, 83, 0);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(68, 'tu', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(68, 5, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(68, 1, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 68, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 68, 9, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 68, 9, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(68, 78, '2019-03-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(68, 78, '2019-02-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 69
#Unhashed Password: mybirthdayroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$bH1lkQbQqAx3yB8nuvp4xOSjEyIXo2kOlwvJw/15u6ngKfOoUkDt2', 'newspaperprojekt', 'projektnewspaper@outlook.com');

#Create the restaurant for: newspaperprojekt
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 69, 'porto', 3209, 36, 113);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(69, 'ol_oi', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(69, 9, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(69, 9, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 69, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 69, 7, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 69, 7, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(69, 151, '2019-08-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(69, 151, '2019-06-20');

/*-----------------------------------------------------------------------------*/

#User with the ID: 70
#Unhashed Password: birdssoggy
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$vVcYaAKxtorJRsyRsBOUIe3Tcsdu5H6PvPxnZOeAEKrc8/sYHd.LO', 'preventmichael', 'michaelprevent@hotmail.com');

#Create the restaurant for: preventmichael
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 70, 'lisboa', 1085, 98, 308);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(70, 'wa', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(70, 6, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(70, 5, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 70, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 70, 11, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 70, 11, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(70, 130, '2019-00-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(70, 130, '2019-07-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 71
#Unhashed Password: plodvacation
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$WyaftQ8lQ17ms4sDe5HoaudG2wPLcODABB8oPouXYAi0GQDudceTG', 'smarthphonespoon', 'spoonsmarthphone@hotmail.com');

#Create the restaurant for: smarthphonespoon
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 71, 'arcos', 20823, 10, 162);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(71, 'tu', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(71, 8, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(71, 2, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 71, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 71, 3, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 71, 3, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(71, 125, '2019-08-5');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(71, 125, '2019-03-2');

/*-----------------------------------------------------------------------------*/

#User with the ID: 72
#Unhashed Password: silentsoggy
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$VM1lmRqhDHWet93EsRrR9Oolsni6pco4f.EMVz.ik50O2ixT94Y9W', 'spoonprojekt', 'projektspoon@hotmail.com');

#Create the restaurant for: spoonprojekt
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 72, 'porto', 25488, 52, 686);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(72, 'ol_oi', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(72, 6, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(72, 6, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 72, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 72, 7, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 72, 7, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(72, 38, '2019-09-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(72, 38, '2019-03-3');

/*-----------------------------------------------------------------------------*/

#User with the ID: 73
#Unhashed Password: 1234vacation
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$8Dg/Lw6qroDYfvo2iZO9uOPVnbgyMK7E6Px9xrlOdGbXMC9bQCOL.', 'hoovertrivago', 'trivagohoover@outlook.com');

#Create the restaurant for: hoovertrivago
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 73, 'tokyo', 10584, 2, 21);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(73, 'ol_oi', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(73, 10, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(73, 10, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 73, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 73, 1, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 73, 1, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(73, 33, '2019-04-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(73, 33, '2019-00-4');

/*-----------------------------------------------------------------------------*/

#User with the ID: 74
#Unhashed Password: silentmycat
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$vtBygffu4m95IuMixcsFL.iLIdxKy4PgnrOIqBQ.PqhhLJ4InTjmu', 'rainpreventionSwagger', 'preventrain@gmail.com');

#Create the restaurant for: rainprevent
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 74, 'washington', 10063, 97, 1251);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(74, 'sh', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(74, 2, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(74, 9, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 74, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 74, 8, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 74, 8, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(74, 141, '2019-08-16');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(74, 141, '2019-05-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 75
#Unhashed Password: passpassword
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$8H5gCEu20cJuckIf/kIBZ.fWGr4MeherlhLmqGFzQ97B1P1VtqniW', 'gamerdenier', 'deniergamer@zoho.com');

#Create the restaurant for: gamerdenier
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 75, 'berlin', 14251, 28, 435);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(75, 'co', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(75, 7, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(75, 7, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 75, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 75, 0, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 75, 0, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(75, 99, '2019-02-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(75, 99, '2019-08-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 76
#Unhashed Password: adminplod
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$AYjVTZhnlMSdaGUcsbPM..AIQBvG/..YXEWfmF9TDXwfex/qK5Ase', 'mousexxx', 'xxxmouse@outlook.com');

#Create the restaurant for: mousexxx
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 76, 'lisboa', 25961, 0, 0);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(76, 'ch', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(76, 4, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(76, 2, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 76, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 76, 10, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 76, 10, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(76, 117, '2019-06-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(76, 117, '2019-08-17');

/*-----------------------------------------------------------------------------*/

#User with the ID: 77
#Unhashed Password: randomrrcute
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$ZRWazNRwNrCZNeQHNUeh1.KbuLmeTPPhpon50y0eRqTzFrfulwHcy', 'boatfork', 'forkboat@gmail.com');

#Create the restaurant for: boatfork
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 77, 'porto', 13458, 52, 588);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(77, 'ch', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(77, 2, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(77, 9, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 77, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 77, 1, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 77, 1, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(77, 24, '2019-09-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(77, 24, '2019-02-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 78
#Unhashed Password: 1234linuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$d5pikC5g8621fGFxovogEOKqLTZxrcT9DU4Bj8Y..Z6BrWUFGa2iu', 'shellbears', 'bearsshell@gmail.com');

#Create the restaurant for: shellbears
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 78, 'amoreira', 17810, 15, 18);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(78, 'wa', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(78, 8, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(78, 1, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 78, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 78, 12, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 78, 12, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(78, 69, '2019-02-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(78, 69, '2019-08-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 79
#Unhashed Password: soggycute
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$o0XXxRb5.gaj4Kpw0xuXeOi4XYVWObelKB3MzQYeGwfVEw72ShNny', 'prooheckcpbears', 'bearsprooheckcp@hotmail.com');

#Create the restaurant for: prooheckcpbears
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 79, 'arcos', 23039, 99, 1272);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(79, 'ol_oi', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(79, 10, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(79, 8, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 79, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 79, 11, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 79, 11, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(79, 171, '2019-01-4');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(79, 171, '2019-09-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 80
#Unhashed Password: harmwowrk
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$5i37lyQ8QSzG9A0myhX2hOiA6kTE5CsHZliT4O.RLRSwNqH993P.a', 'hotelreward', 'rewardhotel@aol.com');

#Create the restaurant for: hotelreward
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 80, 'faro', 16620, 88, 1554);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(80, 'sh', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(80, 8, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(80, 8, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 80, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 80, 0, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 80, 0, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(80, 76, '2019-05-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(80, 76, '2019-04-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 81
#Unhashed Password: 123admin
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$1EXV3f1Rl9ZjLuzxypZo/eVuE3I0fG3AElqozLoeT861ni1xLrc2q', 'vaccumMLGPlayer', 'MLGvaccum@yahoo.com');

#Create the restaurant for: vaccumMLG
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 81, 'lisboa', 1809, 43, 553);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(81, 'ri', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(81, 1, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(81, 4, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 81, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 81, 11, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 81, 11, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(81, 34, '2019-00-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(81, 34, '2019-01-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 82
#Unhashed Password: shiverwindows
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$PqO8r5yQ1kgbdOfHnV2Iju4zC6ltUMNEs4pk8OuPW2aOjxv.4AdaC', 'bananacharger', 'chargerbanana@yahoo.com');

#Create the restaurant for: bananacharger
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 82, 'arcos', 15993, 19, 169);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(82, 'pa', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(82, 0, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(82, 4, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 82, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 82, 13, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 82, 13, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(82, 164, '2019-08-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(82, 164, '2019-08-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 83
#Unhashed Password: lettuceharm
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$t8lvLFytMLfrkQao0vkMMOzbxXIxQqWwmnby50r3wtgBtMK5eTn2G', 'chargertrash', 'trashcharger@gmail.com');

#Create the restaurant for: chargertrash
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 83, 'tokyo', 5584, 25, 195);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(83, 'tu', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(83, 8, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(83, 1, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 83, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 83, 3, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 83, 3, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(83, 41, '2019-08-19');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(83, 41, '2019-08-2');

/*-----------------------------------------------------------------------------*/

#User with the ID: 84
#Unhashed Password: shiverpass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$/2d9aRBDoSujjPzr3cv9NuTOG/Wm7XPRZ.hb2RHiGc5muxewYZ8UW', 'epicweeb', 'weebepic@yahoo.com');

#Create the restaurant for: epicweeb
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 84, 'new york', 12202, 86, 426);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(84, 'wa', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(84, 6, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(84, 6, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 84, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 84, 11, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 84, 11, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(84, 151, '2019-04-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(84, 151, '2019-08-1');

/*-----------------------------------------------------------------------------*/

#User with the ID: 85
#Unhashed Password: 1234randomrr
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$2kyYK60t3z50bv6si3iIwuE0jPeA4ZITM07wxWzoLqruhoNhFvUxu', 'blyetnoscope', 'noscopeblyet@aol.com');

#Create the restaurant for: blyetnoscope
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 85, 'lisboa', 24303, 70, 247);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(85, 'co', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(85, 4, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(85, 6, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 85, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 85, 4, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 85, 4, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(85, 132, '2019-05-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(85, 132, '2019-09-13');

/*-----------------------------------------------------------------------------*/

#User with the ID: 86
#Unhashed Password: burstpass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$QuA./izLRXhAYSthx30Lw.V6rOpEN7TVEurMCkKQrn98guchF5YWu', 'otakuprinter', 'printerotaku@aol.com');

#Create the restaurant for: otakuprinter
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 86, 'amoreira', 5552, 51, 610);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(86, 'fl', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(86, 6, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(86, 9, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 86, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 86, 13, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 86, 13, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(86, 161, '2019-00-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(86, 161, '2019-00-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 87
#Unhashed Password: passroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$iylVkMnjto/O0Z/9szPn0OXPkbEW7/7CFUEcP7oorRNU01tb18Yhu', 'vodkaotaku', 'otakuvodka@hotmail.com');

#Create the restaurant for: vodkaotaku
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 87, 'arcos', 3988, 55, 788);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(87, 'co', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(87, 5, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(87, 10, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 87, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 87, 13, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 87, 13, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(87, 90, '2019-09-5');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(87, 90, '2019-04-15');

/*-----------------------------------------------------------------------------*/

#User with the ID: 88
#Unhashed Password: roofwindows
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$ioRPRCLzgrwY/wVAiZzx8egJy9BPmDO2mImWWPpCoa9qN/6ALjaa2', 'simpleshell', 'shellsimple@hotmail.com');

#Create the restaurant for: simpleshell
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 88, 'washington', 16408, 19, 62);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(88, 'ch', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(88, 7, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(88, 2, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 88, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 88, 6, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 88, 6, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(88, 86, '2019-00-19');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(88, 86, '2019-03-6');

/*-----------------------------------------------------------------------------*/

#User with the ID: 89
#Unhashed Password: lettucewindows
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$sPQ6Z0go93X433wwx7MiSuCLP4IRsTmKNzy5xzRjfsGDXDa/bjg7W', 'noscopeprevent', 'preventnoscope@yahoo.com');

#Create the restaurant for: noscopeprevent
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 89, 'amoreira', 22762, 89, 536);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(89, 'pa', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(89, 3, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(89, 2, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 89, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 89, 3, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 89, 3, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(89, 170, '2019-09-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(89, 170, '2019-00-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 90
#Unhashed Password: vacationubuntu
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$6OwcN9AjU6h5zM3gV/kBveYDJlOC0309WGm0sIiusqjxTy/4qjz9u', 'awpershotgun', 'shotgunawper@gmail.com');

#Create the restaurant for: awpershotgun
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 90, 'porto', 4422, 93, 1415);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(90, 'wa', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(90, 1, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(90, 0, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 90, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 90, 11, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 90, 11, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(90, 140, '2019-08-13');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(90, 140, '2019-00-8');

/*-----------------------------------------------------------------------------*/

#User with the ID: 91
#Unhashed Password: birdsPassword
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$1uZCinRm8z44GnBRZFJ7QekClhkeReOxj7ocrpE24.Qbc2zngn.Ci', 'rewardnewspaper', 'newspaperreward@yandex.com');

#Create the restaurant for: rewardnewspaper
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 91, 'new york', 22312, 25, 343);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(91, 'fl', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(91, 6, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(91, 10, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 91, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 91, 13, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 91, 13, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(91, 181, '2019-03-16');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(91, 181, '2019-08-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 92
#Unhashed Password: plod1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$eXbBvclHb9HswKru/jcG5eT6nL/50uJTT591zvMNyi9DNw0pAcXwC', 'noodlescharger', 'chargernoodles@yandex.com');

#Create the restaurant for: noodlescharger
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 92, 'berlin', 27850, 30, 299);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(92, 'tu', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(92, 3, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(92, 2, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 92, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 92, 3, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 92, 3, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(92, 185, '2019-03-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(92, 185, '2019-01-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 93
#Unhashed Password: birdsmiguel
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Z1FVVloAtwGRdTQ8KMuIYudlKEkvV5KOIPmmW8DS2wC/5H/M.NpbS', 'preventvsauce', 'vsauceprevent@aol.com');

#Create the restaurant for: preventvsauce
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 93, 'lisboa', 1763, 56, 749);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(93, 'ol_oi', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(93, 2, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(93, 4, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 93, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 93, 2, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 93, 2, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(93, 198, '2019-06-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(93, 198, '2019-04-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 94
#Unhashed Password: cute123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$g6sNjz9FvZUBLQLEmzwfxOl21dRTgXth2vLo/O7L5ZYbIo8XRUqv.', 'chargertrivago', 'trivagocharger@hotmail.com');

#Create the restaurant for: chargertrivago
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 94, 'tokyo', 20539, 80, 625);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(94, 'ch', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(94, 9, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(94, 6, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 94, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 94, 1, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 94, 1, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(94, 75, '2019-00-14');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(94, 75, '2019-06-17');

/*-----------------------------------------------------------------------------*/

#User with the ID: 95
#Unhashed Password: shivermycat
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$kVz16klsz37YDsiPjw6qsu8klIHO9dcfs07rTekGCAa78CkRtn0v.', 'chargersimple', 'simplecharger@hotmail.com');

#Create the restaurant for: chargersimple
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 95, 'amoreira', 2207, 81, 542);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(95, 'ri', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(95, 4, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(95, 5, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 95, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 95, 8, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 95, 8, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(95, 160, '2019-08-5');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(95, 160, '2019-00-1');

/*-----------------------------------------------------------------------------*/

#User with the ID: 96
#Unhashed Password: burstlamp
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Sg6XIr.KwRcLY.r8RccLNu5Jx76eNs8Lv0WkAQkC3XtILCzXNwMlO', 'lampepic', 'epiclamp@yahoo.com');

#Create the restaurant for: lampepic
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 96, 'beja', 8845, 2, 0);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(96, 'tu', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(96, 5, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(96, 7, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 96, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 96, 5, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 96, 5, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(96, 92, '2019-04-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(96, 92, '2019-09-1');

/*-----------------------------------------------------------------------------*/

#User with the ID: 97
#Unhashed Password: silentlinuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$LNOVJhb9xbwchkGh11aLEuaHqtdMeFORfK65aJWPOzAsdAu5TjE3G', 'epicmagazine', 'magazineepic@yandex.com');

#Create the restaurant for: epicmagazine
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 97, 'tokyo', 5414, 46, 897);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(97, 'fl', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(97, 4, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(97, 0, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 97, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 97, 8, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 97, 8, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(97, 196, '2019-07-20');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(97, 196, '2019-08-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 98
#Unhashed Password: ubuntuadmin
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$RRrfg.QiwZxWwzpx0O/jduWCU9t888t8YROGB8bbOTYwCWYieiuQW', 'prooheckcpdenier', 'denierprooheckcp@yandex.com');

#Create the restaurant for: prooheckcpdenier
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 98, 'beja', 11327, 22, 293);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(98, 'pa', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(98, 7, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(98, 5, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 98, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 98, 1, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 98, 1, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(98, 196, '2019-03-13');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(98, 196, '2019-03-20');

/*-----------------------------------------------------------------------------*/

#User with the ID: 99
#Unhashed Password: plodpassword
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Dh6xLe9V5jHeoek5ZZhUvOyT7kxFCIA075aVIBznFv7CfHR8SIlVu', 'michaeldenier', 'deniermichael@aol.com');

#Create the restaurant for: michaeldenier
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 99, 'amoreira', 17718, 27, 531);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(99, 'wa', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(99, 9, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(99, 8, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 99, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 99, 0, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 99, 0, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(99, 18, '2019-08-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(99, 18, '2019-03-12');

/*-----------------------------------------------------------------------------*/

#User with the ID: 100
#Unhashed Password: mycatroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$3crlpFbtUijDNHfk9HxRd.U4owBwyUsT65Of/wgGFGxjWyGSWakEK', 'smarthphonebottle', 'bottlesmarthphone@aol.com');

#Create the restaurant for: smarthphonebottle
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 100, 'tokyo', 6509, 39, 325);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(100, 'co', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(100, 0, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(100, 8, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 100, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 100, 3, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 100, 3, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(100, 71, '2019-01-6');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(100, 71, '2019-06-8');

/*-----------------------------------------------------------------------------*/

#User with the ID: 101
#Unhashed Password: roofmiguel
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$8kI2JoybNQLafZo35JPU7uOlNY9.ex/CW1WApggtb7GxCHTyQ.qO6', 'microphoneKennyS', 'KennySmicrophone@hotmail.com');

#Create the restaurant for: microphoneKennyS
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 101, 'tokyo', 10973, 79, 1357);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(101, 'ch', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(101, 10, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(101, 4, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 101, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 101, 10, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 101, 10, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(101, 123, '2019-01-7');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(101, 123, '2019-05-4');

/*-----------------------------------------------------------------------------*/

#User with the ID: 102
#Unhashed Password: windowsxxx
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$z.oj8Xyi32kmpoHhtx6yHeaJr/eLmsGaKmhL3v6Wq/RDDTqzbqp0m', 'smarthphoneknife', 'knifesmarthphone@yandex.com');

#Create the restaurant for: smarthphoneknife
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 102, 'new york', 13419, 62, 56);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(102, 'ol_oi', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(102, 1, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(102, 8, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 102, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 102, 0, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 102, 0, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(102, 22, '2019-05-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(102, 22, '2019-06-17');

/*-----------------------------------------------------------------------------*/

#User with the ID: 103
#Unhashed Password: lampsoggy
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$qjiGqfB1H1FhXkQyVdYOD.oFnDZywrv1UImKLlXJY8NZ6Wa73gkCG', 'bottleotaku', 'otakubottle@gmail.com');

#Create the restaurant for: bottleotaku
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 103, 'beja', 13506, 59, 128);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(103, 'tu', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(103, 5, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(103, 3, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 103, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 103, 5, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 103, 5, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(103, 73, '2019-07-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(103, 73, '2019-09-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 104
#Unhashed Password: harmsoggy
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$MCPJTNd9ONij2MlYTNP3XOl2jgJ0RugVfyZvAjY5plgV.UgqCD6O6', 'epicspoon', 'spoonepic@aol.com');

#Create the restaurant for: epicspoon
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 104, 'faro', 12543, 61, 970);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(104, 'sh', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(104, 7, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(104, 1, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 104, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 104, 3, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 104, 3, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(104, 154, '2019-09-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(104, 154, '2019-08-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 105
#Unhashed Password: vacationroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$/fsFSre6g6RJbwyjkrC4Ru5IWT..ICyVdRqsQFXeBLtAE7JHZYo1C', 'newspapershotgun', 'shotgunnewspaper@zoho.com');

#Create the restaurant for: newspapershotgun
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 105, 'lisboa', 2348, 41, 448);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(105, 'tu', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(105, 6, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(105, 7, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 105, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 105, 3, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 105, 3, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(105, 4, '2019-05-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(105, 4, '2019-03-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 106
#Unhashed Password: silentharm
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$hys2RLQP3bQVDLN4zXQGcefJwrDBl4.qk97PKTKlrNnLenAQDwzxy', 'routerspoon', 'spoonrouter@hotmail.com');

#Create the restaurant for: routerspoon
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 106, 'porto', 17179, 48, 108);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(106, 'ch', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(106, 9, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(106, 9, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 106, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 106, 13, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 106, 13, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(106, 139, '2019-06-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(106, 139, '2019-03-15');

/*-----------------------------------------------------------------------------*/

#User with the ID: 107
#Unhashed Password: plodlinuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$SXMEpj4QRDjtkyLH13nkFONhLJvvQ.FVU/T8itnoU58Cuvy833bla', 'pineapplecartrage', 'cartragepineapple@gmail.com');

#Create the restaurant for: pineapplecartrage
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 107, 'lisboa', 25274, 32, 548);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(107, 'ri', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(107, 3, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(107, 8, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 107, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 107, 1, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 107, 1, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(107, 13, '2019-01-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(107, 13, '2019-09-4');

/*-----------------------------------------------------------------------------*/

#User with the ID: 108
#Unhashed Password: pass1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$AGYd9wBUGjUEa4p4Kx4lJes/C0NuM4CweWZet.OKVU6.zjoZ3JaXm', 'bananafork', 'forkbanana@yandex.com');

#Create the restaurant for: bananafork
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 108, 'arcos', 17208, 35, 684);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(108, 'ri', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(108, 4, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(108, 8, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 108, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 108, 10, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 108, 10, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(108, 53, '2019-06-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(108, 53, '2019-05-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 109
#Unhashed Password: 123randomrr
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$saIm1PKFXAS2p5CX6ozU7O7ZxpvOauGQNhP6kB7pLvMm2c1y6U17m', 'trashknife', 'knifetrash@yahoo.com');

#Create the restaurant for: trashknife
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 109, 'arcos', 26354, 11, 116);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(109, 'wa', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(109, 0, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(109, 2, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 109, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 109, 8, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 109, 8, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(109, 149, '2019-00-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(109, 149, '2019-04-8');

/*-----------------------------------------------------------------------------*/

#User with the ID: 110
#Unhashed Password: randomrrroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$F4HtpArDdE3G8oKrPVAOgOIMaiCBa.ESYjUE0jWQ5t/xAyCQkq.0i', 'knifebears', 'bearsknife@outlook.com');

#Create the restaurant for: knifebears
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 110, 'tokyo', 8573, 86, 1530);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(110, 'ch', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(110, 5, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(110, 5, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 110, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 110, 0, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 110, 0, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(110, 12, '2019-05-10');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(110, 12, '2019-05-3');

/*-----------------------------------------------------------------------------*/

#User with the ID: 111
#Unhashed Password: roofwindows
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$tV/U0t6dGx4Y3POQ6vQD4.myvNFoJNfnsIP29Pj0.QQWfzvtpguMq', 'trainprooheckcp', 'prooheckcptrain@yahoo.com');

#Create the restaurant for: trainprooheckcp
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 111, 'washington', 26101, 25, 424);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(111, 'co', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(111, 7, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(111, 0, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 111, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 111, 8, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 111, 8, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(111, 127, '2019-01-16');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(111, 127, '2019-05-17');

/*-----------------------------------------------------------------------------*/

#User with the ID: 112
#Unhashed Password: silentmybirthday
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$67MXLR55v6.UsjzthTWKkeVOQCODkoENwG5OQaQpvImC0XEFzyUqO', 'mouseblyet', 'blyetmouse@zoho.com');

#Create the restaurant for: mouseblyet
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 112, 'lisboa', 25151, 53, 809);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(112, 'ri', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(112, 2, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(112, 8, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 112, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 112, 13, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 112, 13, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(112, 21, '2019-02-19');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(112, 21, '2019-06-3');

/*-----------------------------------------------------------------------------*/

#User with the ID: 113
#Unhashed Password: 1234admin
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$3BNOYIPPbAL5DVxZLauAYOd0ZQdKSuTNCUzBDJwJ3He.tJCgPK1hy', 'microphonetrain', 'trainmicrophone@gmail.com');

#Create the restaurant for: microphonetrain
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 113, 'tokyo', 29703, 26, 435);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(113, 'ol_oi', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(113, 8, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(113, 9, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 113, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 113, 4, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 113, 4, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(113, 197, '2019-00-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(113, 197, '2019-02-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 114
#Unhashed Password: shiverwowrk
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$goUgn7eEOOMINSpy.YyPgewjt1pvkoMQgxH43CSyTl0XIm8JPXCUe', 'hooverawper', 'awperhoover@yandex.com');

#Create the restaurant for: hooverawper
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 114, 'arcos', 12157, 26, 507);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(114, 'sh', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(114, 8, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(114, 3, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 114, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 114, 1, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 114, 1, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(114, 28, '2019-00-5');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(114, 28, '2019-07-12');

/*-----------------------------------------------------------------------------*/

#User with the ID: 115
#Unhashed Password: miguelwowrk
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$o.Ucik3lLSdpHaIM72tDY.vvbs4KDfBVQTDMRCz6HQXe3Idf0MrAO', 'simplenoodles', 'noodlessimple@yahoo.com');

#Create the restaurant for: simplenoodles
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 115, 'washington', 28266, 41, 88);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(115, 'sh', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(115, 0, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(115, 7, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 115, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 115, 5, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 115, 5, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(115, 48, '2019-03-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(115, 48, '2019-07-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 116
#Unhashed Password: lettuce123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$WYIlCGv86LZcMUgP06Rys.sjVkYR.xVqw8MWsMWpotYwZOPqcRw5i', 'saucefork', 'forksauce@hotmail.com');

#Create the restaurant for: saucefork
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 116, 'beja', 2490, 78, 343);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(116, 'co', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(116, 10, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(116, 2, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 116, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 116, 5, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 116, 5, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(116, 55, '2019-05-7');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(116, 55, '2019-01-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 117
#Unhashed Password: 1234vacation
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$KFie/PNE.00CdU0u6lNbD.qgeqJYo/fHrz7XkLEcK2/Ty3idrVnwe', 'rewardmicrophone', 'microphonereward@gmail.com');

#Create the restaurant for: rewardmicrophone
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 117, 'beja', 7095, 65, 606);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(117, 'pa', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(117, 5, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(117, 9, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 117, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 117, 12, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 117, 12, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(117, 85, '2019-09-8');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(117, 85, '2019-09-16');

/*-----------------------------------------------------------------------------*/

#User with the ID: 118
#Unhashed Password: passwordshiver
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$zN.ktlzahZvst0WgkB/yne80rAdnQv.4INnTiJIZAAIXaaKVRE0be', 'rainsmarthphone', 'smarthphonerain@zoho.com');

#Create the restaurant for: rainsmarthphone
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 118, 'tokyo', 9247, 61, 193);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(118, 'tu', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(118, 1, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(118, 6, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 118, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 118, 13, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 118, 13, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(118, 48, '2019-01-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(118, 48, '2019-00-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 119
#Unhashed Password: soggymiguel
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$rxyLM2VX.AUvzI9Em5AcDez6VhDvhPaxR1jrfzlRoN26dFln4n8JG', 'awperbottle', 'bottleawper@zoho.com');

#Create the restaurant for: awperbottle
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 119, 'porto', 12877, 31, 262);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(119, 'wa', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(119, 10, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(119, 8, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 119, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 119, 9, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 119, 9, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(119, 174, '2019-05-20');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(119, 174, '2019-03-4');

/*-----------------------------------------------------------------------------*/

#User with the ID: 120
#Unhashed Password: vacationsoggy
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Hr8qA0dzVC6goyDU6XYy4OwZcdVQXXtdOMssTpccM55PFAKZ3lFZa', 'preventblyet', 'blyetprevent@yahoo.com');

#Create the restaurant for: preventblyet
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 120, 'washington', 1653, 31, 591);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(120, 'wa', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(120, 7, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(120, 5, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 120, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 120, 8, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 120, 8, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(120, 94, '2019-07-8');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(120, 94, '2019-07-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 121
#Unhashed Password: passwordvacation
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$xcZXa1k8wzDFwJRmzdjH/uhTLHlMz.WEArGx4oSQ5EAMoAOU3V/b2', 'xxxsauce', 'saucexxx@hotmail.com');

#Create the restaurant for: xxxsauce
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 121, 'new york', 6365, 8, 20);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(121, 'pa', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(121, 9, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(121, 4, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 121, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 121, 3, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 121, 3, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(121, 127, '2019-01-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(121, 127, '2019-07-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 122
#Unhashed Password: randomrrmycat
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$XqgkwGKEo/rok/CG0shrOu7qDiywtZP58jih0EV1wCvuyQuyeKQZW', 'shotgunprevent', 'preventshotgun@gmail.com');

#Create the restaurant for: shotgunprevent
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 122, 'porto', 18017, 100, 304);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(122, 'pa', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(122, 5, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(122, 2, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 122, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 122, 1, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 122, 1, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(122, 148, '2019-05-6');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(122, 148, '2019-06-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 123
#Unhashed Password: bearlamp
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$ZcnwWBLlCXOgbB1kUlwZNey0xPF1nSLn0r.c.2ErJThoEkAgtO/LG', 'weebprevent', 'preventweeb@zoho.com');

#Create the restaurant for: weebprevent
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 123, 'tokyo', 10297, 84, 73);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(123, 'ol_oi', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(123, 0, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(123, 10, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 123, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 123, 10, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 123, 10, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(123, 13, '2019-07-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(123, 13, '2019-03-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 124
#Unhashed Password: plodmycat
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$daQ7S2y0vtay7OQACbCqNeAKwewtI/Toa2885iPpyfyn6XvN.nx7S', 'gamernewspaper', 'newspapergamer@gmail.com');

#Create the restaurant for: gamernewspaper
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 124, 'berlin', 20654, 90, 437);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(124, 'ri', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(124, 10, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(124, 9, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 124, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 124, 10, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 124, 10, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(124, 34, '2019-09-6');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(124, 34, '2019-09-15');

/*-----------------------------------------------------------------------------*/

#User with the ID: 125
#Unhashed Password: vacationnotApass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$.yfN/53XllEYNb8pyF1kROjR3Zjks4tZ/zc0nv1I2WGHnvDSN4w9C', 'cardenier', 'deniercar@zoho.com');

#Create the restaurant for: cardenier
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 125, 'berlin', 20869, 46, 50);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(125, 'ch', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(125, 0, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(125, 10, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 125, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 125, 3, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 125, 3, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(125, 67, '2019-01-9');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(125, 67, '2019-06-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 126
#Unhashed Password: mycatsilent
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$SfIknVZLxK7FP3JyZNJRBOSIlF0bv89QSaiMLs2l6Ydr7baQiC6Cu', 'magazineprinter', 'printermagazine@outlook.com');

#Create the restaurant for: magazineprinter
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 126, 'arcos', 1083, 69, 182);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(126, 'pa', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(126, 8, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(126, 2, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 126, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 126, 3, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 126, 3, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(126, 117, '2019-05-20');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(126, 117, '2019-00-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 127
#Unhashed Password: ubuntuxxx
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$uIZcxunF/1LeC/dKByRuKeWpEZsSx0p8mYy56YNpc3G3uk18xKBaG', 'trivagoprooheckcp', 'prooheckcptrivago@outlook.com');

#Create the restaurant for: trivagoprooheckcp
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 127, 'tokyo', 15359, 31, 584);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(127, 'tu', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(127, 2, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(127, 6, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 127, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 127, 12, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 127, 12, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(127, 189, '2019-04-13');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(127, 189, '2019-03-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 128
#Unhashed Password: roofubuntu
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$swVV7SlXDK0X9wuVAPaxeuzZa6jwLoJMta2eSKTWIJ26Vqt6.UcEC', 'bearsmagazine', 'magazinebears@zoho.com');

#Create the restaurant for: bearsmagazine
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 128, 'beja', 21335, 33, 341);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(128, 'pa', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(128, 3, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(128, 3, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 128, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 128, 11, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 128, 11, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(128, 179, '2019-06-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(128, 179, '2019-03-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 129
#Unhashed Password: lampwindows
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$nV1fInxx1Rwam58COtZbA.OKUmk/c2IqjDiZFseJ.o5AnFQNTRnri', 'bottlerain', 'rainbottle@outlook.com');

#Create the restaurant for: bottlerain
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 129, 'lisboa', 838, 51, 712);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(129, 'ch', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(129, 4, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(129, 9, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 129, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 129, 0, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 129, 0, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(129, 33, '2019-01-12');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(129, 33, '2019-02-20');

/*-----------------------------------------------------------------------------*/

#User with the ID: 130
#Unhashed Password: passwordubuntu
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Ebu/k651cDnMeCVSTmRrdubHKUU.V1hiPVNYAQsjimh3FWkEc0WM2', 'epicvaccum', 'vaccumepic@aol.com');

#Create the restaurant for: epicvaccum
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 130, 'amoreira', 20328, 97, 1867);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(130, 'wa', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(130, 1, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(130, 1, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 130, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 130, 10, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 130, 10, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(130, 27, '2019-05-16');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(130, 27, '2019-05-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 131
#Unhashed Password: plodlinuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$WVMkgtzKeNnRqc2I0kOo6uZ/nYTG2v11IcVhSxBD1APEILKdoSWlK', 'magazinexxx', 'xxxmagazine@hotmail.com');

#Create the restaurant for: magazinexxx
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 131, 'new york', 1673, 76, 1094);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(131, 'co', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(131, 8, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(131, 0, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 131, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 131, 13, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 131, 13, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(131, 97, '2019-07-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(131, 97, '2019-03-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 132
#Unhashed Password: bearmybirthday
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$6VlQqQmgK74v.S.TI5k5.uFyoTQiRUeHpo0jqwKaZA1d3Gub6yBA6', 'MLGlamp', 'lampMLG@zoho.com');

#Create the restaurant for: MLGlamp
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 132, 'beja', 6962, 84, 1630);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(132, 'fl', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(132, 6, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(132, 2, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 132, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 132, 8, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 132, 8, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(132, 113, '2019-06-7');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(132, 113, '2019-06-8');

/*-----------------------------------------------------------------------------*/

#User with the ID: 133
#Unhashed Password: bear1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$owupLjRGfxiq8QI5Y.DZ9.oxDg6SDpDZVedAuag6FKeEV6uEHm/ES', 'rewardMLG', 'MLGreward@hotmail.com');

#Create the restaurant for: rewardMLG
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 133, 'washington', 14753, 22, 355);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(133, 'wa', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(133, 3, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(133, 0, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 133, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 133, 4, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 133, 4, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(133, 9, '2019-02-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(133, 9, '2019-08-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 134
#Unhashed Password: miguelmybirthday
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$WMLZjRznlclo1jtJ0duDYeosT1fwlq2l1xZtAiv/vWhtM.MM66dOi', 'newspapergamer', 'gamernewspaper@zoho.com');

#Create the restaurant for: newspapergamer
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 134, 'berlin', 7866, 3, 9);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(134, 'ri', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(134, 4, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(134, 10, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 134, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 134, 11, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 134, 11, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(134, 80, '2019-00-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(134, 80, '2019-07-6');

/*-----------------------------------------------------------------------------*/

#User with the ID: 135
#Unhashed Password: mycatxxx
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$mQFBaK.OuLw5Lrs469S73O0ACzlxRWrHkVfIj4oCwIKfCpk0JB5AW', 'lampmagazine', 'magazinelamp@yahoo.com');

#Create the restaurant for: lampmagazine
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 135, 'washington', 5730, 18, 199);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(135, 'pa', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(135, 10, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(135, 3, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 135, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 135, 5, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 135, 5, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(135, 32, '2019-07-20');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(135, 32, '2019-03-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 136
#Unhashed Password: lampadmin
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$rN6LemnBuh3qLtMRBDUWxeEzPviqmKOSf1BLCceQI.fEqaHZR1506', 'xxxboombox', 'boomboxxxx@hotmail.com');

#Create the restaurant for: xxxboombox
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 136, 'amoreira', 1252, 83, 366);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(136, 'pa', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(136, 10, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(136, 8, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 136, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 136, 6, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 136, 6, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(136, 59, '2019-00-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(136, 59, '2019-07-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 137
#Unhashed Password: mycatburst
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$4GB1qbxWR.q0u5Rlt8fZX.wMH8Nx2.zuGIZl5Ml2s5uMVF2wvJXKa', 'gamerfork', 'forkgamer@zoho.com');

#Create the restaurant for: gamerfork
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 137, 'tokyo', 20938, 64, 1083);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(137, 'ri', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(137, 2, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(137, 0, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 137, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 137, 11, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 137, 11, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(137, 4, '2019-00-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(137, 4, '2019-01-12');

/*-----------------------------------------------------------------------------*/

#User with the ID: 138
#Unhashed Password: passwordbirds
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$llNjj7R53yGcZKnTQazMNuZSdmhGXsrvoGkbyuyHE2cMMvK3QU4mO', 'trainprevent', 'preventtrain@zoho.com');

#Create the restaurant for: trainprevent
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 138, 'beja', 26065, 89, 1308);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(138, 'ri', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(138, 9, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(138, 2, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 138, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 138, 4, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 138, 4, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(138, 66, '2019-01-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(138, 66, '2019-08-20');

/*-----------------------------------------------------------------------------*/

#User with the ID: 139
#Unhashed Password: PasswordnotApass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$MvBpV7/Iq28I3wivN8gVPO.sYcdnh/ynAXPYO2661ugxT5muJDexG', 'carweeb', 'weebcar@yandex.com');

#Create the restaurant for: carweeb
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 139, 'amoreira', 13838, 67, 1065);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(139, 'pa', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(139, 6, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(139, 3, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 139, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 139, 2, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 139, 2, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(139, 91, '2019-06-19');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(139, 91, '2019-05-16');

/*-----------------------------------------------------------------------------*/

#User with the ID: 140
#Unhashed Password: plodmiguel
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$1Xr0.PBPAz32R8.dDSOlfe.jvS5z/CN.Fw6CEk/cqYJpCQh9Zytou', 'shotgunhotel', 'hotelshotgun@hotmail.com');

#Create the restaurant for: shotgunhotel
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 140, 'porto', 20325, 47, 259);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(140, 'ch', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(140, 7, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(140, 8, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 140, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 140, 7, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 140, 7, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(140, 136, '2019-04-12');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(140, 136, '2019-05-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 141
#Unhashed Password: notApassharm
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$z.chajp9SWsMg2juuwYi2OP3pbWBKkyzju8pqUKe2X6BRmjMQN8aa', 'rewarddenier', 'denierreward@outlook.com');

#Create the restaurant for: rewarddenier
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 141, 'porto', 7928, 44, 324);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(141, 'co', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(141, 1, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(141, 0, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 141, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 141, 5, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 141, 5, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(141, 158, '2019-07-8');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(141, 158, '2019-09-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 142
#Unhashed Password: bearmiguel
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$7cc3ENJikv3.orKT38ZgceND/px1caM8D91/vM4FB96W04e4mT3Mi', 'trashgamer', 'gamertrash@gmail.com');

#Create the restaurant for: trashgamer
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 142, 'arcos', 29839, 77, 1426);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(142, 'ol_oi', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(142, 4, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(142, 9, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 142, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 142, 5, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 142, 5, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(142, 126, '2019-02-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(142, 126, '2019-05-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 143
#Unhashed Password: shiver1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$eyUlpkBZ7rrnIC.czKcL5.4PYBKmdvEB0yqvhC98mwRhSC/zDu5u6', 'newspaperfork', 'forknewspaper@hotmail.com');

#Create the restaurant for: newspaperfork
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 143, 'new york', 963, 27, 185);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(143, 'sh', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(143, 3, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(143, 8, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 143, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 143, 3, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 143, 3, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(143, 159, '2019-05-13');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(143, 159, '2019-04-15');

/*-----------------------------------------------------------------------------*/

#User with the ID: 144
#Unhashed Password: mycatsoggy
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$dXtPraRbYnBV8TqeUFvWO.hH6F9iz112lRCrhhOGToVTn/S4Qq8ta', 'simpleprinter', 'printersimple@yandex.com');

#Create the restaurant for: simpleprinter
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 144, 'washington', 26327, 96, 1359);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(144, 'ch', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(144, 4, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(144, 9, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 144, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 144, 13, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 144, 13, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(144, 148, '2019-07-8');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(144, 148, '2019-03-13');

/*-----------------------------------------------------------------------------*/

#User with the ID: 145
#Unhashed Password: mybirthdayrandomrr
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$HwLLZfLHnGK3LZpqBPGRFuUmlc.CjrakH31bzxdFP24MW2418U/L6', 'bearsMLG', 'MLGbears@outlook.com');

#Create the restaurant for: bearsMLG
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 145, 'new york', 26810, 37, 253);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(145, 'fl', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(145, 1, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(145, 1, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 145, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 145, 13, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 145, 13, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(145, 67, '2019-06-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(145, 67, '2019-00-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 146
#Unhashed Password: rooflettuce
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$l8X.FT1AeJGyrIT3riK5tOw5joOFg4ZI41AlBQW/AWyNYsqTl8PQi', 'noscopeotaku', 'otakunoscope@hotmail.com');

#Create the restaurant for: noscopeotaku
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 146, 'beja', 2701, 6, 63);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(146, 'sh', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(146, 4, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(146, 2, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 146, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 146, 8, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 146, 8, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(146, 13, '2019-04-6');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(146, 13, '2019-04-15');

/*-----------------------------------------------------------------------------*/

#User with the ID: 147
#Unhashed Password: randomrr1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$rxttT4w.QbsJ82XkFSvGb.QwHuROWrv75rb/.qW0fATrciLxUGVOe', 'gamermagazine', 'magazinegamer@hotmail.com');

#Create the restaurant for: gamermagazine
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 147, 'arcos', 8154, 0, 0);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(147, 'wa', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(147, 5, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(147, 3, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 147, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 147, 9, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 147, 9, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(147, 30, '2019-05-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(147, 30, '2019-04-1');

/*-----------------------------------------------------------------------------*/

#User with the ID: 148
#Unhashed Password: silentshiver
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$wAMjbZkiT/.sL.MpBq6YsuKP2U816paRXuy8EWDw0F2yNYk6Kxzqa', 'bearsrain', 'rainbears@yahoo.com');

#Create the restaurant for: bearsrain
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 148, 'berlin', 23327, 60, 111);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(148, 'fl', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(148, 9, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(148, 3, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 148, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 148, 11, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 148, 11, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(148, 31, '2019-05-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(148, 31, '2019-00-17');

/*-----------------------------------------------------------------------------*/

#User with the ID: 149
#Unhashed Password: password1234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$.gu6U1w/03/NXEGmgR4wR.OZGzIuR.oc6Q3DjkT4qKHtinIt0AHQ.', 'printerhotel', 'hotelprinter@outlook.com');

#Create the restaurant for: printerhotel
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 149, 'beja', 7045, 31, 354);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(149, 'fl', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(149, 4, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(149, 2, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 149, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 149, 1, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 149, 1, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(149, 78, '2019-03-12');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(149, 78, '2019-09-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 150
#Unhashed Password: 1234roof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$cQ.vfz3N/I2KOYeu0fWPm.ZCKqwwpDrgo8p0JaUzdISZY5CTNPJZ.', 'newspaperlamp', 'lampnewspaper@outlook.com');

#Create the restaurant for: newspaperlamp
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 150, 'washington', 7975, 86, 329);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(150, 'ol_oi', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(150, 7, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(150, 9, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 150, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 150, 4, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 150, 4, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(150, 107, '2019-02-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(150, 107, '2019-06-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 151
#Unhashed Password: 123linuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$cehELkh3o3q9D.JT2w7PSuDiNdyMz//p3oNuLxR6huZrLxzFZGlNu', 'carbears', 'bearscar@zoho.com');

#Create the restaurant for: carbears
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 151, 'faro', 20930, 68, 124);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(151, 'wa', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(151, 0, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(151, 9, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 151, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 151, 7, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 151, 7, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(151, 128, '2019-07-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(151, 128, '2019-06-4');

/*-----------------------------------------------------------------------------*/

#User with the ID: 152
#Unhashed Password: bearsilent
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Q1F24ZYAGERUqnP2nyv.UuMqgRdba.WDM9JPE1VL5fsEcmTuxhxBO', 'michaelotaku', 'otakumichael@outlook.com');

#Create the restaurant for: michaelotaku
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 152, 'tokyo', 17697, 84, 1028);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(152, 'ol_oi', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(152, 10, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(152, 1, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 152, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 152, 9, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 152, 9, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(152, 119, '2019-01-19');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(152, 119, '2019-02-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 153
#Unhashed Password: bearmiguel
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$tcsHt4ssSDWS5yhGlYe5zuEamjXhMrIUVbdMIf9CEXT8KHnojYaC6', 'noscopeprooheckcp', 'prooheckcpnoscope@outlook.com');

#Create the restaurant for: noscopeprooheckcp
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 153, 'new york', 11385, 27, 381);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(153, 'co', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(153, 3, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(153, 6, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 153, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 153, 2, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 153, 2, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(153, 113, '2019-02-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(153, 113, '2019-01-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 154
#Unhashed Password: burstwowrk
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Siv8H3FS.oLGceLTU0HdDewsECU4oQtYgFhN9e0YUdKOMJZdqltBK', 'shotgundenier', 'deniershotgun@zoho.com');

#Create the restaurant for: shotgundenier
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 154, 'tokyo', 17069, 66, 1079);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(154, 'tu', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(154, 8, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(154, 6, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 154, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 154, 3, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 154, 3, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(154, 5, '2019-04-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(154, 5, '2019-01-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 155
#Unhashed Password: plodnotApass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$l1V0l2jMEVApSZKsLx4mB.uNINRMNegCsxCaEYf7QhIYG8ul3nzmu', 'rewardrouter', 'routerreward@aol.com');

#Create the restaurant for: rewardrouter
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 155, 'tokyo', 28661, 67, 918);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(155, 'fl', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(155, 1, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(155, 8, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 155, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 155, 8, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 155, 8, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(155, 9, '2019-07-6');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(155, 9, '2019-05-12');

/*-----------------------------------------------------------------------------*/

#User with the ID: 156
#Unhashed Password: linuxuserpassword
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$jJE6v7mpr8zwOfgePOCn7.QX89F09nxby.xGZVk2Fgp1cmFICKICK', 'keyboardKennyS', 'KennySkeyboard@zoho.com');

#Create the restaurant for: keyboardKennyS
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 156, 'beja', 27757, 66, 921);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(156, 'tu', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(156, 4, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(156, 9, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 156, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 156, 7, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 156, 7, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(156, 117, '2019-03-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(156, 117, '2019-04-6');

/*-----------------------------------------------------------------------------*/

#User with the ID: 157
#Unhashed Password: bear123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$iMtr7Hc.4TrbbCXoUI.hvu5bdsl475PRhABFNHZTx4bOpRxr2AimK', 'MLGweeb', 'weebMLG@hotmail.com');

#Create the restaurant for: MLGweeb
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 157, 'berlin', 26761, 78, 1010);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(157, 'fl', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(157, 10, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(157, 5, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 157, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 157, 1, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 157, 1, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(157, 93, '2019-06-10');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(157, 93, '2019-03-4');

/*-----------------------------------------------------------------------------*/

#User with the ID: 158
#Unhashed Password: harmshiver
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$mRlAoTIoIul1OskS0m.0E.Ai/oyosuL5/M00oJ03xy6DK.jlp5sGG', 'trivagoreward', 'rewardtrivago@hotmail.com');

#Create the restaurant for: trivagoreward
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 158, 'new york', 26916, 86, 1537);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(158, 'tu', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(158, 0, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(158, 7, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 158, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 158, 10, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 158, 10, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(158, 24, '2019-09-18');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(158, 24, '2019-08-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 159
#Unhashed Password: miguelvacation
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$ecrxysF2Fvon4nJ6CnaYRu2kCBcP3KYibHu1oh94LNIAgqzVNnyyK', 'vsaucebears', 'bearsvsauce@gmail.com');

#Create the restaurant for: vsaucebears
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 159, 'berlin', 26754, 67, 817);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(159, 'ri', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(159, 9, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(159, 8, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 159, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 159, 3, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 159, 3, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(159, 47, '2019-00-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(159, 47, '2019-09-2');

/*-----------------------------------------------------------------------------*/

#User with the ID: 160
#Unhashed Password: windowslamp
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$a/2B2sNVHe4y7ZSB6z.YaOWtTbGtCO9Kp0V6hHL1B2Hc5LFUXiTpW', 'vodkasauce', 'saucevodka@hotmail.com');

#Create the restaurant for: vodkasauce
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 160, 'tokyo', 2790, 88, 1495);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(160, 'wa', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(160, 3, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(160, 9, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 160, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 160, 7, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 160, 7, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(160, 154, '2019-03-16');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(160, 154, '2019-09-13');

/*-----------------------------------------------------------------------------*/

#User with the ID: 161
#Unhashed Password: silentmybirthday
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$AtTyN.NqfL.V.yUajcJ56O1./YkJ.DhVZckVWUySmyv6Z/FXuJjVq', 'knifeprevent', 'preventknife@yandex.com');

#Create the restaurant for: knifeprevent
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 161, 'amoreira', 18159, 7, 36);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(161, 'wa', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(161, 7, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(161, 7, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 161, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 161, 1, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 161, 1, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(161, 185, '2019-00-14');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(161, 185, '2019-09-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 162
#Unhashed Password: burstsoggy
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$xXBAmcyw830/aM97UbAR0ublahh167iKGpHjQILYTnT/DeJQX3.mu', 'vodkamouse', 'mousevodka@gmail.com');

#Create the restaurant for: vodkamouse
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 162, 'washington', 27153, 52, 227);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(162, 'fl', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(162, 9, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(162, 2, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 162, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 162, 0, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 162, 0, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(162, 36, '2019-06-14');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(162, 36, '2019-05-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 163
#Unhashed Password: 1234notApass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$kBpbi3MPDY2k04bmImJe7uo1m33upo/V7ceIs6jBkWj0X6U5HeIdi', 'vodkatrivago', 'trivagovodka@zoho.com');

#Create the restaurant for: vodkatrivago
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 163, 'porto', 4561, 71, 77);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(163, 'fl', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(163, 4, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(163, 8, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 163, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 163, 4, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 163, 4, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(163, 169, '2019-07-6');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(163, 169, '2019-03-2');

/*-----------------------------------------------------------------------------*/

#User with the ID: 164
#Unhashed Password: plodrandomrr
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$qRdFwHMqC8BJydQw0.r/9uA8TC4QrVMLs.aoWvMoeVcbHgyJT6f2q', 'noscopetrivago', 'trivagonoscope@aol.com');

#Create the restaurant for: noscopetrivago
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 164, 'washington', 19505, 49, 604);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(164, 'tu', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(164, 7, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(164, 4, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 164, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 164, 7, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 164, 7, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(164, 166, '2019-03-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(164, 166, '2019-07-13');

/*-----------------------------------------------------------------------------*/

#User with the ID: 165
#Unhashed Password: harmadmin
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$tNREoohG/SnPQkJFJ1hkleI66DRPK3a9ubmys8p/9UliCiCA9bpIy', 'boomboxepic', 'epicboombox@outlook.com');

#Create the restaurant for: boomboxepic
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 165, 'washington', 8131, 41, 129);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(165, 'fl', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(165, 2, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(165, 10, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 165, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 165, 11, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 165, 11, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(165, 71, '2019-09-1');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(165, 71, '2019-00-12');

/*-----------------------------------------------------------------------------*/

#User with the ID: 166
#Unhashed Password: randomrrsilent
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$JeSpcRxWjGpL1V2NT6JeeO6BIAfVeqNFaDLfPOAIzvT0M3tBHYyFi', 'spoonmicrophone', 'microphonespoon@yandex.com');

#Create the restaurant for: spoonmicrophone
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 166, 'washington', 12508, 53, 602);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(166, 'co', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(166, 9, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(166, 0, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 166, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 166, 1, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 166, 1, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(166, 51, '2019-09-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(166, 51, '2019-01-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 167
#Unhashed Password: soggyshiver
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$O0fVTFQtVBWbX3jcz80F5eF3uNH0QXuhUFfnhnSZ8jdB4f8ByekfW', 'preventmichaelBoy123', 'michaelprevent@outlook.com');

#Create the restaurant for: preventmichael
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 167, 'arcos', 18167, 26, 92);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(167, 'tu', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(167, 10, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(167, 4, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 167, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 167, 5, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 167, 5, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(167, 102, '2019-06-10');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(167, 102, '2019-02-10');

/*-----------------------------------------------------------------------------*/

#User with the ID: 168
#Unhashed Password: soggynotApass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$Fjr6VJIcOdCTWx7MzvhObuWitbF5MgzYl6tQIZTFsjXROkvcKRQ7G', 'KennySrain', 'rainKennyS@yahoo.com');

#Create the restaurant for: KennySrain
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 168, 'berlin', 23096, 63, 1076);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(168, 'co', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(168, 8, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(168, 8, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 168, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 168, 6, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 168, 6, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(168, 184, '2019-01-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(168, 184, '2019-07-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 169
#Unhashed Password: passwordsilent
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$XZXpTkMTXo959Fv56QqoY.U9NJeHjX7d/IyoUVcKPlwKsH0Ti51Hu', 'robloxweeb', 'weebroblox@zoho.com');

#Create the restaurant for: robloxweeb
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 169, 'washington', 23091, 39, 410);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(169, 'pa', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(169, 8, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(169, 4, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 169, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 169, 7, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 169, 7, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(169, 13, '2019-09-8');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(169, 13, '2019-05-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 170
#Unhashed Password: 1234birds
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$euNCaTNdbKImqQrl2jWemu4s/P2Kg1SZI671.4mnCjDn2Gf2N5Eae', 'noodlesgamer', 'gamernoodles@zoho.com');

#Create the restaurant for: noodlesgamer
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 170, 'porto', 6882, 13, 106);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(170, 'ch', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(170, 2, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(170, 0, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 170, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 170, 5, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 170, 5, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(170, 151, '2019-09-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(170, 151, '2019-05-14');

/*-----------------------------------------------------------------------------*/

#User with the ID: 171
#Unhashed Password: silentubuntu
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$a75i840Zn/S9cjPFI/st7.8s/xtcK6iUAfz4.ZqRNiXkxrhFMBg.a', 'bearstrash', 'trashbears@hotmail.com');

#Create the restaurant for: bearstrash
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 171, 'beja', 2442, 3, 1);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(171, 'sh', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(171, 5, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(171, 10, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 171, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 171, 3, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 171, 3, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(171, 128, '2019-07-4');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(171, 128, '2019-06-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 172
#Unhashed Password: passwordvacation
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$gdUqcAZxgdz2YN7FNVwB5ukueOUkSriT4eQyKZ3w7e27A2sxS/DyO', 'smarthphonenoodles', 'noodlessmarthphone@yahoo.com');

#Create the restaurant for: smarthphonenoodles
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 172, 'amoreira', 20223, 35, 280);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(172, 'ri', 6);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(172, 9, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(172, 5, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 172, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 172, 9, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 172, 9, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(172, 158, '2019-03-16');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(172, 158, '2019-01-5');

/*-----------------------------------------------------------------------------*/

#User with the ID: 173
#Unhashed Password: miguel123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$kYwOqnPBHbYLxcSPnEKAUehgrBs2C.nFs21nXo6rngEu8BtvbwajW', 'trivagoblyet', 'blyettrivago@gmail.com');

#Create the restaurant for: trivagoblyet
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 173, 'beja', 18954, 19, 318);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(173, 'pa', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(173, 2, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(173, 6, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 173, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 173, 8, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 173, 8, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(173, 7, '2019-06-11');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(173, 7, '2019-03-5');

/*-----------------------------------------------------------------------------*/

#User with the ID: 174
#Unhashed Password: harmroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$0yEOoF0NIDrmLylphdfRs.IofsoFZfMEgbLRdmcxCphu/eoJiTBSa', 'carmagazine', 'magazinecar@outlook.com');

#Create the restaurant for: carmagazine
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 174, 'faro', 15150, 56, 363);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(174, 'ri', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(174, 4, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(174, 3, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 174, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 174, 1, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 174, 1, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(174, 124, '2019-03-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(174, 124, '2019-09-20');

/*-----------------------------------------------------------------------------*/

#User with the ID: 175
#Unhashed Password: lampharm
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$brFOzI9BxUCAh./8zFeNpufd.5KKDyV5VXpuZhEE4cVSaDshrrLl2', 'forkknife', 'knifefork@yahoo.com');

#Create the restaurant for: forkknife
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 175, 'beja', 24285, 1, 8);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(175, 'tu', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(175, 9, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(175, 4, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 175, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 175, 6, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 175, 6, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(175, 6, '2019-05-3');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(175, 6, '2019-00-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 176
#Unhashed Password: shiverxxx
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$3UVgSvH3w0mZz8Ln.gm9Puiq1vru519E5FNF.icuuNxJv0QhHUisK', 'keyboardboat', 'boatkeyboard@yandex.com');

#Create the restaurant for: keyboardboat
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 176, 'faro', 15931, 12, 166);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(176, 'ch', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(176, 4, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(176, 1, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 176, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 176, 12, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 176, 12, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(176, 75, '2019-03-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(176, 75, '2019-04-11');

/*-----------------------------------------------------------------------------*/

#User with the ID: 177
#Unhashed Password: randomrrshiver
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$xcPG5k02VXIO9L84NfZ.PecZNFXatd.BZ0n47/0lfwwWHZPYOxQfa', 'keyboardblyet', 'blyetkeyboard@outlook.com');

#Create the restaurant for: keyboardblyet
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 177, 'faro', 27631, 5, 28);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(177, 'sh', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(177, 4, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(177, 1, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 177, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 177, 4, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 177, 4, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(177, 191, '2019-09-20');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(177, 191, '2019-03-6');

/*-----------------------------------------------------------------------------*/

#User with the ID: 178
#Unhashed Password: silentroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$GfOC328XLonZgenR1slzEe8FXWLvqmaMX1mXtHtsw6vapCO6GQK1O', 'chargerrouter', 'routercharger@outlook.com');

#Create the restaurant for: chargerrouter
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 178, 'new york', 10195, 57, 747);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(178, 'sh', 4);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(178, 10, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(178, 6, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 178, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 178, 1, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 178, 1, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(178, 186, '2019-02-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(178, 186, '2019-05-13');

/*-----------------------------------------------------------------------------*/

#User with the ID: 179
#Unhashed Password: windowsnotApass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$JTRZ6Bza3jlMBsRCf3sbOuoGymCdlOvFFgRp.PCOFPfKWHbcBb7i2', 'weebsmarthphone', 'smarthphoneweeb@hotmail.com');

#Create the restaurant for: weebsmarthphone
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 179, 'tokyo', 6408, 46, 557);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(179, 'fl', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(179, 5, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(179, 1, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 179, 2);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 179, 2, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 179, 2, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(179, 117, '2019-05-13');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(179, 117, '2019-06-19');

/*-----------------------------------------------------------------------------*/

#User with the ID: 180
#Unhashed Password: ubuntu123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$5d0oC78CaGiDnbndHDNHDe9nzPv1NexpMNtg5ur5OL8.XBvPaYAO6', 'KennySmagazine', 'magazineKennyS@zoho.com');

#Create the restaurant for: KennySmagazine
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 180, 'tokyo', 19504, 13, 205);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(180, 'ol_oi', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(180, 9, 'br_om');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(180, 4, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 180, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 180, 2, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 180, 2, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(180, 80, '2019-02-4');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(180, 80, '2019-07-6');

/*-----------------------------------------------------------------------------*/

#User with the ID: 181
#Unhashed Password: windowscute
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$vT2XyZaO86dwxQfwNiFq7ezevpkeJqstpXNvkv7b1zKmzZAiAsAw6', 'boomboxnoodles', 'noodlesboombox@zoho.com');

#Create the restaurant for: boomboxnoodles
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 181, 'tokyo', 16205, 24, 290);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(181, 'fl', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(181, 6, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(181, 1, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 181, 0);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 181, 13, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 181, 13, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(181, 138, '2019-03-7');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(181, 138, '2019-01-6');

/*-----------------------------------------------------------------------------*/

#User with the ID: 182
#Unhashed Password: xxxadmin
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$GMdw3WVAd/kkKBEoOQMwr.SlIbeSDxVCyTuB69gHIKH21nuGHJfky', 'lamproblox', 'robloxlamp@outlook.com');

#Create the restaurant for: lamproblox
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 182, 'porto', 1544, 1, 0);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(182, 'sh', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(182, 6, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(182, 0, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 182, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 182, 13, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 182, 13, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(182, 83, '2019-03-20');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(182, 83, '2019-09-2');

/*-----------------------------------------------------------------------------*/

#User with the ID: 183
#Unhashed Password: shiverharm
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$mLxODLX3HzPlsEuFv9Nx8.uMLO0M59dVnMtRkUCo1QjXDTVREn2lW', 'bearscaryBeast', 'carbears@yahoo.com');

#Create the restaurant for: bearscar
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 183, 'new york', 15977, 7, 62);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(183, 'tu', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(183, 0, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(183, 0, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 183, 4);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 183, 7, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 183, 7, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(183, 124, '2019-01-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(183, 124, '2019-07-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 184
#Unhashed Password: wowrklinuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$nY084Gtg2y0Ziwo1rXBzq.woesJlU0ustnxm4rsjxjrLTNAMlkdue', 'bearscar', 'carbears@zoho.com');

#Create the restaurant for: bearscar
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 184, 'faro', 19607, 87, 1505);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(184, 'ch', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(184, 9, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(184, 4, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 184, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 184, 1, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 184, 1, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(184, 99, '2019-02-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(184, 99, '2019-03-13');

/*-----------------------------------------------------------------------------*/

#User with the ID: 185
#Unhashed Password: silent123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$4dNbZn8zwPYplqu3g1ZZMewSKbSv3D48QQ7WsTC2uAlO3wX6pEoNa', 'KennySbanana', 'bananaKennyS@outlook.com');

#Create the restaurant for: KennySbanana
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 185, 'tokyo', 16022, 7, 140);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(185, 'ri', 9);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(185, 1, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(185, 2, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 185, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 185, 10, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 185, 10, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(185, 57, '2019-05-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(185, 57, '2019-09-5');

/*-----------------------------------------------------------------------------*/

#User with the ID: 186
#Unhashed Password: 1231234
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$ZlHZW9e6AP8hk8NPyXsMPOTBUThPRUj4GFoUJ3VJB4N15gnfV6xGO', 'bottlenoodles', 'noodlesbottle@aol.com');

#Create the restaurant for: bottlenoodles
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 186, 'beja', 5668, 41, 698);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(186, 'wa', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(186, 8, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(186, 3, 'ch_ca');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 186, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 186, 12, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 186, 12, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(186, 95, '2019-01-0');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(186, 95, '2019-00-18');

/*-----------------------------------------------------------------------------*/

#User with the ID: 187
#Unhashed Password: passwordlettuce
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$LErE0EBRpQiqzJWd9dNk4eV87kVEu6CD4gEGE76.jTV0BnYBzqzxS', 'knifetrain', 'trainknife@outlook.com');

#Create the restaurant for: knifetrain
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 187, 'porto', 632, 27, 500);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(187, 'tu', 8);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(187, 1, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(187, 0, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 187, 10);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 187, 1, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 187, 1, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(187, 111, '2019-07-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(187, 111, '2019-05-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 188
#Unhashed Password: passwordroof
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$r7rm3oNGrJbP2LLwn6pDiuJcSIEEd1wbVnxcsH81a.byD0k0JR4pi', 'bananalamp', 'lampbanana@hotmail.com');

#Create the restaurant for: bananalamp
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 188, 'washington', 4783, 6, 64);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(188, 'wa', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(188, 1, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(188, 7, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 188, 6);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 188, 8, 1);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 188, 8, 2);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(188, 139, '2019-06-5');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(188, 139, '2019-09-5');

/*-----------------------------------------------------------------------------*/

#User with the ID: 189
#Unhashed Password: mybirthdaylinuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$pQDSWYfHsrPrbsZkn302OeyHAYwXatgqhBv5yH07VOCAkKsE1G3de', 'bananaprojekt', 'projektbanana@zoho.com');

#Create the restaurant for: bananaprojekt
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 189, 'tokyo', 8939, 90, 1636);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(189, 'ri', 1);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(189, 2, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(189, 7, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 189, 7);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 189, 12, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 189, 12, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(189, 136, '2019-08-14');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(189, 136, '2019-01-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 190
#Unhashed Password: windows123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$QtBFg789v67bzts7.ikiIuVKGvNpB3rdkRi7Now0Lh.D23b61GvIe', 'deniershellyOwO', 'shelldenier@aol.com');

#Create the restaurant for: deniershell
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 190, 'washington', 18222, 29, 410);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(190, 'ri', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(190, 4, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(190, 8, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr2', 190, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 190, 8, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 190, 8, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(190, 65, '2019-04-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(190, 65, '2019-03-12');

/*-----------------------------------------------------------------------------*/

#User with the ID: 191
#Unhashed Password: birdsbear
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$GJZ8VrXi8Q20meJmh5Uou.gHk12zrbNP4tx7fP89hHDhAjEal3K6.', 'deniershell', 'shelldenier@hotmail.com');

#Create the restaurant for: deniershell
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 191, 'faro', 3582, 14, 173);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(191, 'fl', 7);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(191, 9, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(191, 2, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 191, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 191, 1, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 191, 1, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(191, 176, '2019-03-6');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(191, 176, '2019-05-5');

/*-----------------------------------------------------------------------------*/

#User with the ID: 192
#Unhashed Password: linuxuserlamp
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$992c.B6YZwzZvu3zL1BN2ur4NtnmdyPE50WxgJxHH9Icd8FKCMIFu', 'chargergamer', 'gamercharger@hotmail.com');

#Create the restaurant for: chargergamer
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 192, 'arcos', 20011, 62, 849);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(192, 'sh', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(192, 2, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(192, 9, 'no');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 192, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 192, 2, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 192, 2, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(192, 13, '2019-07-10');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(192, 13, '2019-03-17');

/*-----------------------------------------------------------------------------*/

#User with the ID: 193
#Unhashed Password: linuxuser123
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$AW7vXWoQFbHswJZhGDPMreUZoWPC8Puu8db/56m0U/2bll/YUZc/2', 'trivagoblyethurvina', 'blyettrivago@hotmail.com');

#Create the restaurant for: trivagoblyet
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 193, 'faro', 14649, 99, 770);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(193, 'pa', 5);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(193, 2, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(193, 9, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'cu_ch', 193, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 193, 5, 3);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 193, 5, 4);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(193, 56, '2019-07-12');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(193, 56, '2019-05-7');

/*-----------------------------------------------------------------------------*/

#User with the ID: 194
#Unhashed Password: plodpass
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$4PBZZP8LImZMTAoTkb7tlOUpLYHnFHytL7QqqEoG9.KfOh.77yboy', 'denierrouter', 'routerdenier@hotmail.com');

#Create the restaurant for: denierrouter
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 194, 'arcos', 21613, 14, 77);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(194, 'tu', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(194, 0, 'ch_ca');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(194, 2, 'sh_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 194, 3);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 194, 12, 0);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 194, 12, 1);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(194, 85, '2019-02-17');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(194, 85, '2019-00-16');

/*-----------------------------------------------------------------------------*/

#User with the ID: 195
#Unhashed Password: lettuceburst
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$CrUUfQ.S4HhVggPl7cEXz.h9U1M/hUB8Do8Epg45iDxKtbLqg5OOS', 'projektnoodles', 'noodlesprojekt@hotmail.com');

#Create the restaurant for: projektnoodles
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 195, 'berlin', 17088, 96, 5);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(195, 'co', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(195, 2, 'sh_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(195, 7, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 195, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 195, 11, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 195, 11, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(195, 97, '2019-00-16');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(195, 97, '2019-05-6');

/*-----------------------------------------------------------------------------*/

#User with the ID: 196
#Unhashed Password: wowrkmybirthday
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$4vAe8xFymFxslfPGTSNFEejCLGtHNXbqKaX49O36JFs41iGMo35vu', 'gamernoodles', 'noodlesgamer@yandex.com');

#Create the restaurant for: gamernoodles
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 196, 'berlin', 5670, 56, 143);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(196, 'ol_oi', 3);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(196, 4, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(196, 6, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 196, 1);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 196, 0, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 196, 0, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(196, 95, '2019-06-7');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(196, 95, '2019-04-0');

/*-----------------------------------------------------------------------------*/

#User with the ID: 197
#Unhashed Password: harmPassword
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$7HX.XqwcRSwrMAM7LgY3fe7X8rFg5F80JPv8RYbAO/y56EL4H7c4y', 'cartragereward', 'rewardcartrage@yandex.com');

#Create the restaurant for: cartragereward
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 197, 'lisboa', 22223, 1, 4);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(197, 'sh', 0);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(197, 6, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(197, 0, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 197, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 197, 13, 4);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 197, 13, 5);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(197, 181, '2019-03-2');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(197, 181, '2019-09-12');

/*-----------------------------------------------------------------------------*/

#User with the ID: 198
#Unhashed Password: birdsburst
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$WRMOF353DQRg62GKFHRXG.Y1nxHJpRC0vBbCy255ecehHP6GHYYg6', 'simplemichael', 'michaelsimple@yandex.com');

#Create the restaurant for: simplemichael
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 198, 'porto', 4711, 15, 185);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(198, 'sh', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(198, 0, 'no');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(198, 5, 'ch_pi');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'ch_ba', 198, 9);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 198, 0, 6);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 198, 0, 7);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(198, 61, '2019-03-15');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(198, 61, '2019-02-9');

/*-----------------------------------------------------------------------------*/

#User with the ID: 199
#Unhashed Password: notApasslinuxuser
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$WIlL/sWrmrADkIKDdVieQOiiELhqXuhH5p76AUzwYd735ZmRUJiFW', 'projektsauce', 'sauceprojekt@yandex.com');

#Create the restaurant for: projektsauce
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 199, 'berlin', 28936, 4, 9);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(199, 'tu', 2);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(199, 1, 'ch_pi');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(199, 3, 'tu_su');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'mi_po', 199, 8);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 199, 11, 2);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 199, 11, 3);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(199, 189, '2019-02-10');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(199, 189, '2019-06-2');

/*-----------------------------------------------------------------------------*/

#User with the ID: 200
#Unhashed Password: cuteadmin
INSERT INTO users(user_password, user_name, user_email)
VALUES('$2b$10$0ES.e9.srAmwBVbGpou3cezE6qcIympM2nNofRmD7WCLIYjHkInQO', 'awperweeb', 'weebawper@yahoo.com');

#Create the restaurant for: awperweeb
INSERT INTO restaurant(user_id, res_name, res_money, res_level, res_exp)
VALUES( 200, 'faro', 21556, 4, 9);

#Insert some ingredients into the user inventory
INSERT INTO ingredients_inventory(user_id, ingredient_id, ingredient_amount)
VALUES(200, 'fl', 10);

#Insert random dishes
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(200, 9, 'tu_su');
#Insert another random dish
INSERT INTO dishes_inventory(user_id, dishes_amount, dish_id)
VALUES(200, 9, 'br_om');

#Insert random furniture item
INSERT INTO dec_in_inventory(item_id, user_id, item_amount)
VALUES( 'an_cr', 200, 5);

#Place a chair
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ch_fr', 200, 13, 5);

#Place a table
INSERT INTO dec_in_restaurant(item_id, user_id, item_x, item_y)
VALUES('ro_ta', 200, 13, 6);

#Add a random friend to the list
INSERT INTO friend_list(user_id, friend_id, friendship_date)
VALUES(200, 69, '2019-02-7');

 #Add random requests
INSERT INTO friend_requests(user_id, other_user_id, sent_date)
VALUES(200, 69, '2019-04-15');

/*-----------------------------------------------------------------------------*/

