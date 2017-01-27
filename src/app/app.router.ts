import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';
import { PerformanceComponent } from './performance/performance.component';

export const router: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'how', component: HowComponent },
    { path: 'performance', component: PerformanceComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
