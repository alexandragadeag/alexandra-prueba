import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  holaMundo(): string{
    return "Hola mundo";

  }

  constructor() { }
}
