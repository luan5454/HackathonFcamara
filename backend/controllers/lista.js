const Lista = require("../models/lista");

module.exports = (app) => {
  app.patch("/kit/:id/status", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    Lista.altera(id, valores, res);
  });
};
