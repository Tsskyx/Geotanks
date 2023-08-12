class Player {
    constructor() {
        this.speedMultiplier = 5;
        this.pos = [0, 0];
        this.vel = [0, 0];
        this.acc = [0, 0];
        this.move = [0, 0, 0, 0];
    }

    draw(p, arena) {
        this.pos[0] = p.constrain(this.pos[0] + (this.move[3] - this.move[1]) * this.speedMultiplier, -arena.arenaHalfSize, arena.arenaHalfSize);
        this.pos[1] = p.constrain(this.pos[1] + (this.move[2] - this.move[0]) * this.speedMultiplier, -arena.arenaHalfSize, arena.arenaHalfSize);
    }
}
