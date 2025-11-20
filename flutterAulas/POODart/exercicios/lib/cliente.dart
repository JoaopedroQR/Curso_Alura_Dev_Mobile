class Cliente{
  String nome;
  List<int> _quartosReservados = <int>[2,7,9,15,20];
  bool _ativa = false;
  int _quartoReservado = 0;

  Cliente(this.nome);

  void reservarQuarto(int number){
    if(_quartosReservados.contains(number)){
      print('Desculpe quarto já reservado');

    }else if(_ativa){
      print('Desculpe você só pode reservar um, quarto por vez');

    }else{
      print('Reserva feita com sucesso!!!');
      _quartosReservados.add(number);
      _ativa = true;
      _quartoReservado = number;
      imprimirReservados();
    }
  }

  void cancelarReserva(int number){
    if(!(_ativa)){
      print('Desculpe, você não possue nenhuma reserva ativa!');
    }else if(_quartoReservado != number){
      print('Esse não foi o quarto reservado por você!!!');
    }else{
      _quartosReservados.remove(_quartoReservado);
      print('Reserva cancelada!!!');
      imprimirReservados();
    }
  }

  void imprimirReservados(){
    print('Os quartos já reservados são: $_quartosReservados');
  }
}
