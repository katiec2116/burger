var mysql = require("mysql");


var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection = mysql.createConnection({
  host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ph72yamab7c6har0",
  password: "wnpxni1hjx7n2c9p",
  database: "uakgvxjfzu73m32k"
  });
};

// = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "rootroot",
//   database: "burgers_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;