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