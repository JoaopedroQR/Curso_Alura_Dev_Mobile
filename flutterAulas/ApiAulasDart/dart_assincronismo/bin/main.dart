import 'package:http/http.dart';

void main() {
  // print('Olá, Mundo!');
  requestData();
  // fetchRecipes();
}

//URIs (Uniform Resource Identifiers ou Identificadores uniformes de recursos)

void requestData(){                  //Host
  String url = 'https://gist.githubusercontent.com/JoaopedroQR/ad6ca3fbbf6dfaee0f9053b55b5c0290/raw/33de070deb83d4965a253d7c7111dfcb6660c601/accounts.json';
  Future<Response> futureResponse = get(Uri.parse(url));
  print(futureResponse);
  futureResponse.then((Response response) {
    print(response);
    print(response.body);
  },);
}

void fetchRecipes(){
  String url = 'https://gist.githubusercontent.com/JoaopedroQR/b781b69de7df8eec2007e24a718bc090/raw/5e5966846692bc52a9b2380c124b18c2aed9a40b/recipes.json';
  Future<Response> futureResponse = get(Uri.parse(url));
  futureResponse.then((Response response) {
    print(response.body);
  },);
}