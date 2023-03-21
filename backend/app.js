const configExpress = require("./config/configExpress");
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");

conexao.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Conectado ao BD com sucesso");

    Tabelas.init(conexao);
    const app = configExpress();

    app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
  }
});
