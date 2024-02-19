import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
   {
    path:'',
    component: ProductListComponent
   },
   {
   path:'products/:id/detail',
   component: ProductDetailComponent
   },
   {
    path: 'products/create',
    component: ProductFormComponent
   },
   {
    path: 'products/:id/update',
    component: ProductFormComponent
   }

];
