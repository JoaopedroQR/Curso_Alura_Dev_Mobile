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

// Desafio 2:
// 1. Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld(){
    console.log('Olá, mundo!');
}
helloWorld();
// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacao(nome){
    console.log('Olá ' +  nome + '!');
}
saudacao('João Pedro');
// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero){
    return numero*2;
}
numero_dobrado = dobro(4);
console.log(numero_dobrado);
// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaArimetica(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}
media_aritimetica = mediaArimetica(3,6,9);
console.log(media_aritimetica);
// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior_numero(numero1, numero2){
    if (numero1 > numero2){
        return numero1;
    }else{
        return numero2;
    }
}
maior = maior_numero(7,4);
console.log(maior);
// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação
// desse número por ele mesmo
function quadrado(numero1){
    return numero1*numero1;
}
numeroElevado2 = quadrado(4);
console.log(numeroElevado2);