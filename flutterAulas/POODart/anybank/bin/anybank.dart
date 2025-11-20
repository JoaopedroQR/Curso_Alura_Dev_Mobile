// import 'dart:io';
// import '../lib/conta.dart';
// import 'package:anybank/conta.dart';

import 'package:anybank/conta.dart';
// control + .

// Instanciação: é o processo de criar um objeto a partir de uma classe.

void main() {
  //List<String> contas = <String>["Matheus", "Roberta"];
  //List<double> saldos = <double>[1000,1000];

  // Objeto - variável criada a partir de uma classe.
  Conta contaJoao = Conta("João", 1000);
  Conta contaRoberta = Conta("Roberta", 2000);

  List<Conta> contas = <Conta>[contaJoao, contaRoberta];

  // print(contaJoao.titular);
  // print(contaJoao.saldo);
  // print(contaRoberta.titular);
  // print(contaRoberta.saldo);
  
  for(Conta conta in contas){
    conta.imprimirSaldo();
  }
  print('');
  contaJoao.receber(500);
  print('');
  contaRoberta.receber(3000);
  contaRoberta.enviar(6000);


}
