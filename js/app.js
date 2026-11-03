// ===================== CATEGORIAS =====================

const botoes = document.querySelectorAll(".cat-btn");

// ===================== CARRINHO =====================

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// ===================== LISTA DE PRODUTOS/DESCONTOS =====================

const lista = document.getElementById("lista-produtos");
const listaCombos = document.getElementById("lista-combos");
const listaDescontos = document.getElementById("lista-descontos");

// Função que cria os cards dos produtos

function mostrarProdutos(categoria = "Todos") {

    lista.innerHTML = "";

    // Unidade escolhida pelo usuário
    const unidadeSelecionada =
        localStorage.getItem("unidadeSelecionada") || "Recife";

    // Primeiro filtra os produtos pela unidade
    const produtosDaUnidade = produtos.filter(produto =>
        produto.unidades.includes(unidadeSelecionada)
    );

    // Depois aplica o filtro da categoria
    const filtrados = categoria === "Todos"
        ? produtosDaUnidade
        : produtosDaUnidade.filter(
            produto => produto.categoria === categoria
        );
    filtrados.forEach(produto => {

        lista.innerHTML += `
            <div class="card-produto">
                <img src="${produto.imagem}" alt="${produto.nome}">

                <div class="info-produto">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <span>R$ ${produto.preco.toFixed(2)}</span>
                </div>

                <button class="add-btn" data-id="${produto.id}">+</button>
            </div>
        `;
    });

    // Liga os botões "+" depois que os cards forem criados
    configurarBotoesCarrinho();
}

// ===================== BOTÕES DE CATEGORIA =====================

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        botoes.forEach(b => b.classList.remove("active"));
        botao.classList.add("active");

        mostrarProdutos(botao.dataset.categoria);
    });
});

// ===================== BOTÕES DO CARRINHO =====================

function configurarBotoesCarrinho() {

    const botoesAdicionar = document.querySelectorAll(".add-btn");

    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", () => {

            const idProduto = Number(botao.dataset.id);

            const produto = produtos.find(p => p.id === idProduto);

           const existente = carrinho.find(item => item.id === produto.id);

if (existente) {
    existente.quantidade += 1;
} else {
    carrinho.push({
        ...produto,
        quantidade: 1
    });
}

//======= Salva os produtos do carrinho no navegador
localStorage.setItem("carrinho", JSON.stringify(carrinho));

            alert(`${produto.nome} adicionado ao carrinho!`);

            console.log(carrinho);
        });
    });
}

// Mostra todos os produtos quando a página abre
// Só executa se a página possuir a lista de produtos
if (lista) {

    mostrarProdutos();

}

// ===================== BUSCA =====================

const campoBusca = document.getElementById("campo-busca");

if (campoBusca) {

    campoBusca.addEventListener("input", () => {

        const texto = campoBusca.value.toLowerCase();

        const unidadeSelecionada =
            localStorage.getItem("unidadeSelecionada") || "Recife";

        const filtrados = produtos.filter(produto =>
            produto.unidades.includes(unidadeSelecionada) &&
            produto.nome.toLowerCase().includes(texto)
        );

        if (!lista) return;

          lista.innerHTML = "";

        filtrados.forEach(produto => {

            lista.innerHTML += `
                <div class="card-produto">

                    <img src="${produto.imagem}" alt="${produto.nome}">

                    <div class="info-produto">
                        <h3>${produto.nome}</h3>
                        <p>${produto.descricao}</p>
                        <span>R$ ${produto.preco.toFixed(2)}</span>
                    </div>

                    <button class="add-btn" data-id="${produto.id}">
                        +
                    </button>

                </div>
            `;

        });


        // Religa os botões depois da busca
        configurarBotoesCarrinho();

    });

}


// ================ SELEÇÃO DE CARD DA UNIDADE ================

const btnAlterarUnidade = document.getElementById("btn-alterar-unidade");
const seletorUnidade = document.getElementById("seletor-unidade");

if (btnAlterarUnidade && seletorUnidade) {

    btnAlterarUnidade.addEventListener("click", () => {

        if (seletorUnidade.style.display === "block") {
            seletorUnidade.style.display = "none";
        } else {
            seletorUnidade.style.display = "block";
        }

    });

}
// ===================== CONFIRMAR UNIDADE =====================

const confirmarUnidade = document.getElementById("confirmar-unidade");

const unidadeAtual = document.getElementById("unidade-atual");


if (confirmarUnidade && unidadeAtual) {

    confirmarUnidade.addEventListener("click", () => {

        const unidadeSelecionada =
            document.querySelector('input[name="unidade"]:checked');

        if (!unidadeSelecionada) {

            alert("Selecione uma unidade.");

            return;
        }

        const nomeUnidade = unidadeSelecionada.value;

        unidadeAtual.textContent = nomeUnidade;

        localStorage.setItem(
            "unidadeSelecionada",
            nomeUnidade
        );

        seletorUnidade.style.display = "none";

        // Atualiza as promoções conforme a unidade escolhida
        mostrarPromocoes();

    });

}
// ===================== UNIDADE SALVA =====================

