export default function criaLista(nome, itens, id, status) {
  if (`${status}` == "Pendente") {
    const opcoesKits = document.querySelector(".form-lista");

    const check = document.createElement("div");
    check.setAttribute("class", "form-check");
    check.setAttribute("id", `${id}`);

    check.innerHTML = `
        <input class="form-check-input" type="checkbox" value="${id}" name="kit">
        <label class="form-check-label">
            <p class='kit-lista'>
                ${nome} - ${itens}
            </p>
        </label>
        `;
    opcoesKits.appendChild(check);
  } else {
    const opcoesKits = document.querySelector(".form-lista");

    const check = document.createElement("div");
    check.setAttribute("class", "form-check");
    check.setAttribute("id", `${id}`);

    check.innerHTML = `
        <input class="form-check-input" type="checkbox" value="${id}" name="id" disabled>
        <label class="form-check-label">
            <p class='kit-lista'>
                <s>${nome} - ${itens}</s>
            </p>
        </label>
        `;

    opcoesKits.appendChild(check);
  }
}
