//Array para almacenar los nombres
let amigosSecretos = []; 

//Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (amigosSecretos.includes(nombre)) {
        alert("Lo siento, ese nombre ya fue escrito.");
        return;
    }

    if (amigosSecretos.length >= 6) {
        alert("Solo puedes agregar hasta 6 amigos.");
        return;
    }

    amigosSecretos.push(nombre); // Añadir al array
    input.value = ""; // Limpiar campo

    mostrarLista(); // Llamar para actualizar lista
}

//Función para actualizar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

    for (let i = 0; i < amigosSecretos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigosSecretos[i];
        lista.appendChild(li); //Agregar a cada amigo como <li>
    }
}

//Función para sortear a los amigos
function sortearAmigo() {
    if (amigosSecretos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigosSecretos.length);
    let nombreSorteado = amigosSecretos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;

    // Ocultar lista al sortear
    document.getElementById("listaAmigos").style.display = "none";
}

// Mostrar lista al cargar
mostrarLista();
