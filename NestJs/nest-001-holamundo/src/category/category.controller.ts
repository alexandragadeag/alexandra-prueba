import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Category } from './category.model';

@Controller('category')
export class CategoryController {

    // findAll
    @Get()
    findAll (): Category[] {
        return [
            {id: 1, name: 'category1', description: 'example'},
            {id: 2, name: 'category2', description: 'example'},
            {id: 3, name: 'category3', description: 'example'}
        ];
    }

    //Para filtrar: @Param('id')
    // findById 
    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) {
        return {
            id: id,
            name: 'cat1',
            description: 'prueba'
        }
    }
    

    // http://localhost:3000/category/filter-by-name/categgory1
    @Get('filter-by-name/:name')
    findByName(@Param('name') name: string) {
        console.log(name);
        return {
            id: 1,
            name: name,
            description: 'prueba'
        }

    }


    // findBy..

    // create

    // update

    // delete
}
