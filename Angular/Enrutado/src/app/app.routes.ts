import { Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantBookingComponent } from './restaurant-booking/restaurant-booking.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
  
    {
        path:'', //Ruta vacía
        component: HomeComponent
    },
    {
        path:'',
        //component: RestaurantListComponent
         redirectTo: '/restaurantes',
         pathMatch: 'full'   //(CASO ESPECIAL: se pone para evitar que detecte cualquier url ya que todas las urls empiezar por cadena vacía  )
        // Opción 2 crear un componente llamado Home, desde donde navegar a las otras páginas 
    },
    
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

