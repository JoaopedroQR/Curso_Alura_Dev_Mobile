let listaAmigos = [];
function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let campoLista = document.getElementById('lista-amigos');
    listaAmigos.push(` ${nomeAmigo}`);
    campoLista.textContent = listaAmigos;
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    let quantidadeAmigos = listaAmigos.length;
    let numeroSorteado;
    let listaSorteio = [];
    let historicoNumeros = [];
    
    let i = 0 
    while(i < quantidadeAmigos){
        numeroSorteado = parseInt(Math.random() * quantidadeAmigos);
        if(historicoNumeros.includes(numeroSorteado)){
            continue;
        }
        if(i == numeroSorteado){
            continue;
        }else{
            listaSorteio.push(`${listaAmigos[i]} --> ${listaAmigos[numeroSorteado]}`)
            historicoNumeros.push(numeroSorteado);
        }
        i++;
    }
    let campoSorteio = document.getElementById('lista-sorteio');

    for(i=0; i< quantidadeAmigos;i++){
        campoSorteio.innerHTML = campoSorteio.innerHTML + listaSorteio[i] + '<br>';
    }
}

function reiniciar(){
    listaAmigos = [];
    let campoSorteio = document.getElementById('lista-sorteio');
    let campoLista = document.getElementById('lista-amigos');
    campoSorteio.textContent = '';
    campoLista.textContent = '';
}
