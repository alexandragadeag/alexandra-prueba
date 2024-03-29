import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ContadorComponent } from "./contador/contador.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductListComponent, ProductDetailComponent, ContadorComponent, CustomerDetailComponent]
})
export class AppComponent {
  title = 'Angular';
}
