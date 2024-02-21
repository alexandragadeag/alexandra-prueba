import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Manufacturer } from '../interfaces/manufacturer.model';
import { Category } from '../interfaces/category.model';
import { Product } from '../interfaces/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  //Estos datos se recuperarían del BACKEND
  //utilizando un SERVICIO o
  //directamente un httpClient y peticiones GET

    manufacturers: Manufacturer[] = [{
      id: 1,
      name: "FilaMotor",
      year: 2012
      }, {
      id: 2,
      name: "Pepsi",
      year: 1920
      },
      {
      id: 3,
      name: "Coca Cola",
      year: 1915
      }
      ];
      categories: Category[] = [
        { id: 1, name: "Bebidas"},
        { id: 2, name: "Carne"},
        { id: 3, name: "Legumbres"},
        { id: 4, name: "Vegan"}];

        productForm = new FormGroup({
          id: new FormControl(),
          title: new FormControl('', Validators.required),
          price: new FormControl(0, [Validators.min(0), Validators.max(500)]),
          available: new FormControl(false),
          publishDate: new FormControl(new Date()),
          manufacturer: new FormControl(),
          categories: new FormControl<Category[]>([])
        });
      
        constructor(private httpClient: HttpClient,
        private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    let id =params['id'];
    this.httpClient.get<Product>(`http://localhost:3000/products/${id}`)
    .subscribe(product => {
    
      this.productForm.reset({
        id:product.id,
        title: product.title,
        price: product.price,
        available: product.available,
        publishDate: product.publishDate,
        manufacturer: product.manufacturer,
        categories: product.categories
      });
    
     });
    });
  
  }
        
        save(): void {
        console.log('invocando.save');

        const product: Product = {
          id: this.productForm.get('id')?.value ?? 0,
          title: this.productForm.get('title')?.value ?? '',
          price: this.productForm.get('price')?.value ?? 0,
          available: this.productForm.get('available')?.value ?? false,
          publishDate: this.productForm.get('publishDate')?.value ?? new Date(),
          manufacturer: this.productForm.get('manufacturer')?.value,
          categories: this.productForm.get('categories')?.value ?? []
          

        };

        console.log(product);
    
        const url = 'http://localhost:3000/products';
        
        //CREATE DE LAS OPERACIONES CRUD
        this.httpClient.post<Product>(url, product)
        .subscribe(data => console.log(data));
        
        // El objeto se puede enviar al  backend
        // httpClient.post

        }


}
