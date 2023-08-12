class Arena {
    constructor(tileSize, arenaSize, arenaEdgeSize) {
        this.tileSize = tileSize;
        this.innerTileHalfCount = arenaSize;
        this.edgeTileHalfCount = arenaEdgeSize;
        
        this.innerTileCount = this.innerTileHalfCount * 2;
        this.arenaTileHalfCount = this.innerTileHalfCount + this.edgeTileHalfCount;
        this.arenaTileCount = this.arenaTileHalfCount * 2;
        this.totalTileHalfCount = this.arenaTileHalfCount + outerTileHalfCount;
        this.totalTileCount = this.totalTileHalfCount * 2;

        this.innerHalfSize = this.innerTileHalfCount * this.tileSize;
        this.edgeHalfSize = this.edgeTileHalfCount * this.tileSize;
        this.outerHalfSize = outerTileHalfCount * this.tileSize;
        this.innerSize = this.innerTileCount * this.tileSize;
        this.arenaHalfSize = this.arenaTileHalfCount * this.tileSize;
        this.arenaSize = this.arenaTileCount * this.tileSize;
        this.totalHalfSize = this.totalTileHalfCount * this.tileSize;
        this.totalSize = this.totalTileCount * this.tileSize;
    }

    draw(p) {
        p.strokeJoin(p.MITER);
        p.strokeWeight(gridLineThickness * 2);
        p.background(darkBackColor);
        p.fill(lightBackColor);
        p.noStroke();
        p.rect(-this.innerHalfSize, -this.innerHalfSize, this.innerHalfSize, this.innerHalfSize);
        p.stroke(darkGridColor);
        for (let i = 0; i <= this.totalTileCount; i++) {
            p.line(-this.totalHalfSize, -this.totalHalfSize + i * this.tileSize, this.totalHalfSize, -this.totalHalfSize + i * this.tileSize);
            p.line(-this.totalHalfSize + i * this.tileSize, -this.totalHalfSize, -this.totalHalfSize + i * this.tileSize, this.totalHalfSize);
        }
        p.stroke(lightGridColor);
        for (let i = 0; i <= this.innerTileCount; i++) {
            p.line(-this.innerHalfSize, -this.innerHalfSize + i * this.tileSize, this.innerHalfSize, -this.innerHalfSize + i * this.tileSize);
            p.line(-this.innerHalfSize + i * this.tileSize, -this.innerHalfSize, -this.innerHalfSize + i * this.tileSize, this.innerHalfSize);
        }
        if (showArenaBorder) {
            p.noFill();
            p.stroke(arenaBorderColor);
            p.rect(-this.arenaHalfSize, -this.arenaHalfSize, this.arenaHalfSize, this.arenaHalfSize);
        }
    }
}