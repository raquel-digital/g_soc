const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Objeto para almacenar el estado de las teclas
const keys = {};

// Escuchar eventos de teclado
document.addEventListener("keydown", function(event) {
  keys[event.key] = true;
});

document.addEventListener("keyup", function(event) {
  keys[event.key] = false;
});

// Bucle del juego
function gameLoop() {
  // Borrar el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Actualizar posición del cuadrado
  updateSquarePosition();
  // Actualizar pelota
  updateBall()

  if(checkCollisionSquareCircle(p, ball)){
    handleCollision(p, ball)
  }
  
  requestAnimationFrame(gameLoop);
}

// Iniciar el bucle del juego
gameLoop();