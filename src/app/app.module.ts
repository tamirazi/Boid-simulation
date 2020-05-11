import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './boids/boids-canvas/canvas.component';
import { BoidsComponent } from './boids/boids.component';
import { HomeComponent } from './home/home.component';
import { BoidsPropertiesComponent } from './boids/boids-properties/boids-properties.component';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    BoidsComponent,
    HomeComponent,
    BoidsPropertiesComponent,
    ReferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
