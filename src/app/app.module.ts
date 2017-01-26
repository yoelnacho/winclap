import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Router
import { routes } from './app.router';

// Jquery
import { JqueryComponent } from './jquery/jquery/jquery.component';
import { RotateComponent } from './jquery/rotate/rotate.component';
import { ParallaxComponent } from './jquery/parallax/parallax.component';

// Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';
import { PerformanceComponent } from './performance/performance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JqueryComponent,
    RotateComponent,
    ParallaxComponent,
    HowComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
