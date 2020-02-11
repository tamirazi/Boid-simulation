import { Component, OnInit, Input } from '@angular/core';
import { BoidsService } from './boids.service';


@Component({
  selector: 'app-boids',
  templateUrl: './boids.component.html',
  styleUrls: ['./boids.component.css']
})
export class BoidsComponent implements OnInit {
  constructor(private boidsService: BoidsService) { }

  ngOnInit() {
  }

}
