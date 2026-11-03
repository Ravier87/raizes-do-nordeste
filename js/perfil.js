/* ===================== CONTA ATIVA ===================== */

const emailUsuario = (
    localStorage.getItem("usuarioLogado") || ""
).trim().toLowerCase();

const clientes = JSON.parse(
    localStorage.getItem("clientesDemo")
) || [];

const clientePerfil = clientes.find(
    cliente => cliente.email.trim().toLowerCase() === emailUsuario
);

// Verifica se existe uma conta válida para acessar o perfil.
if (!emailUsuario || !clientePerfil) {
    localStorage.removeItem("usuarioLogado");
    window.location.replace("login.html");
} else {

// Cada conta terá sua própria chave de dados.
const chavePontos = `pontosFidelidade_${emailUsuario}`;
const chavePedido = `pedidoAtual_${emailUsuario}`;

const nomeBoasVindas = document.getElementById("perfil-nome");
const nomeCompleto = document.getElementById("perfil-nome-completo");
const emailPerfil = document.getElementById("perfil-email");
const telefonePerfil = document.getElementById("perfil-telefone");
const mensagemSemCadastro = document.getElementById("perfil-sem-cadastro");

if (clientePerfil) {
    nomeBoasVindas.textContent = clientePerfil.nome.split(" ")[0];
    nomeCompleto.textContent = clientePerfil.nome;
    emailPerfil.textContent = clientePerfil.email;
    telefonePerfil.textContent = clientePerfil.telefone;
} else {
    nomeBoasVindas.textContent = "visitante";
    nomeCompleto.textContent = "Não informado";
    emailPerfil.textContent = "Não informado";
    telefonePerfil.textContent = "Não informado";
    mensagemSemCadastro.hidden = false;
}

/* ===================== ÚLTIMO PEDIDO ===================== */

const pedidoPerfil = emailUsuario
    ? JSON.parse(localStorage.getItem(chavePedido))
    : null;

const detalhesPedido = document.getElementById("perfil-detalhes-pedido");
const mensagemSemPedido = document.getElementById("perfil-sem-pedido");

if (pedidoPerfil) {
    document.getElementById("perfil-numero-pedido").textContent =
        "#" + pedidoPerfil.numero;

    document.getElementById("perfil-total-pedido").textContent =
        Number(pedidoPerfil.total).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    document.getElementById("perfil-recebimento").textContent =
        pedidoPerfil.tipoRecebimento === "entrega"
            ? "Entrega"
            : "Retirada no local";

    const formasPagamento = {
        pix: "PIX",
        cartao: "Cartão"
    };

    document.getElementById("perfil-pagamento").textContent =
        formasPagamento[pedidoPerfil.formaPagamento] || "Não informado";

    document.getElementById("perfil-status").textContent =
        pedidoPerfil.status || "Pedido recebido";

    detalhesPedido.hidden = false;
} else {
    mensagemSemPedido.hidden = false;
}

/* ===================== ACOMPANHAR PEDIDO ===================== */

const botaoAcompanhar = document.getElementById(
    "perfil-acompanhar-pedido"
);

botaoAcompanhar.addEventListener("click", function () {
    window.location.href = "acompanhar-pedido.html";
});

/* ===================== SAIR DA CONTA ===================== */

const botaoSair = document.getElementById("perfil-sair");

botaoSair.addEventListener("click", function () {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
});

/* ===================== PROGRAMA DE FIDELIDADE ===================== */

const pontosTotais = emailUsuario
    ? Number(localStorage.getItem(chavePontos)) || 0
    : 0;

const metaFidelidade = 200;

const elementoPontos = document.getElementById("pontos-fidelidade");
const textoProgresso = document.getElementById("texto-progresso");
const barraProgresso = document.getElementById("barra-progresso");
const preenchimentoProgresso = document.getElementById(
    "preenchimento-progresso"
);
const pontosRestantes = document.getElementById("pontos-restantes");

// Mostra o saldo total da conta ativa.
elementoPontos.textContent =
    `${pontosTotais} ${pontosTotais === 1 ? "ponto" : "pontos"}`;

// Calcula quantas recompensas foram desbloqueadas.
const recompensasDesbloqueadas = Math.floor(
    pontosTotais / metaFidelidade
);

// Calcula o progresso em direção à próxima recompensa.
const pontosNaMeta = pontosTotais % metaFidelidade;
const percentualProgresso =
    (pontosNaMeta / metaFidelidade) * 100;
const faltamPontos = metaFidelidade - pontosNaMeta;

textoProgresso.textContent =
    `${pontosNaMeta} / ${metaFidelidade} pontos`;

preenchimentoProgresso.style.width = `${percentualProgresso}%`;
barraProgresso.setAttribute("aria-valuenow", pontosNaMeta);

if (recompensasDesbloqueadas > 0) {
    pontosRestantes.textContent =
        `Parabéns! Você desbloqueou ${recompensasDesbloqueadas} ` +
        `${recompensasDesbloqueadas === 1
            ? "recompensa demonstrativa"
            : "recompensas demonstrativas"}! ` +
        `Faltam ${faltamPontos} pontos para a próxima recompensa.`;
} else {
    pontosRestantes.textContent =
        `Faltam ${faltamPontos} pontos para atingir a meta.`;
}

}