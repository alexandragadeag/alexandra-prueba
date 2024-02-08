import { Component, OnInit } from '@angular/core';
import { Author } from '../interfaces/author.model';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers: [AuthorService],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent implements OnInit{

  authors: Author[] = [];
  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
   this.loadAuthors();
  }
  loadAuthors(){
    this.authorService.findAll()
    .subscribe(authors => this.authors = authors);
  }
  deleteAuthor(id: string | number) {
    const remove: boolean = confirm("¿Quieres borrar e autor de verdad?");

    if(!remove) return;

    this.authorService.deleteById(id).subscribe(() => {
      this.loadAuthors(); //refresca la tabla para que desaparezca el author borrado 
    });


  }

  

}
