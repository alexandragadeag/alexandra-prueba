import { Component } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {

  restaurants: Restaurant[] = [{
    id:1,
    name: "100 montaditos",
    location: "Calle de María 63",
    rating: 5,
    phone: "657890066"

  },
  {
    id: 2,
    name: "Bar Chapa",
    location: "Calle Amposta",
    rating: 6,
    phone: "655890166"

  },
  {
    id: 3,
    name: "Bar Sal",
    location: "Calle Herencia",
    rating: 4,
    phone: "698890167"

  },
  {
    id: 4,
    name: "Bar Juan",
    location: "Calle Numancia",
    rating: 8,
    phone: "696690169"

  }];
  

}
