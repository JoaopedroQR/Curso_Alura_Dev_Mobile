// void main(){
//   Receita boloMole = Receita('Bolo Mole', 10);
//   Receita strogonoff = Receita('Strogonoff', 14);
//   Receita pudim = Receita('Pudim', 7);
//   List<Receita> receitas = <Receita>[boloMole,strogonoff,pudim];

//   for(Receita receita in receitas){
//     print(receita.nome);
//     print(receita.preco);
//   }

// }

// class Receita{
//   String nome;
//   double preco;

//   Receita(this.nome, this.preco);
// }

// 1. Criando uma classe para itens de estoque

// 2. Implementando operações de entrada e saída de estoque

// 3. Gerenciando múltiplos itens de estoque

// 4. Atualizando o preço dos itens

// void main(){

//   Estoque smartphone = Estoque('Smartphone', 100, 2000);
//   Estoque notebook = Estoque('Notebook', 50, 3000);
//   Estoque mouse = Estoque('mouse', 150, 100);

//   List<Estoque> itens = <Estoque>[smartphone, notebook, mouse];

//   for(Estoque item in itens){
//     print('Produto: ${item.produto}, Quantidade em estoque: ${item.quantidade}. Preço do produto: ${item.preco}');
//   }

//   print('');


//   smartphone.adicionar(20);
//   notebook.remover(10);
//   mouse.alterar(90);

//   for(Estoque item in itens){
//     print('Produto: ${item.produto}, Quantidade em estoque: ${item.quantidade}. Preço do produto: ${item.preco}');
//   }

// }

// class Estoque{
//   String produto;
//   int quantidade;
//   double preco;

//   Estoque(this.produto, this.quantidade, this.preco);

//   void adicionar(int unidades){
//     quantidade +=  unidades;
//   }
//   void remover(int unidades){
//     if(quantidade>=unidades){
//       quantidade -= unidades;
//     }else{
//       print('Quantidade insuficiente em estoque para realizar a saída');
//     }
//   }
//   void alterar(double precoN){
//     preco = precoN;
//   }

// }

// 1. Criando uma classe de cliente
// 2. Realizando uma reserva de quarto

import 'package:exercicios/cliente.dart';

void main(){
  Cliente joaquim = Cliente('Joaquim');

  joaquim.imprimirReservados();
  print('');
  joaquim.cancelarReserva(20);
  print('');
  joaquim.reservarQuarto(20);
  print('');
  joaquim.reservarQuarto(3);
  print('');
  joaquim.reservarQuarto(4);
  print('');
  joaquim.cancelarReserva(20);
  print('');
  joaquim.cancelarReserva(3);


}

