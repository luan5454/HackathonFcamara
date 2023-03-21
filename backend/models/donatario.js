const conexao = require("../infraestrutura/conexao");

class Donatario {
  adiciona(donatario, res) {
    const sql = `INSERT INTO donatario SET ?`;

    conexao.query(sql, donatario, (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json({ mensagem: `Cadastro foi criado com sucesso` });
      }
    });
  }

  lista(res) {
    const sql = `SELECT * FROM donatario`;

    conexao.query(sql, (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(results);
      }
    });
  }

  buscaPorIdEscola(id, res) {
    const sql = `SELECT * FROM donatario AS d 
        INNER JOIN lista AS l ON l.id_donatario = d.id_donatario
        INNER JOIN escola AS e ON d.escola_donatario = e.id_escola
        WHERE e.id_escola = ${id}`;

    conexao.query(sql, (error, results) => {
      const donatarios = results;

      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(donatarios);
        //res.render('cards_alunos.html', {donatarios: donatarios} )
      }
    });
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM donatario AS d INNER JOIN escola AS e ON d.escola_donatario = e.id_escola
        WHERE id_donatario = ${id}`;

    conexao.query(sql, (error, results) => {
      const donatario = results;

      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(donatario);
      }
    });
  }

  buscaLista(id, res) {
    const sql = `SELECT kit.nome, kit.itens, kitsPedido.id, kitsPedido.status_item, lista.tipo FROM donatario 
        INNER JOIN lista ON donatario.id_donatario = lista.id_donatario
        INNER JOIN kitsPedido ON kitsPedido.id_lista = lista.id_lista
        INNER JOIN kit ON kit.id_kit = kitsPedido.id_kit
        WHERE donatario.id_donatario = ${id}`;

    conexao.query(sql, (error, results) => {
      const lista = results;

      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(lista);
      }
    });
  }
}

module.exports = new Donatario();
