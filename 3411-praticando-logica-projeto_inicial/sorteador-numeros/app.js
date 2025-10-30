function sortear(){

    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let valorMinimo = parseInt(document.getElementById('de').value);
    let valorMaximo = parseInt(document.getElementById('ate').value);
    
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
    console.log(listaNumerosSorteados);

    let tagFrase = document.getElementById('resultado'); // não possui .value pois queremos o elemento HTML
    numeroSorteadoFrase = quantidadeDeNumeros > 1 ? "Numeros Sorteados" : "Numero Sorteado";
    texto = `${numeroSorteadoFrase}: ${listaNumerosSorteados}`;
    tagFrase.innerHTML = `<label class="texto__paragrafo">${texto}</label>`;

    document.getElementById('btn-sortear').setAttribute('disabled', true);
    document.getElementById('btn-reiniciar').removeAttribute('disabled');

}

function reiniciar(){
    document.getElementById('btn-sortear').removeAttribute('disabled');
    listaDeNumerosSorteados = [];
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