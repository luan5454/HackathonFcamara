const Mensagem = require("../models/faq");

module.exports = (app) => {
  app.post("/mensagens", (req, res) => {
    const mensagemUsuario = req.body;
    //console.log(donatario)

    Mensagem.adiciona(mensagemUsuario, res);
  });
};
