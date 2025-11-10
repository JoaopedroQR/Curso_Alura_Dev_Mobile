// import 'dart:io';
// 1) Calculando idade para carteira de motorista

// void main(){
//   print('Digite a sua idade:');
//   int idade = 0;

//   String? entrada = stdin.readLineSync();
//   if(entrada != null){
//     if(entrada != ''){
//       idade = int.parse(entrada);
//     }
//   }

//   if(idade < 18){
//     print('Você não pode dirigir!');
//   }else{
//     print('Você pode dirigir!');
//   }
// }

// 2) Retornando os meses do ano
// void main(){
//   int mes = 0; 
//   print('Digite um número de 1 a 12');

//   String? entrada = stdin.readLineSync();
//   if(entrada != null){
//     if(entrada != ''){
//       mes = int.parse(entrada);
//     }
//   }

//   switch(mes){
//     case 1:
//       print('Janeiro');
//     case 2:
//       print('Fevereiro');
//     case 3:
//       print('Março');
//     case 4:
//       print('Abril');
//     case 5:
//       print('Maio');
//     case 6:
//       print('Junho');
//     case 7:
//       print('julho');
//     case 8:
//       print('Agosto');
//     case 9:
//       print('Setembro');
//     case 10:
//       print('Outubro');
//     case 11:
//       print('Novembro');
//     case 12:
//       print('Dezembro');
//     default:
//       print('Digite um mês válido!!');
//   }
// }

// 3) Implementando a verificação de saldo

// double saldo = 1000.0; // Saldo inicial em reais

// void main() {
//   print('Boas-vindas ao seu banco digital!');
//   print('Seu saldo atual é de: R\$${saldo.toStringAsFixed(2)}');

//   print('Digite o valor do Pix que deseja realizar:');
//   double valorPix = double.parse(stdin.readLineSync()!);

//   if(valorPix <= saldo){
//     saldo -= valorPix;
//     print('Operação realizada!');
//     print('Valor restante: R\$$saldo');
//   }else{
//     print('Saldo insuficiente');
//   }
// }

// 4) Verificando a maioridade em diferentes países

// void main(){
//   int idade = 0;
//   String pais = '';
  
//   print('Digite sua idade:');
//   String? entrada = stdin.readLineSync();
//   if(entrada != null){
//     if(entrada != ''){
//       idade = int.parse(entrada);
//     }
//   }
//   print('Digite seu país:');
//   entrada = stdin.readLineSync();
//   if(entrada != null){
//     pais = entrada;    
//   }

//   switch(pais){
//     case 'Brasil':
//       if(idade>=18){
//         print('Você pode dirigir!');
//       }else{
//         print('Você não pode dirigir ainda');
//       }
//     case 'EUA':
//       if(idade>=16){
//         print('Você pode dirigir!');
//       }else{
//         print('Você não pode dirigir ainda');
//       }

//     case 'Japao':
//       if(idade>=20){
//         print('Você pode dirigir!');
//       }else{
//         print('Você não pode dirigir ainda');
//       }
//     default:
//       print('Digite um pais válido');
//   }
// }