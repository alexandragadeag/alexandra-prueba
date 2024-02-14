import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  bookForm = new FormGroup ({
    title: new FormControl(''),
    numPages: new FormControl(150),
    price: new FormControl()
  });

  save(): void{
    const title = this.bookForm.get('title')?.value;
    console.log(title);

    const numPages =
    this.bookForm.get('numPages')?.value;
    console.log(numPages);

    const price =
    this.bookForm.get('price')?.value;
    console.log(numPages);
    
  }

}
