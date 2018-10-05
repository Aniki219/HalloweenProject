class Sprite {
  constructor(sourceImage, numFrames, frameSpeed, sw, sh) {
    this.img = sourceImage;
    this.numFrames = numFrames || 1;
    this.frameSpeed = frameSpeed || 10;
    this.sw = sw || 64;
    this.sh = sh || 64;

    this.frame = 0;
    this.anim = 0;
  }

  animate() {
    if (frameCount % this.frameSpeed == 0) {
      this.frame++;
    }

    if (this.frame >= this.numFrames) {
        this.frame = 0;
    }
  }

  draw(x, y) {
    var sx = this.frame * this.sw;
    var sy = this.anim * this.sh;

    image(this.img, x, y, 64, 64, sx, sy, this.sw, this.sh);
    this.animate();
  }
}
