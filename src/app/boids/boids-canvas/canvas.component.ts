import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { BoidSimulation } from '../boids-simulation';
import { BoidsService } from '../boids.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas', {static: true}) canvasRef: ElementRef;
  img = new Image();

  private ctx: CanvasRenderingContext2D;
  private BOIDS: BoidSimulation;

  constructor(private boidsService: BoidsService) { }

  ngOnInit() {
    this.img.src = '../../../assets/sunset.jpg';
    this.initCanvas();

    setInterval(() => {
      this.drawBackground();
      if (this.BOIDS) {
        // this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.BOIDS.drawParticles(this.boidsService.slidersValues , this.boidsService.runSimulation);
      }
      if (this.boidsService.generateNewPopulation) {
        this.BOIDS = new BoidSimulation(300, this.ctx);
        this.boidsService.generateNewPopulation = false;
      }
    }, 40);
  }

  drawBackground() {
    this.ctx.drawImage(this.img, 0, 0);
}

  initCanvas() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

}
