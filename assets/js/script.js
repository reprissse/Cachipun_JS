// Función que determina el ganador del juego
function logicaJuego(decisionUsuario, decisionComputador) {
    if (decisionUsuario === decisionComputador) {
        console.log("EMPATE, ambos eligieron " + decisionUsuario);
    } else if (
        (decisionUsuario === "piedra" && decisionComputador === "papel") ||
        (decisionUsuario === "papel" && decisionComputador === "tijera") ||
        (decisionUsuario === "tijera" && decisionComputador === "piedra")
    ) {
        console.log(decisionUsuario + " vs " + decisionComputador + " GANA el computador");
    } else {
        console.log(decisionUsuario + " vs " + decisionComputador + " GANA el usuario");
    }
}


// Pregunta al usuario cuántas veces quiere jugar
const jugadas = parseInt(prompt("¿Cuántas veces quieres jugar?"));

// Mensaje de inicio
console.log("¡Comencemos el juego!");

// Repite el juego según la cantidad de veces elegida
for (let i = 0; i < jugadas; i++) {
    const decisionUsuario = prompt("¿Piedra, papel o tijera?");
    const decisionComputador = eleccionAleatoria();
    logicaJuego(decisionUsuario, decisionComputador);
}

// Función que elige aleatoriamente entre piedra, papel o tijera
function eleccionAleatoria() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}