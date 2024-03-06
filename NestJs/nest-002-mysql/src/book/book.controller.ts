import { Controller } from '@nestjs/common';

@Controller('book')
export class BookController {

    // Crear constructor e inyectar Repository<Book>
    constructor() {}
    // findAll y utilizar this.bookRepository.find()
}
