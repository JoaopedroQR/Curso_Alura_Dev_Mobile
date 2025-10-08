// alert('Boas vindas ao jogo do número secreto');
// let secretNumber = 2;
// console.log('Valor do numero secreto: ' + secretNumber);
// //Para criarmos variáveis e armazenar valor dentro utilizamos let
// let chosenNumber;
// chosenNumber = prompt('Escolha um numero entre 1 e 10'); // Pedir dado externo para o usuário
// console.log('Valor do numero escolhido: ' + chosenNumber);

// if (secretNumber == chosenNumber){ // condição
//     console.log('Resultado da comparação:', chosenNumber == secretNumber)
//     // console.log('Isso aí! Você descobriu o número secreto(5)'); ferramenta para desenvolvedor nao interage com o usuario
//     // alert('Isso aí! Você descobriu o número secreto'); 
//     // alert(`Isso aí! Você descobriu o número secreto ${secretNumber}`); // template strings
//     alert('Isso aí! Você descobriu o número secreto ' + secretNumber); // Alternativa ao template strings
// } else{
//     alert('Você errou :( O numero secreto era ' + secretNumber + ' Voce chutou ' + chosenNumber);
// }



// // DESAFIOS
// //1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!"
// alert("Boas vindas ao nosso site!");
// //2. Declare uma variável chamada nome e atribua a ela o valor "Lua"
// let nome = 'Lua';
// //3. crie uma variável chamada idade e atribua a ela o valor 25
// let idade = 25;
// //4. Defina uma variável chamada numeroDeVendas e atribua a ela o valor 50
// let numeroDeVendas = 50;
// //5. Defina uma variável chamada saldoDisponivel e atribua a ela o valor 1000
// let saldoDisponivel = 1000;
// //6. Exiba um alerta com o texto "Erro! Preencha todos os campos"
// alert('Erro! Preencha todos os campos');
// //7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro!
// // Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
// let mensagemDeErro = 'Erro! Preencha todos os campos'
// alert(mensagemDeErro);
// //8. Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo
// //em uma variável, pode chamá-la de nome ou adicionar o que desejar.
// let nomeUsuario = prompt('Digite seu nome:');
// //9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// let idadeUsuario = prompt('Digite sua idade:');
// //10. Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual 
// //que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
// if(idadeUsuario >= 18){
//     alert('Pode tirar a habilitação!!!');
// }else{
//     alert('Não pode tirar a habilitação');
// }

// DESAFIOS 2
//1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo",
//mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let weekDay = prompt('Digite o dia da semana:');
if(weekDay === 'Sabado' || weekDay === 'Domingo'){
    alert('Bom fim de semana!');
}else{
    alert('Boa semana!');
}

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let number = prompt('Digite um número:');
if(number > 0){
    alert('Número positivo!!!');
}else if(number < 0){
    alert('Número negativo!!!');
}else{
    alert('Número nulo');
}

//3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//Caso contrário, mostre "Tente novamente para ganhar.".
let firstScore = prompt('Digite um numero de 0 a 100:');
let firstScoreFormatado = parseInt(firstScore);
let secondScore = prompt('Digite um numero de 0 a 100:');
let secondScoreFormatado = parseInt(secondScore);
console.log('Primeira pontuação:' + firstScore);
console.log('Segunda pontuação:' + secondScore);
console.log('Soma:' + (secondScore + firstScore));

if((firstScore+secondScore) >= 100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar.');
}
//4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para
//incluir o valor do saldo.
let cash = 1000;
alert(`Seu saldo é igual a R$${cash}.`);
//5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let person = prompt('Digite seu nome:');
alert('Boas-vindas ' + person + '!!!');
