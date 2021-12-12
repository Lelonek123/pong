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

    reset() {
        this.x = 50;
        this.y = 50;
    }

    update() {

    }
}
