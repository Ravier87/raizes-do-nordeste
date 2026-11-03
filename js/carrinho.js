
// ===================== CARRINHO =====================

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const listaCarrinho = document.getElementById("lista-carrinho");
const valorTotal = document.getElementById("valor-total");

// ===================== EXIBIR ITENS =====================

function mostrarCarrinho() {

    if (!listaCarrinho || !valorTotal) return;

    listaCarrinho.innerHTML = "";

    let total = 0;

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }

    carrinho.forEach(produto => {

        total += produto.preco * produto.quantidade;

        let detalhes = "";

        // Exibe os componentes dos combos
        if (produto.tipoItem === "combo" && produto.componentes) {

            detalhes = `
                <p class="componentes-combo">
                    Inclui: ${produto.componentes.map(item => item.nome).join(" + ")}
                </p>
            `;
        }

        // Exibe preço original e promocional
        let precoExibicao = "";

        if (produto.precoOriginal !== undefined) {

            precoExibicao = `
                <p>
                    <del>R$ ${produto.precoOriginal.toFixed(2)}</del>
                    <strong>R$ ${produto.preco.toFixed(2)}</strong>
                </p>
            `;

        } else {

            precoExibicao = `
                <p>R$ ${produto.preco.toFixed(2)}</p>
            `;

        }

        listaCarrinho.innerHTML += `
            <div class="item-carrinho">

                <img src="${produto.imagem}" alt="${produto.nome}">

                <div class="info-produto">

                    <h3>${produto.nome}</h3>

                    ${detalhes}

                    ${precoExibicao}

                    <div class="controle-quantidade">

                        <button class="menos" data-id="${produto.id}">−</button>

                        <span>${produto.quantidade}</span>

                        <button class="mais" data-id="${produto.id}">+</button>

                    </div>

                </div>

            </div>
        `;

    });

    valorTotal.textContent = `R$ ${total.toFixed(2)}`;

    localStorage.setItem("totalPedido", total.toFixed(2));

    configurarQuantidade();
}

// ===================== CONTROLES DE QUANTIDADE =====================

function configurarQuantidade() {

    document.querySelectorAll(".mais").forEach(botao => {
        botao.addEventListener("click", () => {
            alterarQuantidade(botao.dataset.id, 1);
        });
    });

    document.querySelectorAll(".menos").forEach(botao => {
        botao.addEventListener("click", () => {
            alterarQuantidade(botao.dataset.id, -1);
        });
    });

}

function alterarQuantidade(id, valor) {

    const produto = carrinho.find(
        item => String(item.id) === String(id)
    );

    if (!produto) return;

    produto.quantidade += valor;

    if (produto.quantidade <= 0) {

        const indice = carrinho.findIndex(
            item => String(item.id) === String(id)
        );

        carrinho.splice(indice, 1);

    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}

// Exibe o carrinho ao abrir a página
mostrarCarrinho();


// ===================== TIPO DE PEDIDO =====================

const opcoesPedido = document.querySelectorAll(
    'input[name="tipoPedido"]'
);

const formularioEndereco =
    document.getElementById("formulario-endereco");


// Esconde o formulário inicialmente
if (formularioEndereco) {

    formularioEndereco.style.display = "none";

}


// Verifica quando o usuário troca entre retirada e entrega
opcoesPedido.forEach(opcao => {

    opcao.addEventListener("change", () => {

        if (opcao.value === "entrega" && opcao.checked) {

            formularioEndereco.style.display = "block";

        } else if (opcao.value === "retirada" && opcao.checked) {

            formularioEndereco.style.display = "none";

        }

    });

}); 

// ===================== VALIDAÇÃO DO PEDIDO =====================

const botaoPagamento =
    document.getElementById("ir-pagamento");


if (botaoPagamento) {

    botaoPagamento.addEventListener("click", () => {

        const tipoPedido =
            document.querySelector(
                'input[name="tipoPedido"]:checked'
            );


        // Verifica se existe uma opção selecionada
        if (!tipoPedido) {

            alert("Selecione como deseja receber o pedido.");

            return;

        }


        // Se for entrega, verifica o endereço
        if (tipoPedido.value === "entrega") {

            const cep =
                document.getElementById("cep").value.trim();

            const rua =
                document.getElementById("rua").value.trim();

            const numero =
                document.getElementById("numero").value.trim();

            const bairro =
                document.getElementById("bairro").value.trim();

            const cidade =
                document.getElementById("cidade").value.trim();


            if (!cep || !rua || !numero || !bairro || !cidade) {

                alert(
                    "Preencha todos os campos obrigatórios do endereço."
                );

                return;

            }

        }


localStorage.setItem("tipoPedido", tipoPedido.value);

if (tipoPedido.value === "entrega") {

    const endereco = {
        cep: document.getElementById("cep").value.trim(),
        rua: document.getElementById("rua").value.trim(),
        numero: document.getElementById("numero").value.trim(),
        complemento: document.getElementById("complemento").value.trim(),
        bairro: document.getElementById("bairro").value.trim(),
        cidade: document.getElementById("cidade").value.trim()
    };

    localStorage.setItem(
        "enderecoEntrega",
        JSON.stringify(endereco)
    );

} else {

    localStorage.removeItem("enderecoEntrega");

}

window.location.href = "pagamento.html";


    });

}