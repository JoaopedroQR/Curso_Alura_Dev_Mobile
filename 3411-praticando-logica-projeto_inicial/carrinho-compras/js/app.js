let listaProdutos = [];
let primeiroProduto = `<section class="carrinho__produtos__produto"><span class="texto-azul">1x</span> Celular <span class="texto-azul">R$1400</span></section>`;
listaProdutos.push(primeiroProduto);

let precoTotal = 1400;

function adicionar(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let produto = document.getElementById('produto').value;
    let partes = produto.split('-', 2);
    let nomeProduto = partes[0].trim();
    let precoProduto = partes[1].trim();
    let texto = '';
    
    let tagListaProdutos = document.getElementById('lista-produtos');
    texto = `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${precoProduto}</span></section>\n`;
    listaProdutos.push(texto);
    
    let tamanho = listaProdutos.length;
    let textoFinal = '';
    let i;
    for(i=0; i<tamanho; i++){
        textoFinal += `${listaProdutos[i]}`;
    }
    console.log(textoFinal);
    tagListaProdutos.innerHTML = textoFinal;
    let quantidadeCampo = document.getElementById('quantidade');
    quantidadeCampo.value = '';

    let precoAdicionar = document.getElementById('valor-total');
}

function limpar(){
    let tagListaProdutos = document.getElementById('lista-produtos');
    let quantidade = document.getElementById('quantidade');
    tagListaProdutos.innerHTML = '';
    quantidade.value = '';
    listaProdutos = [];
}