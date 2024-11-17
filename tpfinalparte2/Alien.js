class Alien {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.vida = true;
  }

  dibujar() {
    if (this.vida) {
      this.mover();
      image(imgAlien, this.posX - 20, this.posY - 20, 80, 80);
    }
  }

  mover() {
    if (this.vida) {
      this.posY += this.velocidad || 1;

      if (this.posY > height) {
        this.reaparecer();
      }
    }
  }

  reaparecer() {
    this.posX = random(0, width);
    this.posY = random(-200, 0);
  }

  aumentarVelocidad() {
    this.velocidad = (this.velocidad || 1) + 0.5;
  }

  fueDisparado(bala) {
    if (this.vida && dist(this.posX, this.posY, bala.posX, bala.posY) < 25) {
      this.vida = false;
      return true;
    }
    return false;
  }
}
