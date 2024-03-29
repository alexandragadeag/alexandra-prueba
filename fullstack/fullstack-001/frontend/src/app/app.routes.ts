import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ReservartionFormComponent } from './reservartion-form/reservartion-form.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'books/:id/detail',
        component: BookDetailComponent
    },
    {
        path: 'books/create',
        component: BookFormComponent
    },
    {
        path: 'books/:id/update',
        component: BookFormComponent
    },
    {
        path: 'categories/:id/detail',
        component: CategoryDetailComponent
    },
    {
        path: 'books/:id/reserve',
        component: ReservartionFormComponent
    },
    {
        path: 'authors',
        component: AuthorListComponent
    },
    {
        path: 'authors/create',
        component: AuthorFormComponent
    },
    {
        path: 'authors/:id/update',
        component: AuthorFormComponent
    },
    {
        path: 'authors/:id/detail',
        component: AuthorDetailComponent
    }
];
