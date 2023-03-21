const Donatario = require("../models/donatario");

module.exports = (app) => {
  app.get("/donatarios", (req, res) => {
    Donatario.lista(res);
  });

  app.post("/donatarios", (req, res) => {
    const donatario = req.body;
    //console.log(donatario)

    Donatario.adiciona(donatario, res);
  });

  app.get("/donatarios/escola/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Donatario.buscaPorIdEscola(id, res);
  });

  app.get("/donatarios/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Donatario.buscaPorId(id, res);
  });

  app.get("/donatarios/:id/lista", (req, res) => {
    const id = parseInt(req.params.id);

    Donatario.buscaLista(id, res);
  });
};
