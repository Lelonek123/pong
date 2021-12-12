import Ball from "./ball.js";

const ball = new Ball(document.getElementById("ball"));

let lastTime = 0;
function update(time) {
    const timeDelta = time - lastTime;
    lastTime = time;
    ball.update(timeDelta);
    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update)
