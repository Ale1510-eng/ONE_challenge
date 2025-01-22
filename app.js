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
}

// Funcion para limpiar el input
function limpiar() {
    document.getElementById('amigo').value = '';
}


