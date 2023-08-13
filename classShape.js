class Shape {
    static fills = ["rgb(255, 230, 105)", "rgb(250, 120, 120)", "rgb(120, 140, 250)", "rgb(140, 255, 105)", "rgb(235, 120, 220)"];
    static outlines = ["rgb(190, 175, 80)", "rgb(190, 90, 90)", "rgb(90, 105, 190)", "rgb(100, 190, 80)", "rgb(180, 90, 165)"];
    static vertices = [4, 3, 5];
    static maxRadiusScale = [1, 1, 1.5];
    static probability = [50, 90, 100];

    constructor(p, arena) {
        const rand = p.random(Shape.probability[Shape.probability.length - 1]);
        for (let i = 0; i < Shape.probability.length; i++) {
            if (rand <= Shape.probability[i]) {
                this.type = i;
                break;
            }
        }
        this.orbit = {
            x: arena.size.inner.px.half * p.random(-1, 1),
            y: arena.size.inner.px.half * p.random(-1, 1),
            rad: arena.size.tile * 5,
            angle: p.random(p.TAU),
            vel: p.TAU / p.getTargetFrameRate() / 240 * (p.floor(p.random(2)) * 2 - 1)
        };
        this.spin = {
            angle: p.random(p.TAU),
            vel: this.orbit.vel * 2,
            maxRad: Shape.maxRadiusScale[this.type] * arena.size.tile,
        };
        this.pos = {
            x: this.orbit.x + this.orbit.rad * p.cos(this.orbit.angle),
            y: this.orbit.y + this.orbit.rad * p.sin(this.orbit.angle)
        };
    }

    calcInteract(p, arena, shapes) {

    }

    moveDraw(p) {
        this.spin.angle = (this.spin.angle + this.spin.vel) % p.TAU;
        this.orbit.angle = (this.orbit.angle + this.orbit.vel) % p.TAU;
        this.pos.x = this.orbit.x + this.orbit.rad * p.cos(this.orbit.angle);
        this.pos.y = this.orbit.y + this.orbit.rad * p.sin(this.orbit.angle);

        p.strokeJoin(p.ROUND);
        p.strokeWeight(globalOutlineWidth);
        p.fill(Shape.fills[this.type]);
        p.stroke(Shape.outlines[this.type]);
        p.push();
        p.beginShape();
        for (let i = 0; i < Shape.vertices[this.type]; i++) {
            let angle = i * p.TAU / Shape.vertices[this.type];
            p.vertex(
                this.pos.x + this.spin.maxRad * p.cos(angle + this.spin.angle),
                this.pos.y + this.spin.maxRad * p.sin(angle + this.spin.angle),
            );
        }
        p.endShape(p.CLOSE);
        p.pop();
    }
}
