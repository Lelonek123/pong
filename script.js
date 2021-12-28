import Ball from "./ball.js";
import {Paddle, PlayerPaddle, ComputerPaddle} from "./paddle.js";

const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new PlayerPaddle(document.getElementById("player-paddle"));
const computerPaddle = new ComputerPaddle(document.getElementById("computer-paddle"));
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
let lastTime = 0

function process(time) {
    const timeDelta = time - lastTime;
    ball.update(timeDelta, [playerPaddle.rect(), computerPaddle.rect()]);
    computerPaddle.update(timeDelta, ball.y);

    if (isLose()) {
        handleLose();
    }

    lastTime = time;
    window.requestAnimationFrame(process);
}

function isLose() {
    const ball_position = ball.getPosition();

    if (ball_position.left <= 0 || ball_position.right >= window.innerWidth) {
        return true;
    }
    return false;
}

function handleLose() {
    const ballPosition = ball.getPosition();
    if (ballPosition.left <= 0) {
        computerScore.textContent = `${parseInt(computerScore.textContent) + 1}`;
    } else {
        playerScore.textContent = `${parseInt(playerScore.textContent) + 1}`;
    }

    ball.reset();
    computerPaddle.reset();
}

window.requestAnimationFrame(process)
