import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BoidsComponent } from './boids/boids.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'boids' , component: BoidsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
