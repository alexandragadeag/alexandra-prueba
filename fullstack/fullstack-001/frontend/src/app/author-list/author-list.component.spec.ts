import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListComponent } from './author-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Author } from '../interfaces/author.model';

describe('AuthorListComponent', () => {
  let component: AuthorListComponent;
  let fixture: ComponentFixture<AuthorListComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorListComponent, HttpClientTestingModule]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(AuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cargar autores de backend', () => {
    const expectedAuthors: Author[] = [
      {id: 1,firstName:'a1', lastName:'a1', birthDate: new Date(), salary: 1000, photoUrl: 'prueba.jpg', country: 'spain', bio: 'prueba', wikipediaUrl: 'url' },
      {id: 1,firstName:'a2', lastName:'a2', birthDate: new Date(), salary: 1000, photoUrl: 'prueba.jpg', country: 'spain', bio: 'prueba', wikipediaUrl: 'url' },
    ];
    const request = httpTestingController.expectOne('http://localhost:3000/author');
    expect(request.request.method).toEqual('GET');
    request.flush(expectedAuthors);

    expect(component.authors).toEqual(expectedAuthors);

  });

});
