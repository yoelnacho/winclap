import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const router: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '/404', pathMatch: 'full' } // Error
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
