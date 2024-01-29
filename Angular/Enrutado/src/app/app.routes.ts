import { Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';

export const routes: Routes = [
    {
        path: 'restaurantes',
        component: RestaurantListComponent
    },
    {
        path: 'restaurantes/formulario',
        component: RestaurantFormComponent
    }
    // definir las rutas dela aplicación

    // restaurantes --> RestaurantList

    //restaurantes/details --> RestauranteDetail



];

