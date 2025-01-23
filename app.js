// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let botonSortear = document.getElementById('boton-sortear');
let botonAgregar = document.getElementById('boton-agregar');

//Función para agregar amigos
function agregarAmigo() {
    // Condicional para validar o añadir elementos al array
    amigo.value == ""
        ? alert("Por favor, inserte un nombre.")
        : amigos.push(amigo.value);
    amigo.value = ''; // limpiar input
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
    if (amigo.value != '') {
        if (confirm('Aún hay un amigo sin añadir, ¿deseas hacer el sorteo?')) {
            amigo.value = '';
        } else {
            return;
        }
    }
    // condicional para validar que haya amigos
    amigos != 0
        ? numeroDeAmigo = Math.floor(Math.random() * (amigos.length)) //Generar un índice aleatorio de la lista de amigos
        : alert(`Tu lista de amigos está vacía.
        Por favor introduce un nombre`);
    listaAmigos.innerHTML = ''; // remueve los elemento li
    resultado.innerHTML += amigos[numeroDeAmigo]; // Mostrar resultados
    botonSortear.setAttribute('disabled', true);
    botonSortear.setAttribute('class', 'button-draw-disabled');
    botonAgregar.setAttribute('disabled', true);
    botonAgregar.setAttribute('class', 'button-add-disabled');
    amigo.setAttribute('disabled', true);
}

function nuevoSorteo() {
    amigos = [];
    botonSortear.removeAttribute('disabled');
    amigo.removeAttribute('disabled');
    listaAmigos.innerHTML = '';
    botonSortear.setAttribute('class', 'button-draw');
    botonAgregar.setAttribute('class', 'button-add');
    resultado.innerHTML = '';
    amigo != ''
        ? botonAgregar.removeAttribute('disabled')
        : alert("Por favor, inserte un nombre.");
}





