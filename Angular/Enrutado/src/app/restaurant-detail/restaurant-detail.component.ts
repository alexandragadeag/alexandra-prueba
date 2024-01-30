import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export class RestaurantDetailComponent implements OnInit {
  constructor (private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    //params es un Observable de rxjs
    
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
    });
  }

}
