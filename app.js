// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función para agregar amigos
function agregarAmigo() {
    //captura del valor del input
    let amigo = document.getElementById('amigo').value;
    // Condicional para validar o actualizar el array
    amigo == ""
        ? alert("Por favor, inserte un nombre.")
        : amigos.push(amigo);
    limpiar();
    asignarTextoElemento('listaAmigos');
}

// Funcion para limpiar el input
function limpiar() {
    document.getElementById('amigo').value = '';
}

function asignarTextoElemento(elemento) {
    // Obtener elemento de la lista
    let lista = document.getElementById(elemento);
    // Limpiar lista existente
    lista.innerHTML = "";
    // iteración de los elementos de la lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Añadir elementos a la lista
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}




