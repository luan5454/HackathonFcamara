function enviarMensagem() {
  const botaoSubmit = document.querySelector("#enviar-mensagem");
  botaoSubmit.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const assunto = document.querySelector("#assunto").value;
    const mensagem = document.querySelector("#mensagem").value;

    const mensagemUsuario = {
      nome: nome,
      email: email,
      assunto: assunto,
      mensagem: mensagem,
    };

    axios
      .post("http://localhost:3333/mensagens", mensagemUsuario)
      .then((response) => alert(response.data.mensagem))
      .catch((error) => console.log(error));

    document.querySelector("#form-contato").reset();
  });
}

enviarMensagem();
