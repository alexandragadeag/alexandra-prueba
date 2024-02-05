import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Interfaces/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  holaMundo(): string{
    return "Hola mundo";

  } 
  obtenerProducto1(): Observable<Product> {
    return this.httpClient.get<Product>('https://fakestoreapi.com/products/1');
  }

  // Obtener todos los productos:
  findall(){
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }
  // Obtener un producto con su id com parámetro:
  findByid(id: number | string) {
    return this.httpClient.get<Product>('https://fakestoreapi.com/products/'+ id);

  }

}
