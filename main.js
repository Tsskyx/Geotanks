new p5(p => {
    p.preload = () => {};

    p.setup = () => {
        p.createCanvas(p.displayWidth, p.displayHeight);
    };

    // const outlineWidth = 5;
    // const tileSize = 30;
    // const arenaSize = 25;
    // const borderSize = 5;
    // let borderVisibility = false;

    // const arena = new Arena();
    // const player = new Player();
    // const shapes = [];
    // for (let i = 0; i < 12; i++) shapes.push("new Shape()");

    p.draw = () => {
        // p.translate(p.width / 2, p.height / 2);
        // arena.draw();
        // for (const shape of shapes) shape.draw();

        p.background(0);
        p.fill(255);
        p.noStroke();
        p.rectMode(p.CENTER);
        p.rect(p.width / 2, p.height / 2, 100, 100);
    };

    p.keyPressed = () => {
        //if (p.keyCode == p.LEFT_ARROW || p.key == 'a') vL = 1;
        //if (p.keyCode == p.RIGHT_ARROW || p.key == 'd') vR = 1;
        //if (p.keyCode == p.UP_ARROW || p.key == 'w') vU = 1;
        //if (p.keyCode == p.DOWN_ARROW || p.key == 's') vD = 1;
    };
      
    p.keyReleased = () => {
        //if (p.keyCode == p.LEFT_ARROW || p.key == 'a') vL = 1;
        //if (p.keyCode == p.RIGHT_ARROW || p.key == 'd') vR = 1;
        //if (p.keyCode == p.UP_ARROW || p.key == 'w') vU = 1;
        //if (p.keyCode == p.DOWN_ARROW || p.key == 's') vD = 1;
    }
}, "gameWindow");
