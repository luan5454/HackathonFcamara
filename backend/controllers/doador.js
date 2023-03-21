const Doador = require("../models/doador");

module.exports = (app) => {
  app.post("/doadores", (req, res) => {
    const doador = req.body;

    Doador.adiciona(doador, res);
  });

  app.get("/doadores", (req, res) => {
    Doador.lista(res);
  });

  app.get("/doadores/last", (req, res) => {
    Doador.idLastInsert(res);
  });
};
