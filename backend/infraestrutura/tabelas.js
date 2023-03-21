class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarEscola();
    this.criarDonatario();
    this.criarDoador();
    this.criarKit();
    this.criarLista();
    this.criarKitsLista();
    this.criarFaleConosco();
  }

  criarEscola() {
    const sql = `CREATE TABLE IF NOT EXISTS escola(
            id_escola int NOT NULL AUTO_INCREMENT,
            nome_escola VARCHAR(60),
            rede VARCHAR(60),
            cep VARCHAR(8),
            logradouro VARCHAR(50),
            complemento VARCHAR(30),
            bairro VARCHAR(20),
            cidade VARCHAR(30),
            uf VARCHAR(2),
            data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id_escola))`;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela escola criada com sucesso!");
      }
    });
  }

  criarDonatario() {
    const sql = `CREATE TABLE IF NOT EXISTS donatario(
            id_donatario int NOT NULL AUTO_INCREMENT,
            ra_donatario VARCHAR(8),
            nome_donatario VARCHAR(60),
            avatar VARCHAR(200),
            email_responsavel VARCHAR(40),
            telefone_responsavel VARCHAR(11),
            cep VARCHAR(8),
            logradouro VARCHAR(50),
            complemento VARCHAR(30),
            bairro VARCHAR(20),
            cidade VARCHAR(30),
            uf VARCHAR(2),
            escola_donatario int,
            segmento_ensino VARCHAR(30),
            serie_ensino VARCHAR(10),
            sonho_profissao TEXT,
            data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id_donatario),
            FOREIGN KEY (escola_donatario) REFERENCES escola(id_escola))`;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela donatário criada com sucesso!");
      }
    });
  }

  criarDoador() {
    const sql = `CREATE TABLE IF NOT EXISTS doador(
            id_doador int NOT NULL AUTO_INCREMENT,
            nome CHAR(60),
            cpf VARCHAR(20),
            telefone VARCHAR(20),
            email VARCHAR(40),
            cep VARCHAR(15),
            endereco VARCHAR(50),
            numero VARCHAR(5),
            complemento VARCHAR(30),
            bairro VARCHAR(20),
            cidade VARCHAR(30),
            uf VARCHAR(2),
            donatario int,
            data_agendada DATE,
            horario_agendado TIME,
            data_doacao DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id_doador),
            FOREIGN KEY (donatario) REFERENCES donatario(id_donatario))`;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela doador criada com sucesso!");
      }
    });
  }

  criarKit() {
    const sql = `CREATE TABLE IF NOT EXISTS kit(
            id_kit int NOT NULL AUTO_INCREMENT,
            nome VARCHAR(20),
            itens TEXT,
            PRIMARY KEY (id_kit))`;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela kit criada com sucesso!");
      }
    });
  }

  criarLista() {
    const sql = `CREATE TABLE IF NOT EXISTS lista(
            id_lista int NOT NULL AUTO_INCREMENT,
            id_donatario int,
            tipo VARCHAR(20),
            PRIMARY KEY (id_lista),
            FOREIGN KEY (id_donatario) REFERENCES donatario(id_donatario))`;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela lista criada com sucesso!");
      }
    });
  }

  criarKitsLista() {
    const sql = `CREATE TABLE IF NOT EXISTS kitsPedido(
            id int NOT NULL AUTO_INCREMENT,
            id_kit int,
            id_lista int,
            id_doador int,
            status_item VARCHAR(20) NULL DEFAULT 'Pendente',
            PRIMARY KEY (id),
            FOREIGN KEY (id_lista) REFERENCES lista(id_lista),
            FOREIGN KEY (id_kit) REFERENCES kit(id_kit),
            FOREIGN KEY (id_doador) REFERENCES doador(id_doador))`;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela kitsPedido criada com sucesso!");
      }
    });
  }

  criarFaleConosco() {
    const sql = `CREATE TABLE IF NOT EXISTS fale_conosco(
            id int NOT NULL AUTO_INCREMENT,
            nome VARCHAR(50),
            email VARCHAR(30),
            assunto VARCHAR(30),
            mensagem TEXT,
            PRIMARY KEY (id))`;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela fale_conosco criada com sucesso!");
      }
    });
  }
}

module.exports = new Tabelas();
