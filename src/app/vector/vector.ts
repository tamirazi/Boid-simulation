export class Vector {

    x: number;
    y: number;

    static sub(v1: Vector, v2: Vector): Vector {
        const temp = new Vector();
        temp.x = v1.x - v2.x;
        temp.y = v1.y - v2.y;
        return temp;
    }

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }


    distance(v1: Vector) {
        return Math.sqrt( Math.pow(this.x - v1.x, 2) + Math.pow(this.y - v1.y, 2));
    }

    add(v1: Vector) {
        this.x += v1.x;
        this.y += v1.y;
    }

    addScalar(scalar: number) {
        this.x += scalar;
        this.y += scalar;
    }

    sub(v1: Vector) {
        this.x -= v1.x;
        this.y -= v1.y;
    }

    divScalar(scalar: number) {
        this.x /= scalar;
        this.y /= scalar;
    }

    mulScalar(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
    }

    setMag(newMag: number) {
        const mag = this.getMag();
        const vx = this.x * newMag / mag;
        const vy = this.y * newMag / mag;
        this.x = vx;
        this.y = vy;
    }

    getMag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }


}

