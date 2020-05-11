import { Particle } from '../particle/particle';

export class BoidSimulation {

    population: Particle[] = [];
    populationSize: number;
    height: number;
    width: number;
    canvas: CanvasRenderingContext2D;

    constructor(populationSize: number, canvas: CanvasRenderingContext2D) {
        this.populationSize = populationSize;
        this.canvas = canvas;
        this.width = canvas.canvas.width;
        this.height = canvas.canvas.height;
        this.generatePopulation();
    }

    private generatePopulation() {
        for (let i = 0 ; i < this.populationSize ; i++) {
          this.population.push(new Particle(this.canvas));
        }
    }

    drawParticles(sliders , run) {
        for (let i = 0 ; i < this.populationSize ; i++ ) {
            this.population[i].edges();
            if (run) {
                this.population[i].flock(this.population, sliders);
                this.population[i].update();
            }
            this.population[i].show();
        }
    }

    resize(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}
