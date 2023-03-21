const conexao = require("../infraestrutura/conexao");

class Mensagem {
  adiciona(mensagemUsuario, res) {
    const sql = `INSERT INTO fale_conosco SET ?`;

    conexao.query(sql, mensagemUsuario, (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json({ mensagem: `Mensagem enviada com sucesso!` });
      }
    });
  }
}

module.exports = new Mensagem();
