import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './reservation.model';
import { Repository } from 'typeorm';

@Controller('reservation')
export class ReservationController {

    constructor(
        @InjectRepository(Reservation) 
        private reservationRepo: Repository<Reservation>
    ) {}

// findAll
@Get()
findAll() {
    return this.reservationRepo.find();
}

// findById
@Get('filter-by-id/:id')
findById(@Param('id', ParseIntPipe)id: number) {
    return this.reservationRepo.findOne({
      where: {
        id: id
        }
    });
}

@Get('filter-by-user/:id')
findByUserId(@Param('id', ParseIntPipe) id: number){
    return this.reservationRepo.findOne({
        where: {
            user: {
                id: id
              }
          }
      });
}

@Get('filter-by-book/:id')
findByBookId(@Param('id', ParseIntPipe) id: number){
    return this.reservationRepo.findOne({
        where: {
            book: {
                id: id
              }
          }
      });
}

// Filtro dinámico para soportar múltiples parámetros al filtrar
@Get('filter')
findWithFilter(@Query() filters: any) {
      console.log(filters);

      // si está vacio devolver .find() sin filtro
      if(Object.keys(filters).length === 0)
           return this.reservationRepo.find();

    // si no está vacio entonces filtrar:
    return this.reservationRepo.find({
        where: filters
    });

}

@Post()
create(@Body() reservation: Reservation)  {
    return this.reservationRepo.save(reservation);
}






}
