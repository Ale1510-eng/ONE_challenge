// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función para agregar amigos
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value; //captura del valor del input
    // Condicional para validar o añadir elementos al array
    amigo == ""
        ? alert("Por favor, inserte un nombre.")
        : amigos.push(amigo);
    document.getElementById('amigo').value = ''; // limpiar input
    actualizarListaAmigos('listaAmigos');
}


function actualizarListaAmigos(elemento) {
    let lista = document.getElementById(elemento); // Obtener elemento de la lista
    lista.innerHTML = ""; // Limpiar lista existente
    // iteración de los elementos de la lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;// Añadir elementos a la lista de amigos
    }
}


// función para sortear a amigo
function sortearAmigo() {
    let numeroDeAmigo = 0;
    // condicional para validar que haya amigos
    amigos != 0
        ? numeroDeAmigo = Math.floor(Math.random() * (amigos.length)) //Generar un índice aleatorio de la lista de amigos
        : alert(`Tu lista de amigos está vacía.
        Por favor introduce un nombre`);
    document.getElementById('listaAmigos').innerHTML = ''; // remueve los elemento li
    document.getElementById('resultado').innerHTML = amigos[numeroDeAmigo]; // Mostrar resultados
}





