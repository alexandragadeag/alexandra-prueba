import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Author } from '../interfaces/author.model';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css'
})
export class AuthorFormComponent implements OnInit {
     
    
     authorForm = new FormGroup({
          
         id: new FormControl(0),
         firstName: new FormControl(''),
         //lastName: new FormControl(''),
         
    
     });
     photoFile: File | undefined;
     photoPreview: string | undefined;

     ngOnInit(): void {
      
    }

    onFileChange(event: Event) {
    
      let target = event.target as HTMLInputElement;
      
      if (target.files !== null && target.files.length > 0) {
        this.photoFile = target.files[0]; // extraer el primer archivo

        // Opcional: Mostrar la imagen por pantalla para previsualizarla antes de subirla
        let reader = new FileReader();
        reader.onload = event => this.photoPreview = reader.result as string;
        reader.readAsDataURL(this.photoFile);
      }   

    }

    save() {
      const author: Author = {
      id: 0,
      firstName: this.authorForm.get('firstName')?.value ?? '',
      lastName: '',
      birthDate: new Date(),
      salary: 0,
      photoUrl: '',
      country: '',
      bio: '',
      wikipediaUrl: ''
      };
      console.log(author);
      console.log(this.photoFile);
      
      
      }
    }

