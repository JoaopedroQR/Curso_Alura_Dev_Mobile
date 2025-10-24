let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicarBotaoConsole(){
    console.log('O botão foi clicado');
}

function clicarBotaoAlerta(){
    alert('Eu amo JS S2');
}

function clicarBotaoPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!!`);
}

function cliclarBotaoSoma(){
    let numero1 = prompt('Digite o primeiro número:');
    let numero2 = prompt('Digite o segundo número:');
    numero1_inteiro = parseInt(numero1)
    numero2_inteiro = parseInt(numero2)
    alert(`O resultado da soma entre ${numero1} e ${numero2} é igual a ${numero1_inteiro + numero2_inteiro}`);
}

// // Desafio 2:
// // 1. Criar uma função que exibe "Olá, mundo!" no console.
// function helloWorld(){
//     console.log('Olá, mundo!');
// }
// helloWorld();
// // 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function saudacao(nome){
//     console.log('Olá ' +  nome + '!');
// }
// saudacao('João Pedro');
// // 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobro(numero){
//     return numero*2;
// }
// numero_dobrado = dobro(4);
// console.log(numero_dobrado);
// // 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function mediaArimetica(numero1, numero2, numero3){
//     return (numero1 + numero2 + numero3) / 3;
// }
// media_aritimetica = mediaArimetica(3,6,9);
// console.log(media_aritimetica);
// // 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function maior_numero(numero1, numero2){
//     if (numero1 > numero2){
//         return numero1;
//     }else{
//         return numero2;
//     }
// }
// maior = maior_numero(7,4);
// console.log(maior);
// // 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação
// // desse número por ele mesmo
// function quadrado(numero1){
//     return numero1*numero1;
// }
// numeroElevado2 = quadrado(4);
// console.log(numeroElevado2);

// // Desafio 3:
// // 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa,
// // a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// function imc(altura, peso){
//     return peso / (altura*altura)
// }
// meu_imc = imc(1.86, 93);
// console.log(meu_imc);
// // 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// function fatorial(numero){
//     if (numero == 1){
//         return 1;
//     }else{
//         return numero * fatorial(numero-1);
//     }
// }
// numero_fatorial = fatorial(5);
// console.log(numero_fatorial);
// // 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor
// // equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
// function conversorDolarReal(valor){
//     return valor*4.80;
// }
// valorReal = conversorDolarReal(12.7);
// console.log(valorReal);

// // 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando
// // altura e largura que serão dadas como parâmetro.
// function areaPerimetroSalaRetangular(altura, largura){
//     let area = altura * largura;
//     let perimetro = (altura*2) + (largura*2);
//     return [area, perimetro];
// }
// let area = 0.0;
// let perimetro = 0.0;

// [area, perimetro] = areaPerimetroSalaRetangular(10,20);
// console.log(area, perimetro);

// // 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu
// // raio que será fornecido como parâmetro. Considere Pi = 3,14.
// let pi = 3.14
// function areaPerimetroSalaCircular(raio){
//     let areaCircular = pi * raio * raio;
//     let perimetroCircular = 2*pi*raio;
//     return [areaCircular, perimetroCircular];
// }
// let areaCircular = 0.0;
// let perimetroCircular = 0.0;

// [areaCircular, perimetroCircular] = areaPerimetroSalaCircular(10);
// console.log(areaCircular, perimetroCircular);

// // 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function tabuada(numero){
//     let multiplicador = 10;
//     while(multiplicador>0){
//         console.log(`${numero} * ${multiplicador} = ${numero*multiplicador}`);
//         multiplicador--;
//     }
// }
// tabuada(9);

// Desafio 4:
//1. Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = []
//2. Crie uma lista de linguagens de programação chamada
// linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let LinguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
//3. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
LinguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
//4.Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomes = ['joao','pedro', 'Queiroz'];
 console.log(nomes[0]);
 //5. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
 let nomes2 = ['joao','pedro', 'Queiroz'];
 console.log(nomes2[1]);
 //6. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
 let nomes3 = ['joao','pedro', 'Queiroz'];
 console.log(nomes3[2]);
 