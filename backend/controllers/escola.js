const Escola = require("../models/escola");

module.exports = (app) => {
  app.post("/escolas/localidade", (req, res) => {
    const valores = req.body;
    console.log(valores);

    Escola.buscaPorLocalidade(valores, res);
  });

  app.post("/escolas", (req, res) => {
    const escola = req.body;

    Escola.adiciona(escola, res);
  });

  app.get("/escolas", (req, res) => {
    Escola.lista(res);
  });
};
