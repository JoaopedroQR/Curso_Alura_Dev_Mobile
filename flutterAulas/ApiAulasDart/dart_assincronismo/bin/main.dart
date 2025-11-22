// Streams : formas de assincronismo do dart.

import 'package:dart_assincronismo/screens/account_screen.dart';

void main() {
  AccountScreen accountScreen = AccountScreen();
  accountScreen.initializeStream();
  accountScreen.runChatBot();
  // StreamSubscription streamSubscription = streamController.stream.listen((String info) {
  //   print(info);
  // },);
  // requestData();
  // requestDataAsync();
  // fetchRecipes();
  // sendDataAsync({
  //   'id': 'NEW001',
  //   'name': 'Flutter',
  //   'lastName': 'Dart',
  //   'balance': 5000
  // });
}

//URIs (Uniform Resource Identifiers ou Identificadores uniformes de recursos

// void fetchRecipes(){
//   String url = 'https://gist.githubusercontent.com/JoaopedroQR/b781b69de7df8eec2007e24a718bc090/raw/5e5966846692bc52a9b2380c124b18c2aed9a40b/recipes.json';
//   Future<Response> futureResponse = get(Uri.parse(url));
//   futureResponse.then((Response response) {
//   streamController.add('${DateTime.now()}| Requisição de leitura.');
//     // print(response.body);
//   },);
// }

