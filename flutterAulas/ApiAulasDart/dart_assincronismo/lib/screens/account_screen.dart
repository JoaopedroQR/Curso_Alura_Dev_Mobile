import 'dart:io';

import 'package:dart_assincronismo/models/account.dart';
import 'package:dart_assincronismo/services/account_service.dart';

class AccountScreen {
  AccountService _accountService = AccountService();

  void initializeStream(){
    _accountService.streamInfos.listen((event){
      print(event);
      },
    );
  }
  void runChatBot()async{
    print('Bom dia, eu sou um ChatBot');
    print('Que bom ter voce aqui!');
    bool isRunning = true;
    while(isRunning){
      print('Como eu posso te ajudar? (Digite o numero desejado)');
      print('1 - ver todas as contas');
      print('2- Adicionar nova conta');
      print('3- Sair\n');

    String? input = stdin.readLineSync();

    if(input!= null){
      switch(input){
        case '1':
          {
            await _getAllAccounts();
            break;
          }
        
        case '2':
          {
            await _addExempleAccount();
            break;
          }
        
        case '3':
          {
            isRunning=false;
            print('Te vejo na proxima.');
            break;
          }
        default:
          {
            print('Não entendi. Tente novamente');
          }
        
      }
    }
    }

  }

  _getAllAccounts() async{
    List<Account> listAccounts =  await _accountService.getAll();
    print(listAccounts);
  }

  _addExempleAccount() async{
    Account example = Account(id: 'ID555', name: 'HALEY', lastName: 'Chirivia', balance: 8001.10);

    await _accountService.addAccount(example);
  }
}