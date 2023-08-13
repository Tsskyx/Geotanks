new p5(p => {
    const tileSize = 30;
    const arenaInnerSize = 10;
    const arenaEdgeSize = 10;
    const arenaOuterSize = 40;

    p.preload = () => {};

    p.setup = () => {
        p.createCanvas(p.displayWidth, p.displayHeight);
        p.rectMode(p.CORNERS);
    };
    
    const arrowKeys = [p.UP_ARROW, p.LEFT_ARROW, p.DOWN_ARROW, p.RIGHT_ARROW];
    const wasdKeys = ["w", "a", "s", "d"];
    const arena = new Arena(tileSize, arenaInnerSize, arenaEdgeSize, arenaOuterSize);
    const shapes = [];
    for (let i = 0; i < 12; i++) shapes.push(new Shape(p, arena));
    const player = new Player();

    p.draw = () => {
        p.translate(p.width / 2 - player.pos[0], p.height / 2 - player.pos[1]);
        arena.draw(p);
        for (const shape of shapes)
            shape.calcInteract(p, arena, shapes);
        for (const shape of shapes)
            shape.moveDraw(p);
        player.draw(p, arena);
    };

    p.keyPressed = () => {
        for (let i = 0; i < 4; i++)
            if (p.keyCode == arrowKeys[i] || p.key == wasdKeys[i])
                player.move[i] = 1;
    };
      
    p.keyReleased = () => {
        for (let i = 0; i < 4; i++)
            if (p.keyCode == arrowKeys[i] || p.key == wasdKeys[i])
                player.move[i] = 0;
    }

}, "gameWindow");