const unidadeSalva = localStorage.getItem("unidadeSelecionada");

const unidadeAtualCard = document.getElementById("unidade-atual");

if (unidadeSalva && unidadeAtualCard) {

    if (unidadeSalva === "Recife") {
        unidadeAtualCard.textContent = "Recife • Boa Viagem";

    } else if (unidadeSalva === "Olinda") {
        unidadeAtualCard.textContent = "Olinda";

    } else if (unidadeSalva === "Fortaleza") {
        unidadeAtualCard.textContent = "Fortaleza";
    }

}


 // ===================== VITRINE DE PROMOÇÕES =====================

function mostrarPromocoes() {
    if (!listaCombos || !listaDescontos) return;

    const unidadeSelecionada =
        localStorage.getItem("unidadeSelecionada") || "Recife";

    // Monta os combos disponíveis na unidade
    const combosDisponiveis = promocoes.filter(promocao =>
        promocao.tipo === "combo" &&
        promocao.unidades.includes(unidadeSelecionada)
    );

    listaCombos.innerHTML = "";

    combosDisponiveis.forEach(combo => {
        listaCombos.innerHTML += `
            <div class="card-produto card-promocao">
                <h3>${combo.nome}</h3>
                <p>${combo.descricao}</p>
                <p>
                    <del>R$ ${combo.precoOriginal.toFixed(2)}</del>
                    <strong>R$ ${combo.precoPromocional.toFixed(2)}</strong>
                </p>
                <button class="add-promocao-btn"
                    data-promocao-id="${combo.id}">
                    Adicionar combo
                </button>
            </div>
        `;
    });

    // Monta os produtos com desconto
    const descontosDisponiveis = promocoes.filter(promocao =>
        promocao.tipo === "desconto" &&
        promocao.unidades.includes(unidadeSelecionada)
    );

    listaDescontos.innerHTML = "";

    descontosDisponiveis.forEach(oferta => {
        const produto = produtos.find(p => p.id === oferta.produtoId);

        if (!produto) return;

        listaDescontos.innerHTML += `
            <div class="card-produto card-promocao">
                <img src="${produto.imagem}" alt="${produto.nome}">

                <div class="info-produto">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <p>
                        <del>R$ ${oferta.precoOriginal.toFixed(2)}</del>
                        <strong>R$ ${oferta.precoPromocional.toFixed(2)}</strong>
                    </p>
                </div>

                <button class="add-promocao-btn"
                    data-promocao-id="${oferta.id}">
                    Adicionar
                </button>
            </div>
        `;
    });
}

// Exibe as promoções quando a página inicial abre
mostrarPromocoes();

// Configura os botões das promoções
configurarBotoesPromocao();


// ===================== ADICIONAR PROMOÇÕES AO CARRINHO =====================

function configurarBotoesPromocao() {

    const botoesPromocao = document.querySelectorAll(
        ".add-promocao-btn"
    );

    botoesPromocao.forEach(botao => {

        botao.addEventListener("click", () => {

            const idPromocao = botao.dataset.promocaoId;

            const promocao = promocoes.find(
                p => p.id === idPromocao
            );

            if (!promocao) return;

            let itemCarrinho;

            // ===================== COMBOS =====================

            if (promocao.tipo === "combo") {

                const componentes = promocao.produtos.map(id =>
                    produtos.find(p => p.id === id)
                ).filter(Boolean);

                if (componentes.length !== promocao.produtos.length) {
                    alert("Não foi possível localizar os produtos deste combo.");
                    return;
                }

                itemCarrinho = {
                    id: promocao.id,
                    tipoItem: "combo",
                    nome: promocao.nome,
                    descricao: promocao.descricao,
                    imagem: componentes[0].imagem,
                    componentes: componentes.map(produto => ({
                        id: produto.id,
                        nome: produto.nome,
                        precoOriginal: produto.preco
                    })),
                    precoOriginal: promocao.precoOriginal,
                    preco: promocao.precoPromocional,
                    quantidade: 1
                };

            }

            // ===================== DESCONTOS INDIVIDUAIS =====================

            else if (promocao.tipo === "desconto") {

                const produto = produtos.find(
                    p => p.id === promocao.produtoId
                );

                if (!produto) return;

                itemCarrinho = {
                    id: promocao.id,
                    produtoId: produto.id,
                    tipoItem: "desconto",
                    nome: produto.nome,
                    descricao: produto.descricao,
                    imagem: produto.imagem,
                    precoOriginal: promocao.precoOriginal,
                    preco: promocao.precoPromocional,
                    quantidade: 1
                };

            }

            if (!itemCarrinho) return;

            // Verifica se a mesma promoção já está no carrinho
            const existente = carrinho.find(
                item => item.id === itemCarrinho.id
            );

            if (existente) {
                existente.quantidade += 1;
            } else {
                carrinho.push(itemCarrinho);
            }

            localStorage.setItem(
                "carrinho",
                JSON.stringify(carrinho)
            );

            alert(`${itemCarrinho.nome} adicionado ao carrinho!`);
        });

    });

}

