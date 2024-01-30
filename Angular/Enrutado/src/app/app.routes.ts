import { Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

export const routes: Routes = [
    {
        path: 'restaurantes',
        component: RestaurantListComponent
    },
    {
        path: 'restaurantes/formulario',
        component: RestaurantFormComponent
    },
    {
        path: 'restaurantes/nuevo',
        component: RestaurantFormComponent
    },
    {
        path: 'restaurantes/:id/detalle',
        component: RestaurantDetailComponent 
    }
   



];

