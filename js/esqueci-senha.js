const formularioRecuperacao =
    document.getElementById("form-recuperacao");

const mensagemRecuperacao =
    document.getElementById("mensagem-recuperacao");

formularioRecuperacao.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const email = document
        .getElementById("email-recuperacao")
        .value
        .trim()
        .toLowerCase();

    const clientes = JSON.parse(
    localStorage.getItem("clientesDemo")
) || [];

const clienteEncontrado = clientes.find(
    cliente => cliente.email.trim().toLowerCase() === email
);

    if (
        clienteEncontrado &&
        email === clienteEncontrado.email.toLowerCase()
    ) {
        mensagemRecuperacao.textContent =
            "E-mail localizado! A recuperação de senha é apenas demonstrativa neste projeto.";
    } else {
        mensagemRecuperacao.textContent =
            "Não encontramos uma conta demonstrativa com esse e-mail.";
    }
});
