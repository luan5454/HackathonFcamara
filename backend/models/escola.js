const conexao = require("../infraestrutura/conexao");

class Escola {
  adiciona(escola, res) {
    const sql = `INSERT INTO escola SET ?`;

    conexao.query(sql, escola, (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json({ mensagem: `Cadastro foi criado com sucesso` });
      }
    });
  }

  lista(res) {
    const sql = `SELECT * FROM escola`;

    conexao.query(sql, (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(results);
      }
    });
  }

  buscaPorLocalidade(valores, res) {
    const uf = valores.uf;
    const cidade = valores.cidade;
    console.log(uf, cidade);

    const sql = `SELECT * FROM escola WHERE uf = '${uf}' AND cidade = '${cidade}'`;

    conexao.query(sql, (error, results) => {
      const escolas = results;

      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(escolas);
      }
    });
  }
}

module.exports = new Escola();
