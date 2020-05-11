import { Component, OnInit } from '@angular/core';

import { BoidsService } from '../boids.service';

@Component({
  selector: 'app-boids-properties',
  templateUrl: './boids-properties.component.html',
  styleUrls: ['./boids-properties.component.css']
})
export class BoidsPropertiesComponent implements OnInit {

  seperation = 1;
  cohesion = 1;
  alignment = 1;
  radius = 50;
  maxf = 0.5;
  maxs = 3;

  runSimulation = false;
  slidersParametersChange = false;

  showParametersCard = true;
  canStart = false;

  constructor(private boidsService: BoidsService) { }

  ngOnInit() {
    this.reset();
  }

  slidersChanged(val) {
    this.slidersParametersChange = true;
    this.boidsService.slidersValues[val.target.id] = val.target.value;
  }

  reset() {
    this.slidersParametersChange = false;

    this.seperation = this.boidsService.slidersDefaults.seperation;
    this.alignment = this.boidsService.slidersDefaults.alignment;
    this.cohesion = this.boidsService.slidersDefaults.cohesion;
    this.maxf = this.boidsService.slidersDefaults.maxf;
    this.maxs = this.boidsService.slidersDefaults.maxs;
    this.radius = this.boidsService.slidersDefaults.radius;
  }

  start() {
    this.runSimulation = !this.runSimulation;
    this.boidsService.runSimulation = !this.boidsService.runSimulation;
  }

  newPopulation() {
    this.canStart = true;
    this.boidsService.generateNewPopulation = true;
  }

  minMax() {
    this.showParametersCard = !this.showParametersCard;
  }

}
