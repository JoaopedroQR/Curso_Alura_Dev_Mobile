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


// 1) Imprimindo números no terminal
// void main(){
//   for(var i=0; i<5; i++){
//     print(i+1);
//   }
// }

// 2) Mostrando nomes no terminal
// void main(){
//   List<String> nomes = <String>['joao','maria', 'Ana'];
//   for(var nome in nomes){
//     print('Nome : $nome');
//   }
// }

// 3) Em busca da parada
// void main(){
//   String frase = 'Parou! Este código não continua';
//   int i = 0;
//   String letra = '';
//   do{
//     letra = frase[i];
//     print(letra);
//     i++;
//   }while(letra != '!');
// }

// 1) Crie a lista para armazenar os nomes dos alunos e suas notas
import 'dart:io';
void main(){
  List<List> alunos = <List>[[],[],[],[]];
  menu(alunos);

}

void menu(List<List> alunos){
  String? comando = '';

  comando = getComando();

  switch(comando){
    case '1':
      adicionarAlunos(alunos);
      menu(alunos);
    case '2':
      if(alunos[0].length == alunos[1].length){
        print('Numero de alunos insuficiente para se adicionar nova nota');
        menu(alunos);
      }
      adicionarNotas(alunos);
      menu(alunos);

    case '3':
      if(alunos[1].isEmpty){
        print('Não existem notas para serem calculadas a média ainda.');
        menu(alunos);
      }
      calcularMedias(alunos);
      print('Médias calculadas!!');
      menu(alunos);

    case '4':
      if(alunos[1].isEmpty){
        print('Sem médias por enquanto, adicione as notas!');
        menu(alunos);
      }
      mostrarLista(alunos);
      menu(alunos);

    case '5':
      print('Saindo...');

  }

}

void mostrarLista(List<List> alunos){
  for(var i = 0; i<alunos[1].length; i++){
    print('Aluno: ${alunos[0][i]}');
    print('Nota1: ${alunos[1][i]}');
    print('Nota2: ${alunos[2][i]}');
    print('Média: ${alunos[3][i]}');
    print('');
  }
}

List<List> calcularMedias(List<List> alunos){
  alunos[3] = [];
  for(var i=0; i<alunos[1].length; i++){
    alunos[3].add((alunos[1][i] + alunos[2][i])/2);
  }

  return alunos;
}

String getComando(){

  List<String> comandos = <String>['1','2','3','4','5'];
  String? comando = '';

  print('');
  print('Digite o que deseja fazer:');
  print('[1] - Adicionar aluno');
  print('[2] - Adicionar nota');
  print('[3] - Média das notas');
  print('[4] - Mostrar Lista');
  print('[5] - Sair');
  print('');

  comando = stdin.readLineSync();
  if(comando == null || !(comandos.contains(comando))){
    print('Operação inválida!');
    return getComando();
  }

  return comando;
}

List<List> adicionarNotas(List<List>alunos){

  String? entrada = '';
  int nota = 0;
  int i = 0;

  while(i<2){
    print('Digite a nota ${i+1}:');
    entrada = stdin.readLineSync();
    if(entrada != null){
      if(entrada != ''){
        nota = int.parse(entrada);
        alunos[i+1].add(nota);
        i++;
        continue;
      }
    }
    print('Digite uma nota Válida!!');
  }



  return alunos;
}

List<List> adicionarAlunos(List<List> alunos){
  
  String? entrada = '';

  print('Digite o nome do aluno:');

  entrada = stdin.readLineSync();

  if(entrada == null || entrada.isEmpty){
    print('entrada inválida');
    adicionarAlunos(alunos);
  }else{
    alunos[0].add(entrada);
  }

 return alunos; 
}

// import 'dart:io';
// 1) Validação de categorias de produtos em um sistema de estoque
// void main(){
//   List<String> categorias = <String>["eletronicos", "alimentos", "vestuario", "livros"];
//   String categoria = '';
//   String? entrada = '';

//   void getEntrada(){
//     print('Digite a categoria do produto${categorias.toString()}:');
//     entrada = stdin.readLineSync();
//     if(entrada != null){
//       if(categorias.contains(entrada)){
//         categoria = entrada!;
//       }else{
//         print('Categoria inválida!');
//         getEntrada();
//       }
//     }
//   }

//   getEntrada();

//   switch(categoria){
//     case 'eletronicos':
//       print('Categoria válida: eletronicos');
//     case 'alimentos':
//       print('Categoria válida: alimentos');
//     case 'vestuario':
//       print('Categoria válida: vestuario');
//     case 'livros':
//       print('Categoria válida: livros');
//   }
// }

