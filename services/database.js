const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysqlmomotaro.mysql.database.azure.com',
    user: 'prooheckcp@mysqlmomotaro',
    database: 'momotaro',
    password: 'Gatoderp12',
    port: 3306,
    ssl : {
      // DO NOT DO THIS
      // set up your ca correctly to trust the connection
      rejectUnauthorized: false
    }
  });

  connection.connect((err)=>{
      
    if (err){
        console.log(err);
    };

    console.log('database.js : Database: "momotaro" has been conected! ')



  });

  module.exports = connection;