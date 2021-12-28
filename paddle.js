const PADDLE_SPEED = 0.02;

export class Paddle {
    constructor(paddleElem) {
        this.paddle = paddleElem;
        this.reset();
    }

    reset() {
        this.position = 50;
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddle).getPropertyValue("--position"));
    }

    set position(value) {
        this.paddle.style.setProperty("--position", value)
    }

    rect() {
        return this.paddle.getBoundingClientRect();
    }
}

export class PlayerPaddle extends Paddle {
    constructor(paddleElem) {
        super(paddleElem);
        document.addEventListener("mousemove", e => {
            this.position = (e.y / window.innerHeight) * 100;
        });
    }
}

export class ComputerPaddle extends Paddle {
    constructor(paddleElem) {
        super(paddleElem);
        
    }

    update(timeDelta, ball_y) {
        if (this.position < ball_y) {
            this.position += PADDLE_SPEED * timeDelta;
        } else if (this.position > ball_y) {
            this.position += PADDLE_SPEED * timeDelta * -1;
        }
    }
}
