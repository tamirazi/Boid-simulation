import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BoidsComponent } from './boids/boids.component';
import { HomeComponent } from './home/home.component';
import { ReferencesComponent } from './references/references.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'boids' , component: BoidsComponent},
  { path: 'references' , component: ReferencesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
