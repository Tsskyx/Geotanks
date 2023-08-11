class Shape {
    constructor() {

    }

    draw() {

    }
}

/*

function Shape() {
    this.fills = [
      color(255, 230, 105),
      color(250, 120, 120),
      color(120, 140, 250),
      color(140, 255, 105),
      color(235, 120, 220)
    ];
    this.outlines = [
      color(190, 175, 80),
      color(190, 90, 90),
      color(90, 105, 190),
      color(100, 190, 80),
      color(180, 90, 165)
    ];
    this.numVertices = [4, 3, 5];
    this.maxRadius = [1, 1, 1.5];
    this.defaultRotation = [TAU / 8, 0, 0];
    
    this.orbitRadius = arena.edgeHalfSize;
    this.rotationSpeed = TAU / 60;
    this.orbitSpeed = -TAU / 120;
    
    this.randType = random(10);
    this.type = this.randType < 6 ? 0 : this.randType < 9 ? 1 : 2;
    this.xPivot = random(-arena.innerHalfSize, arena.innerHalfSize);
    this.yPivot = random(-arena.innerHalfSize, arena.innerHalfSize);
    this.orbitAngle = random(TAU);
    this.rotation = this.defaultRotation[this.type] + random(TAU);
    
    this.draw = function() {
      this.x = this.xPivot + this.orbitRadius * cos(this.orbitAngle);
      this.y = this.yPivot + this.orbitRadius * sin(this.orbitAngle);
      strokeJoin(ROUND);
      strokeWeight(outlineWidth);
      fill(this.fills[this.type]);
      stroke(this.outlines[this.type]);
      push();
      translate(this.x, this.y);
      this.rotation += this.rotationSpeed / getTargetFrameRate();
      rotate(this.rotation);
      beginShape();
      for (let i = 0; i < this.numVertices[this.type]; i++) {
        let angle = i * TAU / this.numVertices[this.type];
        let scale = this.maxRadius[this.type] * arena.tileSize;
        vertex(sin(angle) * scale, -cos(angle) * scale);
      }
      endShape(CLOSE);
      pop();
      this.orbitAngle += this.orbitSpeed / getTargetFrameRate();
    }
  }

*/
