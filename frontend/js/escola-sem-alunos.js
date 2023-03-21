export default function criaElemento() {
  const conjCard = document.querySelector(".card-columns");
  conjCard.setAttribute("class", "mx-auto");

  const card = document.createElement("div");
  card.setAttribute("class", `card text-center my-3`);

  card.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">Ainda não há alunos cadastrados para essa escola.</h5>
    </div>
    `;
  conjCard.append(card);
}
