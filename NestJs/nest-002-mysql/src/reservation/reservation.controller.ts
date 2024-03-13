import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
@Get(':id')
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

// query params



// create

}
