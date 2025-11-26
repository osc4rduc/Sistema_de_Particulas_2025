class Particula {
  constructor(x, y) {
    this.pos = createVector(x, y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(1, 2));

    this.tVida = int(random(100, 500));
    this.tVidaInicial = this.tVida;
    this.estaMuerta = false;

    this.diam = random(5, 15);

    this.colorInicial = color(200, 200, 0);
    this.colorFinal = color(200, 0, 0);
  }

  update() {
    if (!this.estaMuerta) {
      this.pos.add(this.vel);
      this.vel.rotate(-0.1);
      this.tVida -= 1;
    }

    if (this.tVida <= 0 && !this.estaMuerta) {
      this.estaMuerta = true;
    }
  }

  display() {
    noStroke();

    //cambio de color
    let vidaNorm = map(this.tVida, 0, this.tVidaInicial, 1, 0);
    let c = lerpColor(this.colorInicial, this.colorFinal, vidaNorm);

    this.diamFinal = map(this.tVida, 0, this.tVidaInicial, 0, this.diam);

    // brillo extra
    fill(red(c), green(c), blue(c), 40);
    circle(this.pos.x, this.pos.y, this.diamFinal * 2.5);

    fill(c);
    circle(this.pos.x, this.pos.y, this.diamFinal);
  }
}
