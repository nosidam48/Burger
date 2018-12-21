// Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 8889,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-01.cleardb.net',
  user     : 'b3e394f661c85b',
  password : '0d221778',
  database : 'heroku_21ebb01b5547d53'
});

connection.connect();



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// Export connection for our ORM to use.
module.exports = connection;