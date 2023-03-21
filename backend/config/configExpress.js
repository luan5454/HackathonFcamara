const express = require("express");
const consign = require("consign");
const cors = require("cors");

module.exports = () => {
  const app = express();

  app.use(cors());
  app.use(express.urlencoded());
  app.use(express.json());

  app.set("view engine", "ejs");
  app.set("views", "../frontend/v2");
  app.engine("html", require("ejs").renderFile);

  consign() //irá agrupar todas as rotas criadas dentro do app
    .include("controllers")
    .into(app);

  return app;
};
