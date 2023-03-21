function getEscolas() {
  const botaoSubmit = document.querySelector("#localidade");
  botaoSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    const uf = document.querySelector("#uf").value;
    const cidade = document.querySelector("#cidade").value;

    const valores = { uf: uf, cidade: cidade };

    axios
      .post("http://localhost:3333/escolas/localidade", valores)
      .then((response) => criarListaEscolas(response.data))
      .catch((error) => console.log(error));

    const criarListaEscolas = (escolas) => {
      const opcoesEscolas = document.querySelector("#form-escolas");

      const tituloEscola = document.createElement("h4");
      tituloEscola.setAttribute("class", "py-3");
      tituloEscola.innerHTML = "Escolas Cadastradas nesse município";

      opcoesEscolas.appendChild(tituloEscola);

      escolas.map((escola) => {
        const checkEscola = document.createElement("input");
        checkEscola.setAttribute("type", "radio");
        checkEscola.setAttribute("class", "form-check-input py-3");
        checkEscola.setAttribute("value", `${escola.id_escola}`);
        checkEscola.setAttribute("name", `id`);
        checkEscola.setAttribute("id", `${escola.id_escola}`);

        const labelEscola = document.createElement("label");
        labelEscola.setAttribute("class", "form-check-label");
        labelEscola.setAttribute("for", `id_escola`);
        labelEscola.innerHTML = `   ${escola.nome_escola} - 
                Rede ${escola.rede} - 
                Endereço: ${escola.logradouro}, ${escola.complemento} - ${escola.bairro}`;

        const groupEscolas = document.createElement("div");
        groupEscolas.setAttribute("class", "form-group py-3");

        groupEscolas.appendChild(checkEscola);
        groupEscolas.appendChild(labelEscola);

        opcoesEscolas.appendChild(groupEscolas);
      });

      const botaoBuscarAlunos = document.querySelector("#busca-alunos");

      botaoBuscarAlunos.addEventListener("click", (event) => {
        const checked = document.querySelector('input[name="id"]:checked')
          .value;
        sessionStorage.setItem("id_escola", checked);
      });
    };
  });
}

getEscolas();
