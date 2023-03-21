import criaCard from "./criaCard.js";
import criaElemento from "./escola-sem-alunos.js";

async function getDonatarios(id_escola) {
  const resposta = await axios.get(
    `http://localhost:3333/donatarios/escola/${id_escola}`
  );
  const resultado = await resposta.data;
  return resultado;
}

async function getAlunosPorEscola() {
  const id_escola = sessionStorage.getItem("id_escola");

  const resultado = await getDonatarios(id_escola);

  if (resultado.length == 0) {
    criaElemento();
  }

  resultado.map((aluno) =>
    criaCard(
      aluno.avatar,
      aluno.nome_escola,
      aluno.segmento_ensino,
      aluno.serie_ensino,
      aluno.cidade,
      aluno.uf,
      aluno.sonho_profissao,
      aluno.id_donatario,
      aluno.tipo
    )
  );

  const buttonsAluno = document.querySelectorAll(".button-aluno");

  buttonsAluno.forEach((button) =>
    button.addEventListener("click", () => {
      sessionStorage.setItem("id_aluno", button.id);
    })
  );
}

getAlunosPorEscola();

const buttons = document.querySelectorAll(".tipo_doacao");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    filtra(button.value);
  })
);

function filtra(valor) {
  const cards = document.querySelectorAll(".default");

  for (let i = 0; i < cards.length; i++) {
    if (valor == cards[i].classList[0]) {
      cards[i].style = "display: inline-block";
    } else if (valor == "") {
      cards[i].style = "display: inline-block";
    } else {
      cards[i].style = "display: none";
    }
  }
}
