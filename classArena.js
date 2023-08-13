class Arena {
    static gridLineThickness = 1;
    static showBorder = true;

    static lightBackColor = "rgb(205, 205, 205)";
    static lightGridColor = "rgb(195, 195, 195)";
    static darkBackColor = "rgb(185, 185, 185)";
    static darkGridColor = "rgb(175, 175, 175)";
    static arenaBorderColor = "rgb(100, 100, 100)";

    constructor(tile, inner, edge, outer) {
        this.size = {
            tile,
            inner: {
                tl: {half: inner, full: inner * 2},
                px: {half: inner * tile, full: inner * tile * 2}
            },
            edge: {
                tl: {half: edge, full: edge * 2},
                px: {half: edge * tile, full: edge * tile * 2}
            },
            outer: {
                tl: {half: outer, full: outer * 2},
                px: {half: outer * tile, full: outer * tile * 2}
            },
            arena: {
                tl: {half: (inner + edge), full: (inner + edge) * 2},
                px: {half: (inner + edge) * tile, full: (inner + edge) * tile * 2}
            },
            total: {
                tl: {half: (inner + edge + outer), full: (inner + edge + outer) * 2},
                px: {half: (inner + edge + outer) * tile, full: (inner + edge + outer) * tile * 2}
            }
        };
    }

    draw(p) {
        p.strokeJoin(p.MITER);
        p.strokeWeight(Arena.gridLineThickness * 2);
        p.background(Arena.darkBackColor);
        p.fill(Arena.lightBackColor);
        p.noStroke();
        let size1 = this.size.inner.px.half;
        p.rect(-size1, -size1, size1, size1);
        p.stroke(Arena.darkGridColor);
        let size2 = this.size.total.px.half;
        let size3 = this.size.tile;
        for (let i = 0; i <= this.size.total.tl.full; i++) {
            p.line(-size2, -size2 + i * size3, size2, -size2 + i * size3);
            p.line(-size2 + i * size3, -size2, -size2 + i * size3, size2);
        }
        p.stroke(Arena.lightGridColor);
        let size4 = this.size.inner.px.half;
        for (let i = 0; i <= this.size.inner.tl.full; i++) {
            p.line(-size4, -size4 + i * size3, size4, -size4 + i * size3);
            p.line(-size4 + i * size3, -size4, -size4 + i * size3, size4);
        }
        if (Arena.showBorder) {
            p.noFill();
            p.stroke(Arena.arenaBorderColor);
            let size5 = this.size.arena.px.half;
            p.rect(-size5, -size5, size5, size5);
        }
    }
}