import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../interfaces/restaurant.model';

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant | undefined;

  constructor (private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //params es un Observable de rxjs
    // captura el id de la url (id del restaurante)
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      //convertir id de string a número
      let idString = params['id'];
      let idNum = parseInt(idString, 10);
      console.log(idNum);

      // Crear objeto restaurantes con el id capturado
      this.restaurant = {
         id: idNum,
         name: "Tres Mares",
         location: "Calle Corazón María, 63",
         phone: "654389067",
         rating: 5,
         imageUrl: "https://placehold.co/600"

      };



      // llamar al backend pidiendo el restaurante por el id

    });
  }

}
