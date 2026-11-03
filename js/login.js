const formularioLogin = document.getElementById("form-login");
const mensagemLogin = document.getElementById("mensagem-login");

formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const emailInformado = document
        .getElementById("email-login")
        .value
        .trim()
        .toLowerCase();

    const senhaInformada = document
        .getElementById("senha-login")
        .value;

    // Recupera todas as contas cadastradas.
    const clientes = JSON.parse(
        localStorage.getItem("clientesDemo")
    ) || [];

    // Procura a conta pelo e-mail informado.
    const clienteEncontrado = clientes.find(
        cliente =>
            cliente.email.trim().toLowerCase() === emailInformado
    );

    if (!clienteEncontrado) {
        mensagemLogin.textContent =
            "E-mail não encontrado. Confira os dados ou crie uma conta.";
        return;
    }

    if (!senhaInformada) {
        mensagemLogin.textContent = "Informe sua senha.";
        return;
    }

    // Login demonstrativo: a senha não é autenticada de verdade.
    localStorage.setItem("usuarioLogado", clienteEncontrado.email);

    window.location.href = "index.html";
});
