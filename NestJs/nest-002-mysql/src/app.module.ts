import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/book.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'maricarmen27',
      database: 'nest', // crear esta base de datos en MYSQL primero 
      entities: [Book],
      synchronize: true, // generar tablas en base de datos 
      logging: true
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
