function mudaStatusKit() {
  const botaoSubmit = document.querySelector("#botao-agendar");
  botaoSubmit.addEventListener("click", async (event) => {
    event.preventDefault();

    const id_aluno = sessionStorage.getItem("id_aluno");
    console.log(id_aluno);

    const data = document.querySelector("#data").value;
    const hora = document.querySelector("#hora").value;
    const cep = document.querySelector("#cep").value;
    const endereco = document.querySelector("#endereco").value;
    const numero = document.querySelector("#numero").value;
    const complemento = document.querySelector("#complemento").value;
    const bairro = document.querySelector("#bairro").value;
    const cidade = document.querySelector("#cidade").value;
    const uf = document.querySelector("#uf").value;
    const nome = document.querySelector("#nome").value;
    const cpf = document.querySelector("#cpf").value;
    const telefone = document.querySelector("#telefone").value;
    const email = document.querySelector("#email").value;
    const donatario = id_aluno;

    const doador = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
      cep: cep,
      endereco: endereco,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      uf: uf,
      donatario: donatario,
      data_agendada: data,
      horario_agendado: hora,
    };

    axios
      .post("http://localhost:3333/doadores", doador)
      .then((response) => console.log(response.data.mensagem))
      .catch((error) => console.log(error));

    const resposta = await axios.get(`http://localhost:3333/doadores/last`);
    const resultado = await resposta.data[0]["LAST_INSERT_ID()"];

    console.log(resultado);

    function getValues() {
      var kitsSelecionados = document.querySelectorAll("[name=kit]:checked");
      var values = [];
      for (var i = 0; i < kitsSelecionados.length; i++) {
        values.push(kitsSelecionados[i].value);
      }
      return values;
    }

    const ids = getValues();

    ids.map((id) => {
      const valores = { status_item: "Agendado", id_doador: resultado };
      axios
        .patch(`http://localhost:3333/kit/${id}/status`, valores)
        .then((response) => criarAlerta(response.data))
        .catch((error) => console.log(error));

      const criarAlerta = () => {
        const alerta = document.querySelector("#mensagem");
        alerta.setAttribute("class", "alert alert-success");
        alerta.setAttribute("role", "alert");

        alerta.innerHTML = `
                <strong>Doação agendada com sucesso!</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> 
                <p id="sub-btn">
                Obrigado por chegar até aqui. Para ajudá-lo(a) enviaremos os itens da doação
                para o seu e-mail bem como a data e hora do agendamento.
                </p>`;
      };
    });
  });
}

mudaStatusKit();
