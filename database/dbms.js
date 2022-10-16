const mysql = require("mysql2");
module.exports = dbms;
const dbms = mysql.createConnection({
  host: process.env.DBMS_HOST,
  user: process.env.DBMS_USER,
  password: process.env.DBMS_PASS,
  port: process.env.DBMS_PORT,
  database: process.env.DBMS,

  // user: "root",
  // password: "kBQ55xQjZyp2N9ttXq6w",
  // host: "containers-us-west-102.railway.app",
  // port: "7127",
  // database: "sewamobil",
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Terhubung ke server");
});
