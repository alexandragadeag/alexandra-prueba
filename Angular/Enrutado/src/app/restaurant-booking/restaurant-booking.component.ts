import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-booking',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-booking.component.html',
  styleUrl: './restaurant-booking.component.css'
})
export class RestaurantBookingComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
    
      console.log(params['id']);

      //utilizar el id para llamar a una clase servicio
      //paa que traiga el restaurante / las reservas desde
      // el BACKEND.

    });
  }

}
