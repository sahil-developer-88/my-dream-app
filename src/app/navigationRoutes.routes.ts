import { DataComponent } from './data/data.component';
import { AppComponent } from './app.component';

import { Routes } from '@angular/router';

export const navigationRoutes: Routes = [
    { path: 'data', component: DataComponent },
    { path: '', component: AppComponent }
];