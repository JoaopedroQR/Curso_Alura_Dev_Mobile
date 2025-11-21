// conjunto de informações
// função construtura
//classes são moldes
// Métodos são funções que se encontram dentro de classes.
abstract class Conta{
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

class ContaCorrente extends Conta{
  double empretimo =  300;
  ContaCorrente(super.titular, super._saldo);
  // sobresescrita de metodo;
  @override
  void enviar(double valor){
    if(_saldo+empretimo >= valor){
      print('Transferindo');
      _saldo-=valor;
      imprimirSaldo();
    }else{
      print('Valor elevado.');
    }
  }
}

class ContaPoupanca extends Conta{
  double rendimento = 0.015;
  ContaPoupanca(super.titular, super._saldo);
  void calcularRendimento(){
    _saldo += _saldo * rendimento;
    imprimirSaldo();
  }
}

// Mixin

mixin Imposto{
  double taxa = 0.03;

  double valorTaxado(double valor){
    return  valor * taxa;
  }
}

// extends : herança
// implements : interface
// with : mixin


class ContaEmpresa extends Conta with Imposto{
  ContaEmpresa(super.titular, super._saldo);

  @override
  void enviar(double valor) {
    if(_saldo >= valor + valorTaxado(valor)){
      _saldo -= valor + valorTaxado(valor);
      imprimirSaldo();
    }
  }
  @override
  void receber(double valor) {
    _saldo += valor - valorTaxado(valor);
    imprimirSaldo();
  }
}

class ContaInvestimento extends Conta with Imposto{
  ContaInvestimento(super.titular, super._saldo);

  @override
  void enviar(double valor){
    if(_saldo >= valor + valorTaxado(valor)){
      _saldo -= valor + valorTaxado(valor);
      imprimirSaldo();
    }
  }


  @override
  void receber(double valor){
    _saldo += valor - valorTaxado(valor);
    imprimirSaldo();  
  }
}