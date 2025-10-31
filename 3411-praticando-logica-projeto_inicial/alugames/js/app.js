// Variável Global
let qntJogosAlugados = 1
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    alterarStatusImagem(imagem, botao);
    console.log(qntJogosAlugados)
}

function alterarStatusImagem(imagem, botao){
    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        qntJogosAlugados--;
    }else{
        confirmacao = prompt('Se tiver certeza que quer alugar digite 1:');
        if(confirmacao == 1){    
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            qntJogosAlugados++;
        }
    }
}

function epalin(frase){
    let tamanho = frase.length;
    let j = tamanho-1;
    for(let i = 0; i<tamanho; i++){
        if(frase[i] != frase[j]){
            console.log('Não é palíndromo');
            return;
        }
        j--;
    }
    console.log('É palíndromo!');
}
let frase = 'subinoonibus';
epalin(frase);

function ordena(lista){
    tamanho = lista.length;
    for(let i=tamanho-1; i>=0; i--){
        for(let j=0; j<i; j++){
            if(lista[j]> lista[j+1]){
                aux = lista[j];
                lista[j] = lista[j+1];
                lista[j+1] = aux;
            }
        }
    }
    return lista
}

let lista = [8,5,3];
let lista_ordenada = ordena(lista);
console.log(lista_ordenada);