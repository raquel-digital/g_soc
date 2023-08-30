function updateBall(){

    ball.x += ball.vx
    ball.y += ball.vy

    if(ball.vx > 0 || ball.vy > 0){
      ball.vx -= ball.drag
      ball.vy -= ball.drag
    }

    if(ball.vx <= 0){
      ball.vx = 0
    }
    if(ball.vy <= 0){
      ball.vy = 0
    }

    ctx.beginPath(); // Iniciar el trazado del círculo
    ctx.arc(ball.x,  ball.y, ball.radius, 0, Math.PI * 2); // Parámetros: x, y, radio, ángulo inicial, ángulo final
    ctx.fillStyle = "blue"; // Color de relleno
    ctx.fill(); // Rellenar el círculo con el color

    // Dibujar un borde alrededor del círculo
    ctx.strokeStyle = "black"; // Color del borde
    ctx.lineWidth = 2; // Ancho del borde
    ctx.stroke(); // Dibujar el borde
}

function updateSquarePosition() {
    if (keys.ArrowUp) {
      p.y -= 5;
    }
    if (keys.ArrowDown) {
      p.y += 5;
    }
    if (keys.ArrowLeft) {
      p.x -= 5;
    }
    if (keys.ArrowRight) {
      p.x += 5;
    }
    // Dibujar el cuadrado en la posición inicial
    ctx.fillStyle = "red";
    ctx.fillRect(p.x, p.y, p.size, p.size);
  }