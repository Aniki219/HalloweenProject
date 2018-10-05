var player;

function setup() {
  createCanvas(500, 500);
  player = new Player(250, 250);
}

function draw() {
  background(255);
  player.update();
}
