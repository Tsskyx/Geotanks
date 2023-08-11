class Arena {
    constructor() {

    }

    draw() {
        // x = constrain(x + (vR - vL) * speed, -arena.arenaHalfSize, arena.arenaHalfSize);
        // y = constrain(y + (vU - vD) * speed, -arena.arenaHalfSize, arena.arenaHalfSize);
    }
}

/*

function Arena(tileSize, innerTileHalfCount, edgeTileHalfCount) {
    this.lightBackColor = 205;
    this.lightGridColor = 195;
    this.darkBackColor = 185;
    this.darkGridColor = 175;
    this.arenaBorderColor = 100;
    
    this.outerTileHalfCount = 40;
    
    this.tileSize = tileSize;
    this.innerTileHalfCount = innerTileHalfCount;
    this.edgeTileHalfCount = edgeTileHalfCount;
  
    this.innerTileCount = this.innerTileHalfCount * 2;
    this.arenaTileHalfCount = this.innerTileHalfCount + this.edgeTileHalfCount;
    this.arenaTileCount = this.arenaTileHalfCount * 2;
    this.totalTileHalfCount = this.arenaTileHalfCount + this.outerTileHalfCount;
    this.totalTileCount = this.totalTileHalfCount * 2;
  
    this.innerHalfSize = this.innerTileHalfCount * this.tileSize;
    this.edgeHalfSize = this.edgeTileHalfCount * this.tileSize;
    this.outerHalfSize = this.outerTileHalfCount * this.tileSize;
    this.innerSize = this.innerTileCount * this.tileSize;
    this.arenaHalfSize = this.arenaTileHalfCount * this.tileSize;
    this.arenaSize = this.arenaTileCount * this.tileSize;
    this.totalHalfSize = this.totalTileHalfCount * this.tileSize;
    this.totalSize = this.totalTileCount * this.tileSize;
  
    this.draw = function() {
      strokeJoin(MITER);
      strokeWeight(1);
      background(this.darkBackColor);
      fill(this.lightBackColor);
      noStroke();
      rect(-this.innerHalfSize, -this.innerHalfSize, this.innerHalfSize, this.innerHalfSize);
      stroke(this.darkGridColor);
      for (let i = 0; i <= this.totalTileCount; i++) {
        line(-this.totalHalfSize, -this.totalHalfSize + i * this.tileSize,
             this.totalHalfSize, -this.totalHalfSize + i * this.tileSize);
        line(-this.totalHalfSize + i * this.tileSize, -this.totalHalfSize,
             -this.totalHalfSize + i * this.tileSize, this.totalHalfSize);
      }
      stroke(this.lightGridColor);
      for (let i = 0; i <= this.innerTileCount; i++) {
        line(-this.innerHalfSize, -this.innerHalfSize + i * this.tileSize,
             this.innerHalfSize, -this.innerHalfSize + i * this.tileSize);
        line(-this.innerHalfSize + i * this.tileSize, -this.innerHalfSize,
             -this.innerHalfSize + i * this.tileSize, this.innerHalfSize);
      }
      if (borderVisibility) {
        noFill();
        stroke(this.arenaBorderColor);
        rect(-this.arenaHalfSize, -this.arenaHalfSize, this.arenaHalfSize, this.arenaHalfSize);
      }
    }
  }

*/
