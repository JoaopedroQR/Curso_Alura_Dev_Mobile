function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade_ingressos = parseInt(document.getElementById('qtd').value);

    console.log(tipoIngresso);

    if(quantidade_ingressos <= 0){
        alert('Digite uma quantidade válida(Positiva) de ingressos!!');
        return;
    }

    if(tipoIngresso == 'pista'){
        comprarPista(quantidade_ingressos);
    }else if(tipoIngresso == 'superior'){
        comprarSuperior(quantidade_ingressos);
    }else if(tipoIngresso == 'inferior'){
        comprarInferior(quantidade_ingressos);
    }
}

function comprarPista(quantidade_ingressos){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade_ingressos>quantidadePista){
        alert('Quantidade de ingressos indisponível');
    }else{
        quantidadePista -= quantidade_ingressos;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!!');
    }
}

function comprarSuperior(quantidade_ingressos){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade_ingressos>quantidadeSuperior){
        alert('Quantidade de ingressos indisponível');
    }else{
        quantidadeSuperior -= quantidade_ingressos;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!!');
    }
}

function comprarInferior(quantidade_ingressos){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade_ingressos>quantidadeInferior){
        alert('Quantidade de ingressos indisponível');
    }else{
        quantidadeInferior -= quantidade_ingressos;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!!');
    }
}

// STRING -> NUMERO
// let numeroString = '10';
// console.log(typeof(numeroString));
// function converterTipo(string){
//     return parseInt(string);
// }
// let numeroNumber = converterTipo(numeroString);
// console.log(typeof(numeroNumber));

// CALCULADORA
// while(true){
//     let condicao = prompt('Bem-vindo a calculadora, digite 1 para continuar e 0 para sair');
//     if(parseInt(condicao) == 1){
//         let operacao = prompt('Digite a operacao que você quer executar(+,-,*,/):');
//         if(operacao == '+'){
//             let N1 = parseInt(prompt('Digite o primeiro numero:'));
//             let N2 = parseInt(prompt('Digite o segundo numero:'));
//             alert(`O resultado é: ${N1+N2}`);
//         } else if(operacao == '-'){
//             let N1 = parseInt(prompt('Digite o primeiro numero:'));
//             let N2 = parseInt(prompt('Digite o segundo numero:'));
//             alert(`O resultado é: ${N1-N2}`);
//         } else if(operacao == '*'){
//             let N1 = parseInt(prompt('Digite o primeiro numero:'));
//             let N2 = parseInt(prompt('Digite o segundo numero:'));
//             alert(`O resultado é: ${N1*N2}`);
//         } else if(operacao == '/'){
//             let N1 = parseInt(prompt('Digite o primeiro numero:'));
//             let N2 = parseInt(prompt('Digite o segundo numero:'));
//             alert(`O resultado é: ${N1/N2}`);
//         }
//     }else if(parseInt(condicao) == 0){
//         break;
//     }else{
//         alert('Digite um número válido!!');
//     }
// }

// PAR OU IMPAR:
// let numero = parseInt(prompt('Digite um numero:'));
// function parOuImpar(numero){
//     if(numero % 2 == 0 ){
//         return 'Par';
//     }else{
//         return 'Impar';
//     }
// } 
// let paridade = parOuImpar(numero);
// alert(paridade);

// CELSIUS -> FAHRENHEIT
// let temperaturaCelsius = prompt('Digite a temperatura em celsius:');
// function conversorTemperatura(temperatura){
//     return ((temperatura/5)*9)+32
// }
// let temperaturaFahrenheit = conversorTemperatura(temperaturaCelsius);
// alert(temperaturaFahrenheit);