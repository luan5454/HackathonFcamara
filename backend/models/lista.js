const conexao = require("../infraestrutura/conexao");

class Lista {
  altera(id, valores, res) {
    const sql = `UPDATE kitsPedido SET ? WHERE id = ${id} `;

    conexao.query(sql, valores, (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json({ mensagem: `Status alterado com sucesso.` });
      }
    });
  }
}

module.exports = new Lista();
