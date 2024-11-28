import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomepageComponent },
        ]
    }
];
