function sortear(){

    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let valorMinimo = parseInt(document.getElementById('de').value);
    let valorMaximo = parseInt(document.getElementById('ate').value);
    
    if(Number.isNaN(quantidadeDeNumeros) || Number.isNaN(valorMaximo) || Number.isNaN(valorMinimo)){
        alert("Insira os campos!!");
        return;
    }

    if (valorMinimo >= valorMaximo){
        alert("O numero final precisa ser maior que o inicial!!!");
        return;
    }

    if(quantidadeDeNumeros > valorMaximo){
        alert("Quantidade insuficiente de numeros para gerar uma lista (Aumente o campo 'até o número')");
        return;
    }

    let listaNumerosSorteados = [];
    geradorNumerosAleatorios(quantidadeDeNumeros,valorMinimo, valorMaximo, listaNumerosSorteados);

    let tagFrase = document.getElementById('resultado'); // não possui .value pois queremos o elemento HTML;
    numeroSorteadoFrase = quantidadeDeNumeros > 1 ? "Numeros Sorteados" : "Numero Sorteado";
    texto = `${numeroSorteadoFrase}: ${listaNumerosSorteados}`;
    tagFrase.innerHTML = `<label class="texto__paragrafo">${texto}</label>`;

    alterarStatusBotaoSortear();
    alterarStatusBotaoReiniciar();
    // class referenciam a um trecho do código CSS;
}

function alterarStatusBotaoSortear(){
    // pegar ID;
    let botao = document.getElementById('btn-sortear');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function alterarStatusBotaoReiniciar(){
    // pegar ID;
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    let tagFrase = document.getElementById('resultado');
    tagFrase.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    limparCampo('quantidade');
    limparCampo('de');
    limparCampo('ate');
    alterarStatusBotaoSortear();
    alterarStatusBotaoReiniciar();
}

function limparCampo(tag){
    campo = document.getElementById(tag);
    campo.value = '';
}

function geradorNumerosAleatorios(quantidadeDeNumeros,valorMinimo,valorMaximo, listaNumerosSorteados){
    let i = 0;
    let verificaRepetidos = []
    while(i<quantidadeDeNumeros){
        let numeroAleatorio =  parseInt((Math.random() * (valorMaximo-valorMinimo+1)) + valorMinimo);
        if(verificaRepetidos.includes(numeroAleatorio)){
            continue;
        }else{
            listaNumerosSorteados.push(numeroAleatorio);
            verificaRepetidos.push(numeroAleatorio);
            console.log(listaNumerosSorteados);
            i++;
        }
    }
}