import { Controller, Get } from '@nestjs/common';
import { Book } from './book.model';

@Controller('book')
export class BookController {
    // Crear métodos CRUD con @Get, @Post, @Put, @Delet


@Get()
findAll(): Book[] {

    // Crear un array de 3 books y devolverlo con return
    let book1: Book = {
        id: 1,
        title: 'Book1',
        price: 19.99
    }
    let book2: Book = {
        id: 2,
        title: 'Book2',
        price: 18.99
    }
    let book3: Book = {
        id: 3,
        title: 'Book3',
        price: 20.99
    }
    return [book1, book2, book3];


   }
}