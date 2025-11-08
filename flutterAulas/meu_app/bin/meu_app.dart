import 'dart:io';

void main() {
  // print("Hello World");
  // stdin.readLineSync(); // camelCase
  print("Olá, me chamo Dart. Qual seu nome?");
  var entrada = stdin.readLineSync();
  print("Muito prazer, $entrada. Vamos fazer vários programas juntos");
}

// Exercícios:
// 1) Dando um “oi” para o mundo
// void main() {
// print('Hello, World!')
// }
// 2) Identificando mais problemas
// void main() {
//   print("Olá, me chamo Dart. Qual o seu nome?");
//   String? nome = stdin.readLineSync();
//   print("Muito prazer, $nome. Vamos fazer vários programas juntos.");
// }
// 3) Solicitando a idade de usuário
// import 'dart:io';

// void main(){
//   print('Olá! Digite seu nome e sua idade:');
//   print('Digite seu nome: ');
//   var nome = stdin.readLineSync();
//   print('Digite sua idade: ');
//   var idade = stdin.readLineSync();
//   print('Olá $nome, você tem $idade anos!');
// }