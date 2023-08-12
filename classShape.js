class Shape {
    constructor(p, arena) {
        this.orbitRadius = tileSize * 5;
        this.rotationSpeed = p.TAU / 60;
        this.orbitSpeed = -p.TAU / 120;
        
        this.randType = p.random(10);
        this.type = this.randType < 6 ? 0 : this.randType < 9 ? 1 : 2;
        this.xPivot = p.random(-arena.innerHalfSize, arena.innerHalfSize);
        this.yPivot = p.random(-arena.innerHalfSize, arena.innerHalfSize);
        this.orbitAngle = p.random(p.TAU);
        this.rotation = shapeDefaultAngle[this.type] + p.random(p.TAU);
    }

    draw(p, arena) {
        p.strokeJoin(p.ROUND);
        p.strokeWeight(outlineWidth);
        p.fill(shapeFills[this.type]);
        p.stroke(shapeOutlines[this.type]);
        p.push();
        p.translate(
            this.xPivot + this.orbitRadius * p.cos(this.orbitAngle),
            this.yPivot + this.orbitRadius * p.sin(this.orbitAngle)
        );
        this.rotation += this.rotationSpeed / p.getTargetFrameRate();
        p.rotate(this.rotation);
        p.beginShape();
        for (let i = 0; i < shapeVertices[this.type]; i++) {
            let angle = i * p.TAU / shapeVertices[this.type];
            let scale = shapeMaxRadius[this.type] * arena.tileSize;
            p.vertex(p.sin(angle) * scale, -p.cos(angle) * scale);
        }
        p.endShape(p.CLOSE);
        p.pop();
        this.orbitAngle += this.orbitSpeed / p.getTargetFrameRate();
    }
}
