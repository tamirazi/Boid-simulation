import * as _ from 'lodash';

import { Vector } from '../vector/vector';

export class Particle {
    colors = ['black', 'red', 'blue', 'green'];
    radius: number;
    personalBest: number;
    color: string;
    width: number;
    heigth: number;
    ctx: CanvasRenderingContext2D;

    position: Vector;
    acceleration: Vector;
    velocity: Vector;
    maxForce = 0.5;
    maxSpeed = 3;
    alignPerceptionRadius = 50;
    coheisionPerceptionRadius = 50;
    sperationPerceptionRadius = 50;


    constructor(ctx: CanvasRenderingContext2D, radius = 1) {
        this.radius = radius;
        this.color = this.colors[0];
        this.ctx = ctx;
        this.width = this.ctx.canvas.width;
        this.heigth = this.ctx.canvas.height;
        this.initVectors();
    }

    private initVectors() {
        this.position = new Vector(_.random(0, this.width), _.random(0, this.heigth));
        this.velocity = new Vector(_.random(-1, 1, true), _.random(-1, 1, true));
        this.acceleration = new Vector();
    }

    align(boids: Particle[]) {
        const steering = new Vector();
        let total = 0;
        for (const other of boids) {
            const d = this.position.distance(other.position);
            if (other !== this && d < this.alignPerceptionRadius) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.divScalar(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            if (steering.getMag() > this.maxForce) {
                steering.setMag(this.maxForce);
            }
        }

        return steering;
    }

    cohesion(boids: Particle[]) {
        const steering = new Vector();
        let total = 0;
        for (const other of boids) {
            const d = this.position.distance(other.position);
            if (other !== this && d < this.coheisionPerceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.divScalar(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            if (steering.getMag() > this.maxForce) {
                steering.setMag(this.maxForce);
            }
        }

        return steering;
    }

    seperation(boids: Particle[]) {
        const steering = new Vector();
        let total = 0;
        for (const other of boids) {
            const d = this.position.distance(other.position);
            if (other !== this && d < this.sperationPerceptionRadius) {
                const diff = Vector.sub(this.position, other.position);
                diff.divScalar(d);
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.divScalar(total);
            // steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            if (steering.getMag() > this.maxForce) {
                steering.setMag(this.maxForce);
            }
        }

        return steering;
    }

    flock(boids: Particle[], sliders) {
        const alignment = this.align(boids);
        const cohesion = this.cohesion(boids);
        const seperation = this.seperation(boids);

        if (sliders.alignment) {
            alignment.mulScalar(sliders.alignment);
            cohesion.mulScalar(sliders.cohesion);
            seperation.mulScalar(sliders.seperation);
            this.maxForce = sliders.maxf;
            this.maxSpeed = sliders.maxs;
            this.alignPerceptionRadius = this.sperationPerceptionRadius = this.coheisionPerceptionRadius = sliders.radius;
        }
        this.acceleration.add(cohesion);
        this.acceleration.add(alignment);
        this.acceleration.add(seperation);
    }

    edges() {
        if (this.position.x > this.width) {
          this.position.x = 0;
        } else if (this.position.x < 0) {
          this.position.x = this.width;
        }
        if (this.position.y > this.heigth) {
          this.position.y = 0;
        } else if (this.position.y < 0) {
          this.position.y = this.heigth;
        }
      }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        if (this.velocity.getMag() > this.maxSpeed) {
            this.velocity.setMag(this.maxSpeed);
        }
        this.acceleration.mulScalar(0);
    }

    show() {
        const x = this.position.x;
        const y = this.position.y;
        this.ctx.beginPath();
        this.ctx.arc(x , y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}
