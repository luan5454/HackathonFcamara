const mysql = require("mysql");

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1523710",
  database: "hackFCamara",
});

module.exports = conexao;
