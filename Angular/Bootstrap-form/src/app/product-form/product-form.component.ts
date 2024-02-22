import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Manufacturer } from '../interfaces/manufacturer.model';
import { Category } from '../interfaces/category.model';
import { Product } from '../interfaces/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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
      
        isUpdate: boolean = false;

        constructor(private httpClient: HttpClient,
        private activatedRoute: ActivatedRoute, 
        private router: Router
        ) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    let id =params['id'];
    this.httpClient.get<Product>(`http://localhost:3000/products/${id}`).subscribe(product => {
    
       this.isUpdate = true;

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

        if(this.isUpdate){
          // ACTUALIZAR UN PRODUCTO EXISTENTE
          const urlForUpdate = 'http://localhost:3000/products/' + product.id;
          this.httpClient.put<Product>(urlForUpdate, product).subscribe(data => this.router.navigate(['/']));
        } else {
          // CREAR UN NUEVO PRODUCTO
          const url = 'http://localhost:3000/products';
          this.httpClient.post<Product>(url, product).subscribe(data => this.router.navigate(['/']));
        }
  
      }

      //Crear una función para comparar objetos en el selector  para recargar objetos
      // esto ayuda a que angular muestr qué manufacturer y categorías tienen asociadas
      // en los selectores cuando estamos en una Actualización
      compareObjects(o1: any, o2: any): boolean{
        if (o1 && o2) {
          return o1.id === o2.id;
        } else {
          return o1 === o2;
        }
      }
  }
