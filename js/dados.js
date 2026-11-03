const produtos = [
//==============CUSCUZ===============//   
    {
        id: 1,
        nome: "Cuscuz com Carne de Sol",
        categoria: "Cuscuz",
        descricao: "Queijo coalho e manteiga de garrafa.",
        preco: 22.90,
        imagem:"./assets/img/cardapio/cuscuz-carne-de-sol.jpg",
        unidades:["Recife","Olinda","Fortaleza"],
        sazonal:false

    },

    {
        id: 2,
        nome: "Cuscuz com Frango Cremoso",
        categoria: "Cuscuz",
        descricao: "Frango desfiado com requeijão.",
        preco: 19.90,
        imagem: "./assets/img/cardapio/cuscuz-frango-cremoso.jpg",
        unidades: ["Recife", "Fortaleza"],
        sazonal: false
    },

    { id:3,
      nome:"Cuscuz com Charque",
      categoria:"Cuscuz",
      descricao:"Charque desfiada e cebola roxa.",
      preco:21.90,
      imagem:"./assets/img/cardapio/cuscuz-charque.jpg",
      unidades:["Recife","Olinda"],
      sazonal:false
    },

    { id:4,
      nome:"Cuscuz com Calabresa",
      categoria:"Cuscuz",
      descricao:"Calabresa acebolada e queijo.",
      preco:18.90,
      imagem:"./assets/img/cardapio/cuscuz-calabresa.jpg",
      unidades:["Recife","Olinda","Fortaleza"],
      sazonal:false

    },

    { id:5,
      nome:"Cuscuz Completo",
      categoria:"Cuscuz",
      descricao:"Ovo, queijo coalho, carne de sol e manteiga.",
      preco:25.90,
      imagem:"./assets/img/cardapio/cuscuz-completo.jpg",
      unidades:["Recife","Fortaleza"],
      sazonal:false
    },

    { id:6,
      nome:"Cuscuz com Queijo Coalho",
      categoria:"Cuscuz",
      descricao:"Queijo coalho grelhado.",
      preco:16.90,
      imagem:"./assets/img/cardapio/cuscuz-queijo-coalho.jpg",
      unidades:["Recife","Olinda","Fortaleza"],
      sazonal:false
    },

    {
        id: 7,
        nome: "Cuscuz Vegano",
        categoria: "Cuscuz",
        descricao: "Legumes grelhados e azeite de oliva.",
        preco: 18.50,
        imagem: "./assets/img/cardapio/cuscuz-vegano.jpg",
        unidades: ["Fortaleza"],
        sazonal: false
    },

    {
        id: 8,
        nome: "Cuscuz Junino",
        categoria: "Cuscuz",
        descricao: "Milho, queijo coalho e carne seca.",
        preco: 23.90,
        imagem: "./assets/img/cardapio/cuscuz-junino.jpg",
        unidades: ["Recife", "Olinda"],
        sazonal: true
    },

    //==================TAPIOCAS==================//

    {
        id: 9,
        nome: "Tapioca Carne Seca",
        categoria: "Tapiocas",
        descricao: "Carne seca desfiada com queijo coalho.",
        preco: 20.90,
        imagem: "./assets/img/cardapio/tapioca-carne-seca.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal: false
    },

    {
        id: 10,
        nome: "Tapioca de Frango Cremoso",
        categoria: "Tapiocas",
        descricao: "Frango desfiado com requeijão.",
        preco: 18.90,
        imagem: "./assets/img/cardapio/tapioca-de-frango-cremoso.jpg",
        unidades:["Recife","Fortaleza"],
        sazonal:false
    },

    {
        id: 11,
        nome: "Tapioca Calabresa",
        categoria: "Tapiocas",
        descricao: "Calabresa acebolada e queijo.",
        preco: 18.90,
        imagem: "./assets/img/cardapio/tapioca-calabresa.jpg",
        unidades: ["Recife", "Olinda"],
        sazonal: false
    },

    {
        id: 12,
        nome: "Tapioca Queijo e Presunto",
        categoria: "Tapiocas",
        descricao: "Queijo muçarela e presunto.",
        preco: 16.90,
        imagem: "./assets/img/cardapio/tapioca-queijo-presunto.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal: false
    },

    {
        id: 13,
        nome: "Tapioca Banana com Canela",
        categoria: "Tapiocas",
        descricao: "Banana caramelizada com canela.",
        preco: 15.90,
        imagem: "./assets/img/cardapio/tapioca-banana-canela.jpg",
        unidades: ["Recife", "Fortaleza"],
        sazonal: false
    },

    {
        id: 14,
        nome: "Tapioca Chocolate com Morango",
        categoria: "Tapiocas",
        descricao: "Chocolate ao leite e morangos.",
        preco: 17.90,
        imagem: "./assets/img/cardapio/tapioca-chocolate-morango.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal: false
    },

    {
        id: 15,
        nome: "Tapioca Romeu e Julieta",
        categoria: "Tapiocas",
        descricao: "Queijo coalho com goiabada.",
        preco: 16.90,
        imagem: "./assets/img/cardapio/tapioca-romeu-julieta.jpg",
        unidades: ["Olinda"],
        sazonal: false
    },

    // ========= BEBIDAS ==========//

    {
        id: 16,
        nome: "Suco de Cajá",
        categoria: "Bebidas",
        descricao: "Suco natural de cajá (500 ml).",
        preco: 8.00,
        imagem: "./assets/img/cardapio/suco-de-caja.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal: false
    },

    {
        id: 17,
        nome: "Suco de Caju",
        categoria: "Bebidas",
        descricao: "Suco natural de caju (500 ml).",
        preco: 8.00,
        imagem: "./assets/img/cardapio/suco-caju.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal: false
    },

    {
        id: 18,
        nome: "Suco de Acerola",
        categoria: "Bebidas",
        descricao: "Suco natural de acerola (500 ml).",
        preco: 8.50,
        imagem: "./assets/img/cardapio/suco-acerola.jpg",
        unidades: ["Recife", "Fortaleza"],
        sazonal: false
    },

    {
        id: 19,
        nome: "Suco de Graviola",
        categoria: "Bebidas",
        descricao: "Suco natural de graviola (500 ml).",
        preco: 9.00,
        imagem: "./assets/img/cardapio/suco-graviola.jpg",
        unidades: ["Olinda", "Fortaleza"],
        sazonal: false
    },

    {
        id: 20,
        nome: "Café Coado Nordestino",
        categoria: "Bebidas",
        descricao: "Café passado na hora.",
        preco: 5.50,
        imagem: "./assets/img/cardapio/cafe-coado.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal: false
    },

    {
        id: 21,
        nome: "Café com Leite",
        categoria: "Bebidas",
        descricao: "Café quente com leite.",
        preco: 6.50,
        imagem: "./assets/img/cardapio/cafe-leite.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal: false
    },

    {
        id: 22,
        nome: "Refrigerante Lata",
        categoria: "Bebidas",
        descricao: "Refrigerante 350 ml.",
        preco: 6.00,
        imagem: "./assets/img/cardapio/refrigerante-lata.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal: false
    },

        // ========== DOCES ==========//


    {
        id: 23,
        nome: "Bolo de Macaxeira",
        categoria: "Doces",
        descricao: "Fatia de bolo de macaxeira caseiro.",
        preco: 9.50,
        imagem: "./assets/img/cardapio/bolo-de-macaxeira.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal:false
    },

    {
        id: 24,
        nome: "Bolo de Milho",
        categoria: "Doces",
        descricao: "Bolo de milho cremoso.",
        preco: 8.90,
        imagem: "./assets/img/cardapio/bolo-milho.jpg",
        unidades: ["Recife", "Olinda"],
        sazonal: false
    },

    {
        id: 25,
        nome: "Bolo de Rolo",
        categoria: "Doces",
        descricao: "Doce tradicional pernambucano.",
        preco: 10.90,
        imagem: "./assets/img/cardapio/bolo-rolo.jpg",
        unidades: ["Recife", "Olinda"],
        sazonal: false
    },

    {
        id: 26,
        nome: "Cartola Pernambucana",
        categoria: "Doces",
        descricao: "Banana frita, queijo coalho, açúcar e canela.",
        preco: 13.90,
        imagem: "./assets/img/cardapio/cartola.jpg",
        unidades: ["Recife", "Olinda"],
        sazonal: false
    },

    {
        id: 27,
        nome: "Cocada Cremosa",
        categoria: "Doces",
        descricao: "Cocada cremosa com coco fresco.",
        preco: 7.90,
        imagem: "./assets/img/cardapio/cocada-cremosa.jpg",
        unidades: ["Fortaleza", "Olinda"],
        sazonal: false
    },

    {
        id: 28,
        nome: "Pé de Moleque Nordestino",
        categoria: "Doces",
        descricao: "Doce típico de amendoim.",
        preco: 6.90,
        imagem: "./assets/img/cardapio/pe-de-moleque.jpg",
        unidades: ["Recife", "Olinda", "Fortaleza"],
        sazonal: true
    }


];


