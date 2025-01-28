//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Criar uma lista para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    // Pegar o valor do campo de texto
    let campoInput = document.getElementById("amigo");
    let nome = campoInput.value.trim(); // Tirar os espaços extras

    // Verificar se o nome não está vazio
    if (nome !== "") {
        amigos.push(nome); // Adicionar o nome na lista
        mostrarLista(); // Atualizar a lista na tela
        campoInput.value = ""; // Limpar o campo de texto
    } else {
        alert("Por favor, digite um nome."); // Mostrar mensagem se o campo estiver vazio
    }
}

// Função para mostrar a lista de amigos
function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpar a lista antes de mostrar novamente

    // Adicionar cada nome na lista do HTML
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Criar um item de lista
        item.textContent = amigos[i]; // Adicionar o nome no item
        listaHTML.appendChild(item); // Colocar o item na lista
    }
}

// Função para sortear o amigo secreto da pessoa que clicou
function sortearAmigo() {
    // Verificar se há pelo menos 2 nomes na lista
    if (amigos.length < 2) {
        alert("Você precisa de pelo menos 2 nomes para o sorteio.");
        return;
    }

    // Sortear um nome aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar apenas o nome sorteado na tela
    mostrarResultado(amigoSorteado);
}

// Função para mostrar apenas o nome sorteado
function mostrarResultado(nomeSorteado) {
    let listaHTML = document.getElementById("resultado");
    listaHTML.innerHTML = ""; // Limpar os resultados anteriores

    let item = document.createElement("li"); // Criar um item de lista
    item.textContent = `Você tirou: ${nomeSorteado}`; // Mostrar o nome sorteado
    listaHTML.appendChild(item); // Adicionar o item na lista
}
