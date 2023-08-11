new p5(p => {
    const numDots = 4;
    const dotSize = 25;
    const orbitRadius = 100;
    
    p.setup = () => {
        p.createCanvas(p.displayWidth, p.displayHeight);
    };

    p.draw = () => {
        p.background(0);
        p.translate(p.width / 2, p.height / 2);
        p.fill(255);
        p.noStroke();
        for (let i = 0; i < numDots; i++) {
            const angle = p.TAU * (p.frameCount / 60 + i / numDots);
            p.ellipse(orbitRadius * p.cos(angle), orbitRadius * p.sin(angle), dotSize, dotSize);
        }
    };
}, "p5_loading");
