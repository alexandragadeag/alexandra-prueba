import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // Crear un array de string con nombres

  nombres: string[] = ["juanito", "bea", "raquel", "vladimir"];
  productos: Producto[] = [
    // Crear objetos producto
  ];

  constructor() {}

}
