import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/main-page/main-page.component').then(m => m.MainPageComponent)
    },
    {
        path: 'tour-details/:id',
        loadComponent: () => import('./pages/tour-details/tour-details.component').then(m => m.TourDetailsComponent)
    }
];
