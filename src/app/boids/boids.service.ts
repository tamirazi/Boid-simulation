import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoidsService {
  slidersDefaults = {
    seperation : 1,
    cohesion : 1,
    alignment : 1,
    radius : 50,
    maxf : 0.5,
    maxs : 3,
  };
  slidersValues = {
    seperation : 1,
    cohesion : 1,
    alignment : 1,
    radius : 50,
    maxf : 0.5,
    maxs : 3,
  };

  runSimulation = false;
  generateNewPopulation = false;

  constructor() {}
}
