import criaLista from "./criaLista.js";

async function dadosAluno() {
  const id_aluno = sessionStorage.getItem("id_aluno");

  const resposta = await axios.get(
    `http://localhost:3333/donatarios/${id_aluno}`
  );
  const resultado = await resposta.data;

  function renderDadosAluno(resultado) {
    const avatarAluno = document.querySelector("#avatar-aluno");
    avatarAluno.innerHTML = `<img src="../imgs/${resultado.avatar}" class="rounded-circle"  alt="Avatar aluno responsiva">`;

    const escolaAluno = document.querySelector("#escola-aluno");
    escolaAluno.innerHTML = `${resultado.nome_escola}`;

    const nivelAluno = document.querySelector("#nivel-aluno");
    nivelAluno.innerHTML = `${resultado.segmento_ensino}, ${resultado.serie_ensino} ano`;

    const localidadeAluno = document.querySelector("#localidade-aluno");
    localidadeAluno.innerHTML = `Município: ${resultado.cidade}, UF: ${resultado.uf} `;

    const sonhoAluno = document.querySelector("#sonho-aluno");
    sonhoAluno.innerHTML = resultado.sonho_profissao;
  }

  renderDadosAluno(resultado[0]);

  async function listaAluno() {
    const id_aluno = sessionStorage.getItem("id_aluno");

    const resposta = await axios.get(
      `http://localhost:3333/donatarios/${id_aluno}/lista`
    );
    const resultado = await resposta.data;

    resultado.map((lista) =>
      criaLista(lista.nome, lista.itens, lista.id, lista.status_item)
    );
  }
  listaAluno();

  const id_escola = sessionStorage.getItem("id_escola");
  const botaoAnterior = document.querySelector("#anterior");
  botaoAnterior.setAttribute(
    "href",
    `http://127.0.0.1:5500/frontend/v2/html/cards_alunos.html?id=${id_escola}`
  );
}

dadosAluno();
