import { Component } from '@angular/core';
import { customer } from '../interfaces/customer.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [NgClass],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent {
  
  customer: customer | undefined;

  constructor() {
    this.customer = {
      id: 1,
      firstName: "Juancito",
      email: "@gmail.com",
      nif:"111333344Y",
      birthday: new Date(1988, 0, 15),
      active: true


    }
  }
}
