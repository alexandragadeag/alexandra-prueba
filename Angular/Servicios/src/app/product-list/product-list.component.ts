import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private productService: ProductService){}

  imprimirHola(): void {
    let texto = this.productService.holaMundo();
    console.log(texto);

  }
 imprimirProduct(): void {
  this.productService.obtenerProducto1().subscribe(p => console.log(p));
 }

}
