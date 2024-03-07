import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.model';
import { Repository } from 'typeorm';

@Controller('author')
export class AuthorController {

    constructor(
        @InjectRepository(Author) private aurthorRepo: Repository<Author>

    ) {}

    @Get()
    findAll() {
        return this.aurthorRepo.find();
    }
    
}
