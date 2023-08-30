function handleCollision(player, ball) {
    const playerCenterX = player.x + player.width / 2;
    const playerCenterY = player.y + player.height / 2;
  
    const ballCenterX = ball.x;
    const ballCenterY = ball.y;
  
    const deltaX = ballCenterX - playerCenterX;
    const deltaY = ballCenterY - playerCenterY;
  
    // Calcula el ángulo de impacto
    const angle = Math.atan2(deltaY, deltaX);
  
    // Calcula la nueva velocidad de la pelota después del impacto (puedes ajustar este valor)
    const ballSpeed = 5; // por ejemplo
    ball.vx = ballSpeed * Math.cos(angle);
    ball.vy = ballSpeed * Math.sin(angle);
  }
  
  
  function checkCollision(obj1, obj2) {
      if (
        obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y
      ) {
        return true; // Colisión detectada
      }
      return false; // No hay colisión
  }
  
  function checkCollisionSquareCircle(square, circle) {
    const circleDistanceX = Math.abs(circle.x - square.x - square.width / 2);
    const circleDistanceY = Math.abs(circle.y - square.y - square.height / 2);
  
    if (circleDistanceX > (square.width / 2 + circle.radius)) {
      return false;
    }
    if (circleDistanceY > (square.height / 2 + circle.radius)) {
      return false;
    }
  
    if (circleDistanceX <= square.width / 2) {
      return true;
    }
    if (circleDistanceY <= square.height / 2) {
      return true;
    }
  
    const cornerDistanceSq = Math.pow(circleDistanceX - square.width / 2, 2) +
                            Math.pow(circleDistanceY - square.height / 2, 2);
  
    return cornerDistanceSq <= Math.pow(circle.radius, 2);
  }