const INITIAL_VELOCITY = 0.025;
const VELOCITY_DELTA = 0.00005;

export default class Ball {
    constructor(ballElement) {
        this.ball = ballElement;
        this.reset();
    }

    get x() {
        return parseFloat(getComputedStyle(this.ball).getPropertyValue("--x"));
    }
    set x(value) {
        this.ball.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ball).getPropertyValue("--y"));
    }
    set y(value) {
        this.ball.style.setProperty("--y", value)
    }

    get position() {
        return this.ball.getBoundingClientRect();
    }

    getPosition() {
        return this.position;
    }

    reset() {
        this.x = 50;
        this.y = 50;
        this.velocity = INITIAL_VELOCITY;
        let heading = randomNumBetwean(3 * Math.PI / 4, 5 * Math.PI / 4);
        heading += (Math.floor(Math.random() * 2) == 0) ? 0 : Math.PI;
        this.direction = {x: Math.cos(heading), y: Math.sin(heading)};
    }

    update(timeDelta, paddlePositions) {
        this.x += this.direction.x * this.velocity * timeDelta;
        this.y += this.direction.y * this.velocity * timeDelta;
        this.velocity += VELOCITY_DELTA;

        if (this.position.top <= 0 || this.position.bottom >= window.innerHeight) {
            this.direction.y *= -1;
        }
        
        if (paddlePositions.some(p => isColission(p, this.position))) {
            this.direction.x *= -1;
        }
    }
}

function randomNumBetwean(min, max) {
    return Math.random() * (max - min) + min;
}

function isColission(rect1, rect2) {
    return (
        rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
    );
}
