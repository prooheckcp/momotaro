const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysqlmomotaro.mysql.database.azure.com',
    user: 'prooheckcp@mysqlmomotaro',
    database: 'momotaro',
    password: 'Gatoderp12',
    port: 3306,
    ssl : true
  });

  connection.connect((err)=>{
      
    if (err){
        console.log(err);
    };

    console.log('database.js : Database: "momotaro" has been conected! ')



  });

  module.exports = connection;