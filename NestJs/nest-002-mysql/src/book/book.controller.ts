import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Book } from './book.model';

@Controller('book')
export class BookController {

    // Crear constructor e inyectar Repository<Book> para acceso a base de datos 
    constructor(
        @InjectRepository(Book) private bookRepository: Repository<Book>
    ) { }
    // findAll y utilizar this.bookRepository.find()
    @Get()
    findAll() {
        return this.bookRepository.find(); // Equivalente al SELECT * FROM
    }

    @Get(':id') // :id es una variable, parámetro en la url
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.bookRepository.findOne({
            where: {
                id: id
            }
        });
    }

    @Get('filter-by-title/:title')
    findByTitle(@Param('title') title:string) {
        return this.bookRepository.find({
            where: {
               title: title // Coincidencia exacta, los títulos deben ser iguales
            }
        });
    }

    @Get('published/true')
    findByPublishedTrue() {
       return this.bookRepository.find({
        where: {
            published: true
        }

       });
    }

    @Get('filter-by-price/:min/:max')
    findByPriceBetweenMinAndMax(
        @Param('min', ParseIntPipe) min: number,
        @Param ('max', ParseIntPipe) max: number
    ) {
        return this.bookRepository.find({
           where: {
               price: Between(min, max)
           }
        });

    }

    @Post()
    create (@Body() book: Book) {
        return this.bookRepository.save(book);
        
    }
    

    // async viene de asíncrono, para poder ejecutar await
    @Put(':id')
     async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() book: Book

    ) {

        // await espera a que el método  existsBy termine ya que devuelve Promise<boolean>
        const exists = await this.bookRepository.existsBy({
            id: id
        });

        if (!exists){
            throw new NotFoundException('Book not found');

        }

        return this.bookRepository.save(book);
        
    }
}