// 2) Validação de tipos de arquivos em um sistema de upload
// void main(){
//   List<String> tipos = <String>["pdf", "jpg", "png", "docx"];
//   String tipo = '';
//   String? entrada = '';

//   void getEntrada(){
//     print('Digite a categoria do produto${tipos.toString()}:');
//     entrada = stdin.readLineSync();
//     if(entrada != null){
//       if(tipos.contains(entrada)){
//         tipo = entrada!;
//       }else{
//         print('Categoria inválida!');
//         getEntrada();
//       }
//     }
//   }

//   getEntrada();

//   switch(tipo){
//     case 'pdf':
//       print('Categoria válida: pdf');
//     case 'jpg':
//       print('Categoria válida: jpg');
//     case 'png':
//       print('Categoria válida: png');
//     case 'docx':
//       print('Categoria válida: docx');
//   }
// }

// 3) Dando uma nova chance no retorno de mês
// void main(){
//   List<String> meses = <String>['1','2','3','4','5','6','7','8','9','10','11','12'];
//   int mes = 0; 
//   String? entrada = '';

//   void getEntrada(){
//     print('Digite um número de 1 a 12');
//     entrada = stdin.readLineSync();
//     if(entrada != null){
//       if(entrada != ''){
//         if(meses.contains(entrada)){
//           mes = int.parse(entrada!);
//         }else{
//           print('Número inválido!');
//           getEntrada();
//         }
//       }
//     }
//   }
//   getEntrada();

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

// 4) Criando a função de depósito e fazendo sua validação
// double saldo = 1000.0; // Saldo inicial em reais
// void main() {
//   List<String> operacoes = <String>["deposito", "retirada", "transferencia", "pagamento"];
//   double valorPix = 0;
//   String operacao = '';
//   String? entrada = '';

//   print('Boas-vindas ao seu banco digital!');
//   print('Seu saldo atual é de: R\$${saldo.toStringAsFixed(2)}');

//   void getEntradaOperacao(){
//     print('Digite uma operação ${operacoes.toString()}:');
//     entrada = stdin.readLineSync();
//     if(entrada != null){
//       if(operacoes.contains(entrada)){
//         operacao = entrada!;
//       }else{
//         print('operação inválida que não existe na lista! Tente novamente.');
//         getEntradaOperacao();
//       }
//     }
//   }

//   void getEntradaValor(){
//     print('Digite o valor da operação:');
//     entrada = stdin.readLineSync();
//     if(entrada != null){
//       if(entrada != ''){
//         valorPix = double.parse(entrada!);
//         if(valorPix>=0){
          
//         }else{
//           print('Valor negativo! Tente novamente.');
//           getEntradaValor();
//         }
//       }
//     }else{
//       print('Valor inválido! Tente novamente.');
//       getEntradaValor();
//     }
//   }

//   getEntradaOperacao();

//   switch(operacao){
//     case 'deposito':
//       getEntradaValor();
//       saldo += valorPix;
//       print('Operação realizada!'); 
//       print('Operação escolhida: $operacao, Valor: $valorPix'); 
//       print('Valor final: R\$$saldo');
//     case 'retirada':
//       getEntradaValor();
//       if(valorPix <= saldo){
//         saldo -= valorPix;
//         print('Operação realizada!');
//         print('Operação escolhida: $operacao, Valor: $valorPix');
//         print('Valor restante: R\$$saldo');
//       }else{
//         print('Saldo insuficiente');
//       }
//     case 'transferencia':
//       getEntradaValor();
//       print('Operação realizada!');
//       print('Operação escolhida: $operacao, Valor: $valorPix');
//     case 'pagamento':
//       getEntradaValor();
//       print('Operação realizada!');
//       print('Operação escolhida: $operacao, Valor: $valorPix');
//   }
// }

// 5) Validação de métodos de pagamento em uma plataforma de e-commerce
// void main(){
//   List<String> metodos = <String>["cartao", "boleto", "paypal", "pix"];
//   String metodo = '';
//   String? entrada = '';

//   void getEntrada(){
//     print('Digite a categoria do produto${metodos.toString()}:');
//     entrada = stdin.readLineSync();
//     if(entrada != null){
//       if(metodos.contains(entrada)){
//         metodo = entrada!;
//       }else{
//         print('Categoria inválida!');
//         getEntrada();
//       }
//     }
//   }

//   getEntrada();

//   switch(metodo){
//     case 'cartao':
//       print('Categoria válida: cartao');
//     case 'boleto':
//       print('Categoria válida: boleto');
//     case 'paypal ':
//       print('Categoria válida: paypal ');
//     case 'pix':
//       print('Categoria válida: pix');
//   }
// }
