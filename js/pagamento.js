/* ===================== TOTAL DO PAGAMENTO ===================== */

const totalPagamento = document.getElementById("total-pagamento");

const totalSalvo = Number(
    localStorage.getItem("totalPedido")
) || 0;

if (totalPagamento) {
    totalPagamento.textContent = totalSalvo.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


/* ===================== FORMA DE PAGAMENTO ===================== */

const opcoesPagamento = document.querySelectorAll(
    'input[name="formaPagamento"]'
);

const dadosCartao = document.getElementById("dados-cartao");

function atualizarFormaPagamento() {
    const selecionada = document.querySelector(
        'input[name="formaPagamento"]:checked'
    );

    if (dadosCartao) {
        dadosCartao.style.display =
            selecionada && selecionada.value === "cartao"
                ? "block"
                : "none";
    }
}

opcoesPagamento.forEach(opcao => {
    opcao.addEventListener("change", atualizarFormaPagamento);
});

// Ajusta a exibição inicial conforme a opção selecionada
atualizarFormaPagamento();


/* ===================== CONFIRMAR PAGAMENTO ===================== */

const botaoConfirmar = document.getElementById("confirmar-pagamento");

if (botaoConfirmar) {
    botaoConfirmar.addEventListener("click", () => {

        // Verifica se existe uma conta conectada
        const emailUsuario = (
            localStorage.getItem("usuarioLogado") || ""
        ).trim().toLowerCase();

        if (!emailUsuario) {
            alert("Faça login para concluir seu pedido.");
            window.location.href = "login.html";
            return;
        }

        const formaSelecionada = document.querySelector(
            'input[name="formaPagamento"]:checked'
        );

        if (!formaSelecionada) {
            alert("Selecione uma forma de pagamento.");
            return;
        }

        // Validação dos campos do cartão
        if (formaSelecionada.value === "cartao") {
            const numeroCartao =
                document.getElementById("numero-cartao").value.trim();

            const nomeCartao =
                document.getElementById("nome-cartao").value.trim();

            const validade =
                document.getElementById("validade-cartao").value.trim();

            const cvv =
                document.getElementById("cvv").value.trim();

            if (!numeroCartao || !nomeCartao || !validade || !cvv) {
                alert("Preencha todos os dados do cartão.");
                return;
            }
        }

        // Recupera os dados salvos
        const produtosCarrinho =
            JSON.parse(localStorage.getItem("carrinho")) || [];

        const totalPedido =
            Number(localStorage.getItem("totalPedido")) || 0;

        const tipoRecebimento =
            localStorage.getItem("tipoPedido") || "retirada";

        const enderecoEntrega =
            JSON.parse(localStorage.getItem("enderecoEntrega")) || null;

        // Gera um número para este pedido
        const numeroPedido =
            "RN" + Date.now().toString().slice(-8);

        // Monta o pedido
        const pedido = {
            numero: numeroPedido,
            emailCliente: emailUsuario,
            produtos: produtosCarrinho,
            total: totalPedido,
            tipoRecebimento: tipoRecebimento,
            enderecoEntrega: enderecoEntrega,
            formaPagamento: formaSelecionada.value,
            status: "Pedido recebido",
            data: new Date().toISOString()
        };

        // Salva o pedido vinculado à conta conectada
        const chavePedido = `pedidoAtual_${emailUsuario}`;

        localStorage.setItem(
            chavePedido,
            JSON.stringify(pedido)
        );

        // Mantém também a chave antiga para compatibilidade temporária
        localStorage.setItem("pedidoAtual", JSON.stringify(pedido));

        // Abre a confirmação
        window.location.href = "pedido-confirmado.html";
    });
}
