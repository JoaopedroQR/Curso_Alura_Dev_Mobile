// alert('Boas vindas ao jogo do número secreto');
// let secretNumber = 5;
// //Para criarmos variáveis e armazenar valor dentro utilizamos let
// let chosenNumber;
// chosenNumber = prompt('Escolha um numero entre 1 e 10'); // Pedir dado externo para o usuário

// if (secretNumber == chosenNumber){
//     console.log('Isso aí! Você descobriu o número secreto(5)');
// }// condição

// DESAFIOS
//1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!"
alert("Boas vindas ao nosso site!");
//2. Declare uma variável chamada nome e atribua a ela o valor "Lua"
let nome = 'Lua'
//3. crie uma variável chamada idade e atribua a ela o valor 25
let idade = 25
//4. Defina uma variável chamada numeroDeVendas e atribua a ela o valor 50
let numeroDeVendas = 50
//5. Defina uma variável chamada saldoDisponivel e atribua a ela o valor 1000
let saldoDisponivel = 1000
//6. Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert('Erro! Preencha todos os campos')
//7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro!
// Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = 'Erro! Preencha todos os campos'
alert(mensagemDeErro)
//8. Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo
//em uma variável, pode chamá-la de nome ou adicionar o que desejar.
let nomeUsuario = prompt('Digite seu nome:')
//9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idadeUsuario = prompt('Digite sua idade:')
//10. Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual 
//que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(idadeUsuario >= 18){
    alert('Pode tirar a habilitação!!!')
}else{
    alert('Não pode tirar a habilitação')
}