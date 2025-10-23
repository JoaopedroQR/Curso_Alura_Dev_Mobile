//H1 titulo da página em si
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// p = Parágrafo
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

let numeroSecreto = gerarNumeroAleatorio();

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
