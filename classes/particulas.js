class Particula {
  constructor(x, y) {
    this.pos = createVector(x, y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(1, 2));

    this.tVida = int(random(100, 500));
    this.tVidaInicial = this.tVida;
    this.estaMuerta = false;
    this.diam = random(5, 15);
    this.color = random(0, 200, 100);
  }
  update() {
    if (!this.estaMuerta) {
      this.pos.add(this.vel);
      this.vel.rotate(random(-0.1, 0.2));
      this.tVida -= 1;
    }
    if (this.tVida <= 0 && !this.estaMuerta) {
      this.estaMuerta = true;
    }
  }
  display() {
    noStroke();

    this.colorFinal = map(this.tVida, this.tVidaInicial, 0, this.color, 0);

    this.diamFinal = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);

    circle(this.pos.x, this.pos.y, this.diamFinal);
  }
}
