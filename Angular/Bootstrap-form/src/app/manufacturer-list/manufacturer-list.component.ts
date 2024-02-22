import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Manufacturer } from '../interfaces/manufacturer.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manufacturer-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './manufacturer-list.component.html',
  styleUrl: './manufacturer-list.component.css'
})
export class ManufacturerListComponent {

   manufacturers: Manufacturer[] = [];

   constructor(private http: HttpClient) {}

   ngOnInit(): void {
    const url = 'http://localhost:3000/manufacturers';
    this.http.get<Manufacturer[]>(url)
    .subscribe(manufacturers => this.manufacturers = manufacturers);
  }


}
