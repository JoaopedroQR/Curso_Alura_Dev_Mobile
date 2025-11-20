import 'dart:io';

void main() {
  // var primeiroNumero = stdin.readLineSync(); -> por padrão é retornado string(texto[string?])
  // var segundoNumero = stdin.readLineSync(); -> por padrão gravado como texto
  // print('Digite o primeiro número:');
  // double primeiroNumero = double.parse(stdin.readLineSync()!);
  // print('Digite a operação:');
  // String operacao = stdin.readLineSync()!;
  // print('Digite o Segundo número:');
  // double segundoNumero = double.parse(stdin.readLineSync()!);
  // print('Digite o primeiro número:');
  double primeiroNumero = 0;
  String operacao = '';
  double segundoNumero = 0;
  // String operacao = stdin.readLineSync()!;
  void soma(){
    // double terceiroNumero = 3; 
    print(primeiroNumero + segundoNumero);
  }
  // print(terceiroNumero); -> função filha tem acesso as variáveis da funçção pai, porém função pai não tem
  // acesso as variáveis da função filha. (escopo);
  void subtracao(){
    print(primeiroNumero - segundoNumero);

  }
  void divisao(){
    print(primeiroNumero / segundoNumero);

  }
  void multiplicacao(){
    print(primeiroNumero * segundoNumero);
  }

  void calcular(){
    switch(operacao){
      case '+':
        soma();
      case '-':
        subtracao();
      case '*':
        multiplicacao();
      case '/':
        divisao();
        break;
      default:
        print('Digite uma operação válida!');
    }
  }
  //Legibilidade: IF E ELSE RUIM
  // if(operacao == '+'){
  //   soma();

  // }else if(operacao == '-'){
  //   subtracao();

  // }else if(operacao == '*'){
  //   multiplicacao();

  // } else if(operacao == '/'){
  //   divisao();
  // }else{
  //   print('Digite uma operação válida!!!');
  // }

  print('Digite o primeiro numero:');
  String? entrada = stdin.readLineSync();
  if(entrada != null){
    if(entrada != ''){
      primeiroNumero = double.parse(entrada);
    }
  }

  print('Digite a operação:');
  entrada = stdin.readLineSync();
  if(entrada != null){
    operacao = entrada;
  }

  print('Digite o segundo numero:');
  entrada = stdin.readLineSync();
  if(entrada != null){
    if(entrada != ''){
      segundoNumero = double.parse(entrada);
    }
  }
  print('O resultado da operação é:');
  calcular();
}

// Exercícos:
// 1) Calculando o dobro de um número
// import "dart:io";
// void main(){
//   print("Digite um número:");
//   int numero = int.parse(stdin.readLineSync()!);
//   print("O dobro de $numero é ${numero*2}");
// }
// 2) Descobrindo a média de idades
// import 'dart:io';

// void main(){
//   print('Digite a idade da primeira pessoa:');
//   int idade1 = int.parse(stdin.readLineSync()!);
//   print('Digite a idade da segunda pessoa:');
//   int idade2 = int.parse(stdin.readLineSync()!);
//   print('Digite a idade da terceira pessoa:');
//   int idade3 = int.parse(stdin.readLineSync()!);
//   print('Digite a idade da quarta pessoa:');
//   int idade4 = int.parse(stdin.readLineSync()!);
//   print('A média das idades é ${(idade1+idade2+idade3+idade4)/4}');
// }

// 3) Escrevendo a ficha de participante
// void main(){
//   String nome = 'João Pedro Queiroz Rodrigues';
//   String cpf = '000.111.222-60';
//   int idade = 20;
//   double altura = 1.86;
//   bool participoDaComunidade = true;
//   print("Olá, eu me chamo $nome,");
//   print("meu cpf é $cpf,");
//   print("tenho $idade anos,");
//   print("Tenho $altura de altura,");
//   print("participo da comunidade? $participoDaComunidade");
// }

// 4) Calculando o salário do freela
// import 'dart:io';

// void main(){
//   print('Digite o número de horas trabalhadas:');
//   int horasTrabalhadas = int.parse(stdin.readLineSync()!);
//   double salarioBruto = horasTrabalhadas * 50;
//   print('Salário líquido é R\$${salarioBruto - salarioBruto*5/100}.');
// }

// 5) Consertando erros em um programa
// import 'dart:io';
// void main() {
//   double saldo = 1000.0; // Saldo inicial em reais
//   print('Boas-vindas ao seu banco digital!');
//   print('Seu saldo atual é de: R\$${saldo.toStringAsFixed(2)}');

//   print('Digite o valor do Pix que deseja realizar:');
//   double valorPix = double.parse(stdin.readLineSync()!);

//   saldo -= valorPix;

//   print('Pix realizado com sucesso!');
//   print('Seu saldo atual é de: R\$${saldo.toStringAsFixed(2)}');
// }

// 6) Identificando e corrigindo tipos no Dart
// import 'dart:io';

// void main() {
//   int pontosIniciais = 100;
//   int pontosRetirados;

//   print("Você tem $pontosIniciais pontos.");
//   print("Quantos pontos você gostaria de resgatar?");
//   pontosRetirados = int.parse(stdin.readLineSync()!);

// 7) Refatorando o código do clube de benefícios com função
// import 'dart:io';

// void main() {
//   int pontosIniciais = 100;
//   int pontosRetirados;

//   print("Você tem $pontosIniciais pontos.");
//   print("Quantos pontos você gostaria de resgatar?");
//   pontosRetirados = int.parse(stdin.readLineSync()!);

//   int pontosRestantes = 0;

//   void subtrairPontos(){
//     pontosRestantes = pontosIniciais - pontosRetirados;
//   }

//   subtrairPontos();

//   print("Você resgatou $pontosRetirados pontos. Pontos restantes: $pontosRestantes.");
// }
// 8) Implementando um programa de cupons
// import 'dart:io';

// void main(){
//   print('Bem-vindo ao mercado No Precinho! Digite o valor gasto:');
//   double valorGasto = double.parse(stdin.readLineSync()!);

//   int quantidadeCupons = valorGasto ~/ 50;

//   print('A quantidade de cupons que você ganhou foi: $quantidadeCupons');
// }

// Null safety -> ferramenta do dart que ajuda na proteção de valores nulos;
// tipos -> int(sem casas decimais); double(com casas decimais); bool(True ou False); String(texto); null; List;
// letra maiuscula iniciando -> tiposprimeiroNumero, segundoNumero compostos;
// leprimeiroNumero, segundoNumerotra minuscula iniciando -> tipos primitivos;
// rune(caractere unico), Map(associam chave -> valor), Set(coleções nao ordenadas e sem valores repetidos)

// // Variáveis primitivas
// int numeroInteiro = 10;
// double numeroDecimal = 3.14;
// String texto = "Este é um texto.";
// bool isAtivo = true;

// // Variáveis compostas
// List<String> nomes = ["Ana", "João", "Maria"];
// Map<String, String> agenda = {"Ana": "1234-5678", "João": "9876-5432"};
// Set<int> numerosUnicos = {1, 2, 3, 4, 3}; // O número 3 só aparece uma vez

// // Acessando valores
// print("Número inteiro: $numeroInteiro");
// print("Número decimal: $numeroDecimal");
// print("Texto: $texto");
// print("Ativo: $isAtivo");

// print("Primeiro nome da lista: ${nomes[0]}");
// print("Telefone da Ana: ${agenda['Ana']}");
// print("Números únicos no conjunto: $numerosUnicos");