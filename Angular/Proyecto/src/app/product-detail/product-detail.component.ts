import { Component } from '@angular/core';
import { Producto } from '../interfaces/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product: Producto | undefined;

  loadProduct() {
    console.log("Se ha hecho clic en loadProduct")
    /*
    this.product = {
      title: "Televisor Samsung 50 pulgadas",
      price: 450
    };
  */
}

}
