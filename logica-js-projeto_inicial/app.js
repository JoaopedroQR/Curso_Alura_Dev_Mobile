alert('Boas vindas ao jogo do número secreto');
let limite = prompt('Escolha o máximo número possível:')
let secretNumber = parseInt(Math.random() * limite + 1);
console.log('Valor do numero secreto: ' + secretNumber);
//Para criarmos variáveis e armazenar valor dentro utilizamos let
let chosenNumber;
let tentativas = 1;

//enquanto        diferente
while(chosenNumber != secretNumber){
    chosenNumber = prompt('Escolha um numero entre 1 e ' + limite); // Pedir dado externo para o usuário
    console.log('Valor do numero escolhido: ' + chosenNumber);
    if (secretNumber == chosenNumber){ // condição
        break;
    } else{
        // tentativas = tentativas + 1; 
        tentativas++;
        if(secretNumber > chosenNumber){
            alert(`O número secreto é maior que ${chosenNumber}`);
        }else{
            alert(`O número secreto é menor que ${chosenNumber}`);
        }
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
console.log('Resultado da comparação:', chosenNumber == secretNumber);
// console.log('Isso aí! Você descobriu o número secreto(5)'); ferramenta para desenvolvedor nao interage com o usuario
// alert('Isso aí! Você descobriu o número secreto'); 
// alert(`Isso aí! Você descobriu o número secreto ${secretNumber}`); // template strings
alert('Isso aí! Você descobriu o número secreto ' + secretNumber + ' com ' + tentativas + ' ' + palavraTentativa); // Alternativa ao template strings


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

// // DESAFIOS 2
// //1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo",
// //mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
// let weekDay = prompt('Digite o dia da semana:');
// if(weekDay === 'Sabado' || weekDay === 'Domingo'){
//     alert('Bom fim de semana!');
// }else{
//     alert('Boa semana!');
// }

// //2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
// let number = prompt('Digite um número:');
// if(number > 0){
//     alert('Número positivo!!!');
// }else if(number < 0){
//     alert('Número negativo!!!');
// }else{
//     alert('Número nulo');
// }

// //3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
// //Caso contrário, mostre "Tente novamente para ganhar.".
// let firstScore = prompt('Digite um numero de 0 a 100:');
// let firstScoreFormatado = parseInt(firstScore);
// let secondScore = prompt('Digite um numero de 0 a 100:');
// let secondScoreFormatado = parseInt(secondScore);
// console.log('Primeira pontuação:' + firstScore);
// console.log('Segunda pontuação:' + secondScore);
// console.log('Soma:' + (secondScore + firstScore));

// if((firstScore+secondScore) >= 100){
//     alert('Parabéns, você venceu!');
// }else{
//     alert('Tente novamente para ganhar.');
// }
// //4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para
// //incluir o valor do saldo.
// let cash = 1000;
// alert(`Seu saldo é igual a R$${cash}.`);
// //5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
// let person = prompt('Digite seu nome:');
// alert('Boas-vindas ' + person + '!!!');

//DESAFIOS 3 
// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador = 0;
// while(contador <10){
//     contador++;
//     alert('Numero do contador: ' + contador);
// }

// // 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador_decrementando = 10;
// while(contador_decrementando >= 0){
//     alert('Numero do contador: ' + contador_decrementando);
//     contador_decrementando--;
// }
// 3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0,
//usando um loop while no console do navegador.
// let contador_decrementando = prompt('Digite um numero:');
// while(contador_decrementando >= 0){
//     console.log('Numero do contador: ' + contador_decrementando);
//     contador_decrementando--;
// }
// // 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número,
// //usando um loop while no console do navegador.
// let contador = prompt('Digite um numero:');
// let cont = 0;
// while(cont <= contador){
//     console.log('Numero do contador: ' + cont);
//     cont++;
// }

// OPERADORES LOGICOS
// O operador AND, representado pelos símbolos "&&", é utilizado para combinar duas condições
// e avaliar se ambas são verdadeiras.
// O operador OR, representado pelos símbolos "||", é usado para verificar se pelo menos uma
// das condições é verdadeira.
// o operador NOT, representado pelos simbolos "!", é utilizado para inverter a veracidade da variável


// // DESAFIOS 4
// // 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// console.log('Boas-vindas, Querido(a)');
// // 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o
// // console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// let nome = 'João Pedro';
// console.log( "Olá, " + nome + "!");
// // 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert
// // para exibir a mensagem "Olá, [seu nome]!" .
// let nome_alert = 'João Pedro';
// alert( "Olá, " + nome_alert + "!");
// // 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?.
// // Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// let linguagem = prompt('Qual a linguagem de programação você mais gosta?');
// console.log(linguagem);
// // 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos
// // de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira
// // variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é
// // igual a [resultado]." no console.
// let valor1 = 20;
// let valor2 = 10;
// let resultado = valor1 + valor2;
// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
// // 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
// // Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada
// // "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a
// // [resultado]." no console.
// let valor1_SUB = 40;
// let valor2_SUB = 20;
// let resultado_SUB = valor1_SUB - valor2_SUB;
// console.log(`A subtração de ${valor1_SUB} e ${valor2_SUB} é igual a ${resultado_SUB}`);
// // 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a
// // pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// let idade = prompt('Escreva sua idade');
// if (idade>=18){
//     console.log('Você é maior de idade');
// }else{
//     console.log('Você não é maior de idade');
// }
// // 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para
// // imprimir a respectiva mensagem.
// let numero = prompt('Escreva um numero inteiro');
// if(numero>0){
//     console.log('Numero positivo');
// }else if(numero<0){
//     console.log('Numero negativo');
// }else{
//     console.log('Numero nulo');
// }
// // 9. Use um loop while para imprimir os números de 1 a 10 no console.
// let k = 0;
// while(k<10){
//     console.log(k+1);
//     k++;
// }
// // 10. Crie uma variável "nota" e atribua um valor numérico a ela.
// // Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// let nota = 8;
// if(nota>=7){
//     console.log('Aprovado');
// }else{
//     console.log('Reprovado');
// }
// // 11. Use o Math.random para gerar  qualquer número aleatório e exiba esse número no console.
// console.log(Math.random());
// // 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// console.log(parseInt(Math.random() *10 + 1));
// // 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// console.log(parseInt(Math.random() *100 + 1));