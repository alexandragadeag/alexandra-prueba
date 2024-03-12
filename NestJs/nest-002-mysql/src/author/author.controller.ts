import { Controller, Get, Param, ParseFloatPipe, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.model';
import { MoreThanOrEqual, Repository } from 'typeorm';

@Controller('author')
export class AuthorController {

    constructor(
        @InjectRepository(Author) private aurthorRepo: Repository<Author>

    ) {}

    @Get()
    findAll() {
        return this.aurthorRepo.find();
    }
    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) {
       return this.aurthorRepo.findOne({
         where:{
            id: id
         }

       });
    }
    
    //http://localhost:3000/author/filter-full-name/alexandra/García
    @Get('filter-full-name/:firstname/:lastname')
    findByFirstNameAndLastName(
        @Param('firstname') firstname: string,
        @Param('lastname') lastname: string,
        ) {
        
        // filtrar por nombre y apellido    
        return this.aurthorRepo.find({
            where: {
            
                 firstName: firstname,
                 lastName: lastname

            }
        });

    }

    @Get('filter-by-salary/:salary')
    findBySalary(@Param('salary', ParseFloatPipe) salary: number) {

        return this.aurthorRepo.find({
            where:{
                // coincidencia exacta
                // salary: salary

                // mayor o igual:
                salary: MoreThanOrEqual(salary)
            },
            order: {
                salary: "DESC"
            }
        });
      
    }
     
}
