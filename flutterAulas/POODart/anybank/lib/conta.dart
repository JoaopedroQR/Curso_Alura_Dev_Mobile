// conjunto de informações
// função construtura
//classes são moldes
// Métodos são funções que se encontram dentro de classes.
class Conta{
  String titular;
  double _saldo;
  Conta(this.titular,this._saldo);

  void receber(double valor){
    _saldo += valor;
    print('Transferindo...');
    imprimirSaldo();
  }

  void enviar(double valor){
    print('Transferindo...');
    if(valor<= _saldo){
      _saldo -= valor;
      imprimirSaldo();
    }else{
      print('Quantidade insuficiente!!');
    }
  }
  void imprimirSaldo(){
    print('O saldo atual de $titular é R\$$_saldo');
  }

  double getSaldo(){
    return _saldo;
  }
}