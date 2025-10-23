//H1 titulo da página em si
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// p = Parágrafo
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
tentativas = 1;
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute> numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute + '!');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute + '!');
        }
        tentativas++;
        limparCampo();
    }    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

let numeroSecreto = gerarNumeroAleatorio();
exibirMensagemInicial();
