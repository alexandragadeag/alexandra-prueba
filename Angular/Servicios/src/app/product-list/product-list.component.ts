import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private productService: ProductService){}

  imprimirHola(): void {
    let texto = this.productService.holaMundo();
    console.log(texto);

  }

}
