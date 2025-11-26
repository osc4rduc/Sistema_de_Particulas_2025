let sp = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 50);

  for (let i = 0; i < sp.length - 1; i++) {
    noFill();
    stroke(0, random(0, 200), random(0, 200));
    line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
  }
  for (const [index, particula] of sp.entries()) {
    particula.update();
    particula.display();
    if (particula.estaMuerta) {
      sp.splice(index, 1);
    }
  }
  let np = new Particula(mouseX, mouseY);
  sp.push(np);
}
function mouseClicked() {
  let np = new Particula(mouseX, mouseY);
  sp.push(np);
}
