function sortear(){
    let quantidadeDeNumeros = document.getElementById('quantidade').value;
    let valorMinimo = document.getElementById('de').value;
    let valorMaximo = document.getElementById('ate').value;
    
    if (valorMinimo >= valorMaximo){
        alert("O numero final precisa ser maior que o inicial!!!");
        return;
    }


    let listaNumerosSorteados = [];
    geradorNumerosAleatorios(quantidadeDeNumeros,valorMinimo, valorMaximo, listaNumerosSorteados);

    document.getElementById('btn-sortear').setAttribute('disabled', true);
    document.getElementById('btn-reiniciar').removeAttribute('disabled');

    console.log(listaNumerosSorteados);
}

function reiniciar(){
    document.getElementById('btn-sortear').removeAttribute('disabled');
    listaDeNumerosSorteados = [];
}

function geradorNumerosAleatorios(quantidadeDeNumeros,valorMinimo,valorMaximo, listaNumerosSorteados){
    let i = 0;
    while(i<quantidadeDeNumeros){
        let numeroAleatorio =  parseInt((Math.random() * (valorMaximo-valorMinimo)) + valorMinimo);
        listaNumerosSorteados.push(numeroAleatorio);
        i++;
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    exibirTextoNaTela(tag, texto);
}