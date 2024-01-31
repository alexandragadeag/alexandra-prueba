import { Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantBookingComponent } from './restaurant-booking/restaurant-booking.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    },
    {
        path: 'restaurantes/:id/reservas',
        component: RestaurantBookingComponent 
    },
    {
        path: 'not-found-404', 
        component: NotFoundComponent
    },
    {
        path: '**', // ruta comodin que atrapa cualquier url que se escriba 
        redirectTo: '/not-found-404'
    }
    

   



];

