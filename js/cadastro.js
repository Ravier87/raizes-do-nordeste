const formulario = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem-cadastro");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha =
        document.getElementById("confirmar-senha").value;

    if (senha !== confirmarSenha) {
        mensagem.textContent = "As senhas não coincidem.";
        return;
    }

    if (senha.length < 8) {
        mensagem.textContent =
            "A senha deve ter pelo menos 8 caracteres.";
        return;
    }

    // Recupera os cadastros já existentes.
    const clientes = JSON.parse(
        localStorage.getItem("clientesDemo")
    ) || [];

    // Impede duplicidade de e-mail.
    const emailExistente = clientes.some(
        cliente => cliente.email === email
    );

    if (emailExistente) {
        mensagem.textContent =
            "Este e-mail já está cadastrado. Entre na sua conta.";
        return;
    }

    // Cria o cadastro demonstrativo.
    const cliente = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    clientes.push(cliente);

    localStorage.setItem(
        "clientesDemo",
        JSON.stringify(clientes)
    );

    // Define qual conta está sendo usada nesta sessão.
    localStorage.setItem("usuarioLogado", email);

    mensagem.textContent =
        "Cadastro realizado! Indo para o perfil...";

    setTimeout(() => {
        window.location.href = "perfil.html";
    }, 1000);
});

