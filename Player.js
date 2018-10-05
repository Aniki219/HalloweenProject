var register = {};

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xvel = 0;
    this.yvel = 0;

    this.sprite = new Sprite(witchImg, 2);
  }

  draw() {
    this.sprite.draw(this.x, this.y);
  }

  move() {
    this.xvel *= 0.95;
    this.yvel *= 0.95;

    if (register[LEFT_ARROW]) {
      this.xvel -= .25;
      if (this.xvel >= 0) {
        this.sprite.anim = 4;
      } else {
        this.sprite.anim = 0;
      }
    }
    if (register[RIGHT_ARROW]) {
      this.xvel += .25;

      if (this.xvel <= 0) {
        this.sprite.anim = 4;
      } else {
        this.sprite.anim = 1;
      }
    }
    if (register[DOWN_ARROW]) {
      this.yvel += .25;
    }
    if (register[UP_ARROW]) {
      this.yvel -= .25;
    }

    if (this.yvel < -6) {this.yvel = -6}
    if (this.yvel > 6) {this.yvel = 6}
    if (this.xvel < -6) {this.xvel = -6}
    if (this.xvel > 6) {this.xvel = 6}

    if (this.xvel == 0 && this.yvel == 0) {
      this.sprite.frameSpeed = 30;
    } else {
      this.sprite.frameSpeed = 10;
      this.x += round(this.xvel);
      this.y += round(this.yvel);
    }

  }

  update() {
    this.draw();
    this.move();
  }
}

function keyPressed() {
  register[keyCode] = true;
}

function keyReleased() {
  register[keyCode] = false;
}