const promocoes = [
  // Combos promocionais
  {
    id: "combo-cuscuz-frango-caja",
    tipo: "combo",
    nome: "Combo Cuscuz Nordestino",
    descricao: "Cuscuz com Frango Cremoso + Suco de Cajá",
    precoOriginal: 27.90,
    precoPromocional: 24.90,
    produtos: [2, 16],
    unidades: ["Recife", "Fortaleza"]
  },

  {
    id: "combo-tapioca-caju",
    tipo: "combo",
    nome: "Combo Tapioca Regional",
    descricao: "Tapioca de Carne Seca + Suco de Caju",
    precoOriginal: 28.90,
    precoPromocional: 25.90,
    produtos: [9, 17],
    unidades: ["Recife", "Olinda", "Fortaleza"]
  },

  // Descontos individuais
  {
    id: "oferta-cuscuz-carne-sol",
    tipo: "desconto",
    produtoId: 1,
    precoOriginal: 22.90,
    precoPromocional: 20.90,
    unidades: ["Recife", "Olinda", "Fortaleza"]
  },

  {
    id: "oferta-tapioca-queijo-presunto",
    tipo: "desconto",
    produtoId: 12,
    precoOriginal: 16.90,
    precoPromocional: 14.90,
    unidades: ["Recife", "Olinda", "Fortaleza"]
  },

  {
    id: "oferta-suco-caja",
    tipo: "desconto",
    produtoId: 16,
    precoOriginal: 8.00,
    precoPromocional: 6.90,
    unidades: ["Recife", "Olinda", "Fortaleza"]
  },

  {
    id: "oferta-bolo-macaxeira",
    tipo: "desconto",
    produtoId: 23,
    precoOriginal: 9.50,
    precoPromocional: 7.90,
    unidades: ["Recife", "Olinda", "Fortaleza"]
  }
  
];
