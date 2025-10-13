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